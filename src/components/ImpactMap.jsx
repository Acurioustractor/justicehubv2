import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import MapSkeleton from './MapSkeleton';
import PropTypes from 'prop-types';

// Update with the new token
mapboxgl.accessToken = 'pk.eyJ1IjoiYWN0bWFwMSIsImEiOiJjbTFuM2p6OWEwdGJ3MmtxNWF1NGs0bjFqIn0.JjUQJJOFEQOtwtv24HwDdA';

const ImpactMap = ({ markers = [], onMarkerClick = () => {}, selectedProgram = null }) => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!mapContainer.current) return;

    const initializeMap = async () => {
      try {
        setIsLoading(true);

        map.current = new mapboxgl.Map({
          container: mapContainer.current,
          style: 'mapbox://styles/mapbox/streets-v12',
          center: [133.7751, -25.2744],
          zoom: 4
        });

        map.current.on('load', () => {
          setIsLoading(false);

          markers.forEach(program => {
            const el = document.createElement('div');
            el.className = 'marker';
            el.style.width = '25px';
            el.style.height = '25px';
            el.style.backgroundColor = '#3B82F6';
            el.style.borderRadius = '50%';
            el.style.border = '2px solid white';
            el.style.cursor = 'pointer';

            new mapboxgl.Marker(el)
              .setLngLat([program.longitude, program.latitude])
              .setPopup(
                new mapboxgl.Popup({ offset: 25 })
                  .setHTML(`
                    <h3 class="font-bold">${program.name}</h3>
                    <p>${program.impact}</p>
                  `)
              )
              .addTo(map.current);

            el.addEventListener('click', () => onMarkerClick(program));
          });
        });

        map.current.on('error', (e) => {
          console.error('Mapbox error:', e);
          setError('Error loading map');
          setIsLoading(false);
        });

      } catch (err) {
        console.error('Error initializing map:', err);
        setError(err.message);
        setIsLoading(false);
      }
    };

    initializeMap();

    return () => {
      if (map.current) {
        map.current.remove();
      }
    };
  }, [markers]);

  // Update marker highlights when selected program changes
  useEffect(() => {
    const markers = document.querySelectorAll('.marker');
    markers.forEach((marker, index) => {
      if (selectedProgram && markers[index].id === selectedProgram.id) {
        marker.classList.add('marker-selected');
      } else {
        marker.classList.remove('marker-selected');
      }
    });
  }, [selectedProgram]);

  if (error) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-red-50 dark:bg-red-900/20">
        <div className="text-red-600 dark:text-red-400">
          {error}
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-full">
      {isLoading && <MapSkeleton />}
      <div 
        ref={mapContainer} 
        className="w-full h-full"
        style={{ visibility: isLoading ? 'hidden' : 'visible' }}
      />
    </div>
  );
};

ImpactMap.propTypes = {
  markers: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      latitude: PropTypes.number.isRequired,
      longitude: PropTypes.number.isRequired,
      type: PropTypes.string,
      impact: PropTypes.string,
      description: PropTypes.string,
      status: PropTypes.string,
    })
  ),
  onMarkerClick: PropTypes.func,
  selectedProgram: PropTypes.shape({
    id: PropTypes.string.isRequired,
  }),
};

export default ImpactMap; 