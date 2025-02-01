import React, { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix for default marker icons
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

// Set up the default icon
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

// Custom icons
const detentionIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

const reinvestmentIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

const mapStyle = {
  height: '500px',
  width: '100%',
  position: 'relative',
  zIndex: 0
};

// First, let's create a styles object at the top of the component
const styles = {
  // Layout
  container: "flex h-screen",
  mapContainer: "flex-1",
  sidebar: "w-96 bg-white border-l border-gray-200 overflow-y-auto h-screen",
  
  // Header styles
  header: {
    container: "border-b border-gray-200 bg-gray-50",
    title: "text-xl font-semibold text-gray-900",
    subtitle: "text-sm text-gray-600 mt-1",
    closeButton: "text-gray-400 hover:text-gray-500 transition-colors",
  },

  // Refined button styles
  buttons: {
    // Toggle buttons (Show/Hide Centers/Programs)
    toggle: `
      inline-flex items-center
      px-3 py-1.5
      text-sm font-medium
      rounded-md
      transition-all duration-150
      border
      shadow-sm
    `,
    toggleDanger: `
      text-red-600
      bg-white
      border-red-200
      hover:bg-red-50
    `,
    toggleSuccess: `
      text-green-600
      bg-white
      border-green-200
      hover:bg-green-50
    `,

    // Action buttons (Documentation, Stories, etc.)
    action: `
      inline-flex items-center
      px-3 py-1.5
      text-sm font-medium
      rounded-md
      transition-all duration-150
      text-gray-600
      bg-white
      border border-gray-200
      hover:bg-gray-50
      hover:text-gray-900
      hover:border-gray-300
    `,

    // Navigation tabs
    tab: `
      px-3 py-2
      text-sm font-medium
      rounded-md
      transition-all duration-150
      hover:bg-gray-50
    `,
    tabActive: "text-indigo-600 bg-indigo-50",
    tabInactive: "text-gray-600 hover:text-gray-900",
  },

  // Refined action button styles
  actionButton: `
    px-4 py-2 
    inline-flex items-center 
    text-sm font-medium 
    rounded-md 
    bg-white 
    border border-gray-200 
    text-gray-700 
    hover:bg-gray-50 
    hover:border-gray-300 
    transition-all 
    duration-150
    shadow-sm
  `,

  // Badges
  badge: {
    base: "inline-flex items-center px-3 py-1 rounded-full text-sm font-medium",
    danger: "bg-red-100 text-red-800 ring-1 ring-red-600/20",
    success: "bg-green-100 text-green-800 ring-1 ring-green-600/20",
  },

  // Content sections
  content: {
    section: "bg-white rounded-lg border border-gray-200 p-4 mb-4",
    title: "text-lg font-medium text-gray-900 mb-4",
    grid: "grid grid-cols-2 gap-4",
    label: "text-sm font-medium text-gray-500",
    value: "text-sm text-gray-900",
    container: "px-4 py-4 overflow-y-auto max-h-[calc(100vh-280px)]",
  },

  // GitHub-inspired repository stats
  repoStats: {
    container: "px-4 py-3 border-b border-gray-200 flex items-center space-x-4 overflow-x-auto",
    stat: "flex items-center text-sm text-gray-600",
    icon: "mr-1 h-4 w-4",
  },

  // Repository actions
  repoActions: {
    container: "px-4 py-3 border-b border-gray-200 flex items-center justify-between",
    mainButton: "inline-flex items-center px-3 py-1.5 text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700",
    dropdown: "inline-flex items-center px-3 py-1.5 text-sm font-medium rounded-md border border-gray-300 bg-white text-gray-700 hover:bg-gray-50",
  },

  // Branch selector
  branchSelect: {
    container: "px-4 py-2 border-b border-gray-200 flex items-center space-x-2",
    button: "inline-flex items-center px-2 py-1 text-sm text-gray-700 bg-gray-50 border border-gray-300 rounded-md hover:bg-gray-100",
  },
};

const ImpactMap = () => {
  const mapRef = useRef(null);
  const mapContainerRef = useRef(null);
  const markersRef = useRef({ detention: [], reinvestment: [] });
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [showDetentionCenters, setShowDetentionCenters] = useState(true);
  const [showReinvestment, setShowReinvestment] = useState(true);

  const detentionCenters = [
    {
      id: 1,
      name: "Banksia Hill Detention Centre",
      position: [-32.0397, 115.9489],
      details: {
        capacity: 200,
        currentPopulation: 165,
        indigenousPercentage: 75,
        educationProvider: "Department of Education WA"
      }
    },
    {
      id: 2, 
      name: "Cleveland Youth Detention Centre",
      position: [-19.2590, 146.8169],
      details: {
        capacity: 130,
        currentPopulation: 108,
        indigenousPercentage: 89,
        educationProvider: "Department of Education QLD"
      }
    },
    {
      id: 3,
      name: "Brisbane Youth Detention Centre",
      position: [-27.6000, 152.9000],
      details: {
        capacity: 85,
        currentPopulation: 80,
        indigenousPercentage: 67,
        educationProvider: "Department of Education QLD"
      }
    },
    {
      id: 4,
      name: "Don Dale Youth Detention Centre",
      position: [-12.4634, 130.9273],
      details: {
        capacity: 40,
        currentPopulation: 38,
        indigenousPercentage: 95,
        educationProvider: "Department of Education NT"
      }
    },
    {
      id: 5,
      name: "Kurlana Tapa Youth Justice Centre",
      position: [-34.8485, 138.5195],
      details: {
        capacity: 96,
        currentPopulation: 85,
        indigenousPercentage: 65,
        educationProvider: "Department of Education SA"
      }
    },
    {
      id: 6,
      name: "Bimberi Youth Justice Centre",
      position: [-35.3075, 149.0936],
      details: {
        capacity: 40,
        currentPopulation: 35,
        indigenousPercentage: 40,
        educationProvider: "Department of Education ACT"
      }
    },
    {
      id: 7,
      name: "Ashley Youth Detention Centre",
      position: [-41.3474, 146.9318],
      details: {
        capacity: 50,
        currentPopulation: 45,
        indigenousPercentage: 25,
        educationProvider: "Department of Education TAS"
      }
    },
    {
      id: 8,
      name: "Malmsbury Youth Justice Centre",
      position: [-37.1922, 144.3694],
      details: {
        capacity: 90,
        currentPopulation: 80,
        indigenousPercentage: 30,
        educationProvider: "Department of Education VIC"
      }
    },
    {
      id: 9,
      name: "Parkville Youth Justice Centre",
      position: [-37.7840, 144.9530],
      details: {
        capacity: 80,
        currentPopulation: 75,
        indigenousPercentage: 35,
        educationProvider: "Department of Education VIC"
      }
    },
    {
      id: 10,
      name: "Frank Baxter Youth Justice Centre",
      position: [-33.4228, 151.3728],
      details: {
        capacity: 120,
        currentPopulation: 100,
        indigenousPercentage: 55,
        educationProvider: "Department of Education NSW"
      }
    },
    {
      id: 11,
      name: "Cobham Youth Justice Centre",
      position: [-33.8688, 151.2093],
      details: {
        capacity: 100,
        currentPopulation: 90,
        indigenousPercentage: 50,
        educationProvider: "Department of Education NSW"
      }
    }
  ];

  const reinvestmentOrgs = [
    {
      id: 1,
      name: "Maranguka Justice Reinvestment",
      position: [-30.0919, 146.9132],
      details: {
        location: "Bourke, NSW",
        focus: "Community-led justice reinvestment",
        partners: "Just Reinvest NSW, Aboriginal Legal Service",
        impact: "40% reduction in juvenile charges in the area"
      }
    },
    {
      id: 2,
      name: "Justice Reinvestment SA",
      position: [-34.9285, 138.6007],
      details: {
        location: "Port Adelaide, SA",
        focus: "Youth justice and early intervention",
        partners: "Aboriginal Legal Rights Movement",
        impact: "Supporting over 100 young people annually"
      }
    },
    {
      id: 3,
      name: "Olabud Doogethu",
      position: [-18.0178, 125.5891],
      details: {
        location: "Halls Creek, WA",
        focus: "Indigenous-led justice reinvestment",
        partners: "Shire of Halls Creek",
        impact: "Significant reduction in youth offending rates"
      }
    },
    {
      id: 4,
      name: "Katherine Youth Justice Reinvestment",
      position: [-14.4652, 132.2645],
      details: {
        location: "Katherine, NT",
        focus: "Youth diversion and support",
        partners: "YMCA, local Aboriginal organizations",
        impact: "Providing alternatives to detention for at-risk youth"
      }
    },
    {
      id: 5,
      name: "Smart Justice for Young People",
      position: [-37.8136, 144.9631],
      details: {
        location: "Melbourne, VIC",
        focus: "Youth justice reform advocacy",
        partners: "Youthlaw, community legal centers",
        impact: "Policy reform and youth advocacy"
      }
    },
    {
      id: 6,
      name: "Mount Druitt Justice Reinvestment",
      position: [-33.7667, 150.8167],
      details: {
        location: "Mount Druitt, NSW",
        focus: "Early intervention and community support",
        partners: "Ted Noffs Foundation, Local Community Groups",
        impact: "Reduced youth offending through early intervention programs"
      }
    },
    {
      id: 7,
      name: "Cairns Justice Reinvestment Initiative",
      position: [-16.9186, 145.7781],
      details: {
        location: "Cairns, QLD",
        focus: "Indigenous youth support and diversion",
        partners: "Queensland Youth Justice, Local Elders",
        impact: "Created culturally appropriate diversion programs"
      }
    },
    {
      id: 8,
      name: "Cherbourg Justice Reinvestment",
      position: [-26.2883, 151.9543],
      details: {
        location: "Cherbourg, QLD",
        focus: "Community-driven youth programs",
        partners: "Cherbourg Aboriginal Shire Council",
        impact: "Strengthened community-led youth support systems"
      }
    }
  ];

  function updateMarkers() {
    if (!mapRef.current) return;

    // Clear existing markers
    markersRef.current.detention.forEach(marker => marker.remove());
    markersRef.current.reinvestment.forEach(marker => marker.remove());
    markersRef.current = { detention: [], reinvestment: [] };

    // Add detention centers
    if (showDetentionCenters) {
      detentionCenters.forEach(center => {
        const marker = L.marker(center.position, { icon: detentionIcon })
          .addTo(mapRef.current)
          .on('click', () => setSelectedLocation({ ...center, type: 'detention' }));
        markersRef.current.detention.push(marker);
      });
    }

    // Add reinvestment organizations
    if (showReinvestment) {
      reinvestmentOrgs.forEach(org => {
        const marker = L.marker(org.position, { icon: reinvestmentIcon })
          .addTo(mapRef.current)
          .on('click', () => setSelectedLocation({ ...org, type: 'reinvestment' }));
        markersRef.current.reinvestment.push(marker);
      });
    }
  }

  useEffect(() => {
    function initializeMap() {
      if (!mapRef.current && mapContainerRef.current) {
        const map = L.map(mapContainerRef.current);
        map.setView([-25.2744, 133.7751], 4);
        mapRef.current = map;

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          maxZoom: 19,
          attribution: '© OpenStreetMap contributors'
        }).addTo(map);

        map.invalidateSize();
        updateMarkers();
      }
    }

    initializeMap();

    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    updateMarkers();
  }, [showDetentionCenters, showReinvestment]);

  return (
    <div className={styles.container}>
      <div className={styles.mapContainer}>
        {/* Toggle Buttons */}
        <div className="p-4 space-x-3">
          <button 
            onClick={() => setShowDetentionCenters(!showDetentionCenters)}
            className={`${styles.buttons.toggle} ${styles.buttons.toggleDanger}`}
          >
            <svg className="mr-1.5 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
            {showDetentionCenters ? 'Hide' : 'Show'} Centers
          </button>
          <button 
            onClick={() => setShowReinvestment(!showReinvestment)}
            className={`${styles.buttons.toggle} ${styles.buttons.toggleSuccess}`}
          >
            <svg className="mr-1.5 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            {showReinvestment ? 'Hide' : 'Show'} Programs
          </button>
        </div>

        {/* Map */}
        <div ref={mapContainerRef} style={mapStyle} />
      </div>

      {/* Sidebar */}
      {selectedLocation && (
        <div className={styles.sidebar}>
          <div className={styles.header.container}>
            <div className="p-4">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className={styles.header.title}>{selectedLocation.name}</h2>
                  <p className={styles.header.subtitle}>
                    {selectedLocation.type === 'detention' ? 'Youth Detention Center' : 'Justice Reinvestment Program'}
                  </p>
                </div>
                <button 
                  onClick={() => setSelectedLocation(null)}
                  className={styles.header.closeButton}
                >
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Repository Stats */}
            <div className={styles.repoStats.container}>
              <span className={styles.repoStats.stat}>
                <svg className={styles.repoStats.icon} fill="currentColor" viewBox="0 0 16 16">
                  <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.75.75 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Z"/>
                </svg>
                42 stars
              </span>
              <span className={styles.repoStats.stat}>
                <svg className={styles.repoStats.icon} fill="currentColor" viewBox="0 0 16 16">
                  <path d="M5 5.372v.878c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75v-.878a2.25 2.25 0 1 1 1.5 0v.878a2.25 2.25 0 0 1-2.25 2.25h-1.5v2.128a2.251 2.251 0 1 1-1.5 0V8.5h-1.5A2.25 2.25 0 0 1 3.5 6.25v-.878a2.25 2.25 0 1 1 1.5 0ZM5 3.25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Zm6.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm-3 8.75a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Z"/>
                </svg>
                12 forks
              </span>
              <span className={styles.repoStats.stat}>
                <svg className={styles.repoStats.icon} fill="currentColor" viewBox="0 0 16 16">
                  <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"/>
                  <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0ZM1.5 8a6.5 6.5 0 1 1 13 0 6.5 6.5 0 0 1-13 0Z"/>
                </svg>
                28 watching
              </span>
            </div>

            {/* Repository Actions */}
            <div className={styles.repoActions.container}>
              <button className={styles.repoActions.mainButton}>
                <svg className="mr-1.5 h-4 w-4" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M5 5.372v.878c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75v-.878a2.25 2.25 0 1 1 1.5 0v.878a2.25 2.25 0 0 1-2.25 2.25h-1.5v2.128a2.251 2.251 0 1 1-1.5 0V8.5h-1.5A2.25 2.25 0 0 1 3.5 6.25v-.878a2.25 2.25 0 1 1 1.5 0Z"/>
                </svg>
                Fork Program
              </button>
              <button className={styles.repoActions.dropdown}>
                <svg className="mr-1.5 h-4 w-4" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M8 2a.75.75 0 0 1 .75.75v8.787l2.941-3.287a.75.75 0 1 1 1.118 1L8 14.469.191 9.25a.75.75 0 1 1 1.118-1L4.25 11.537V2.75A.75.75 0 0 1 8 2Z"/>
                </svg>
                Download Data
              </button>
            </div>

            {/* Branch Selector */}
            <div className={styles.branchSelect.container}>
              <button className={styles.branchSelect.button}>
                <svg className="mr-1.5 h-4 w-4" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M9.5 3.25a2.25 2.25 0 1 1 3 2.122V6A2.5 2.5 0 0 1 10 8.5H6a1 1 0 0 0-1 1v1.128a2.251 2.251 0 1 1-1.5 0V5.372a2.25 2.25 0 1 1 1.5 0v1.836A2.493 2.493 0 0 1 6 7h4a1 1 0 0 0 1-1v-.628A2.25 2.25 0 0 1 9.5 3.25Zm-6 0a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Zm8.25-.75a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5ZM4.25 12a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Z"/>
                </svg>
                main
                <svg className="ml-1.5 h-4 w-4" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M4.427 7.427l3.396 3.396a.25.25 0 0 0 .354 0l3.396-3.396A.25.25 0 0 0 11.396 7H4.604a.25.25 0 0 0-.177.427z"/>
                </svg>
              </button>
              <span className="text-sm text-gray-500">Last updated 3 days ago</span>
            </div>

            {/* Action Buttons */}
            <div className="px-4 py-3 flex space-x-3 overflow-x-auto border-b border-gray-200">
              {[
                { name: 'Documentation', icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' },
                { name: 'Stories', icon: 'M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z' },
                { name: 'Share', icon: 'M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z' },
                { name: 'Case Studies', icon: 'M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' }
              ].map((action) => (
                <button key={action.name} className={styles.buttons.action}>
                  <svg className="mr-1.5 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={action.icon} />
                  </svg>
                  <span>{action.name}</span>
                </button>
              ))}
            </div>

            {/* Navigation */}
            <div className="px-4 border-t border-gray-200">
              <nav className="flex space-x-3 py-2">
                {['Overview', 'Resources', 'Community', 'Impact'].map((tab) => (
                  <button
                    key={tab}
                    className={`${styles.buttons.tab} ${
                      tab === 'Overview' ? styles.buttons.tabActive : styles.buttons.tabInactive
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </nav>
            </div>

            {/* Badge */}
            <div className="px-4 pb-2">
              <span className={`${styles.badge.base} ${
                selectedLocation.type === 'detention' ? styles.badge.danger : styles.badge.success
              }`}>
                {selectedLocation.type === 'detention' ? 'Detention Center' : 'Justice Reinvestment'}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className={styles.content.container}>
            {selectedLocation.type === 'detention' ? (
              <div className="space-y-6">
                {/* Key Statistics */}
                <div className={styles.content.section}>
                  <h3 className={styles.content.title}>Key Statistics</h3>
                  <dl className={styles.content.grid}>
                    <div>
                      <dt className={styles.content.label}>Capacity</dt>
                      <dd className={styles.content.value}>{selectedLocation.details.capacity}</dd>
                    </div>
                    <div>
                      <dt className={styles.content.label}>Current Population</dt>
                      <dd className={styles.content.value}>{selectedLocation.details.currentPopulation}</dd>
                    </div>
                    <div>
                      <dt className={styles.content.label}>Indigenous Youth</dt>
                      <dd className={styles.content.value}>{selectedLocation.details.indigenousPercentage}%</dd>
                    </div>
                    <div>
                      <dt className={styles.content.label}>Occupancy Rate</dt>
                      <dd className={styles.content.value}>
                        {Math.round((selectedLocation.details.currentPopulation / selectedLocation.details.capacity) * 100)}%
                      </dd>
                    </div>
                  </dl>
                </div>

                {/* Cultural Context */}
                <div className={styles.content.section}>
                  <h3 className={styles.content.title}>Cultural Context & Healing</h3>
                  <div className="mt-4 space-y-4">
                    <div>
                      <h4 className={styles.content.label}>Indigenous Knowledge Integration</h4>
                      <p className={styles.content.value}>
                        Current status of cultural programs and Elder involvement in youth support
                      </p>
                    </div>
                    <div>
                      <h4 className={styles.content.label}>Land-Based Learning</h4>
                      <p className={styles.content.value}>
                        Connection to traditional territories and ecological knowledge
                      </p>
                    </div>
                  </div>
                </div>

                {/* Community Engagement */}
                <div className={styles.content.section}>
                  <h3 className={styles.content.title}>Community Engagement</h3>
                  <div className="mt-4 space-y-4">
                    <div>
                      <h4 className={styles.content.label}>Elder Involvement</h4>
                      <p className={styles.content.value}>
                        Status of Elder-led programs and cultural mentorship
                      </p>
                    </div>
                    <div>
                      <h4 className={styles.content.label}>Language Programs</h4>
                      <p className={styles.content.value}>
                        Indigenous language learning opportunities
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                {/* Program Overview */}
                <div className={styles.content.section}>
                  <h3 className={styles.content.title}>Indigenous-Led Solutions</h3>
                  <div className="mt-4 space-y-4">
                    <div>
                      <h4 className={styles.content.label}>Cultural Governance</h4>
                      <p className={styles.content.value}>{selectedLocation.details.focus}</p>
                    </div>
                    <div>
                      <h4 className={styles.content.label}>Community Leadership</h4>
                      <p className={styles.content.value}>{selectedLocation.details.partners}</p>
                    </div>
                  </div>
                </div>

                {/* Cultural Knowledge Integration */}
                <div className={styles.content.section}>
                  <h3 className={styles.content.title}>Cultural Knowledge Hub</h3>
                  <div className="mt-4 space-y-4">
                    <div>
                      <h4 className={styles.content.label}>Traditional Practices</h4>
                      <p className={styles.content.value}>Integration of cultural protocols and ceremonies</p>
                    </div>
                    <div>
                      <h4 className={styles.content.label}>Land-Based Healing</h4>
                      <p className={styles.content.value}>Connection to Country and ecological knowledge</p>
                    </div>
                  </div>
                </div>

                {/* Impact & Outcomes */}
                <div className={styles.content.section}>
                  <h3 className={styles.content.title}>Indigenous Metrics of Success</h3>
                  <div className="mt-4 space-y-4">
                    <div>
                      <h4 className={styles.content.label}>Cultural Strengthening</h4>
                      <p className={styles.content.value}>Measures of cultural identity and connection</p>
                    </div>
                    <div>
                      <h4 className={styles.content.label}>Community Impact</h4>
                      <p className={styles.content.value}>{selectedLocation.details.impact}</p>
                    </div>
                  </div>
                </div>

                {/* Funding & Sustainability */}
                <div className={styles.content.section}>
                  <h3 className={styles.content.title}>Funding & Sovereignty</h3>
                  <div className="mt-4 space-y-4">
                    <div>
                      <h4 className={styles.content.label}>Community Control</h4>
                      <p className={styles.content.value}>Self-determined funding and program governance</p>
                    </div>
                    <div>
                      <h4 className={styles.content.label}>Sustainability</h4>
                      <p className={styles.content.value}>Long-term funding and community support mechanisms</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ImpactMap; 