import { describe, it, expect, beforeEach, vi } from 'vitest';
import { render, screen } from '../../test/test-utils';
import ImpactMap from '../ImpactMap';

describe('ImpactMap', () => {
  const mockMarkers = [
    { id: '1', latitude: -25, longitude: 135, title: 'Test Location' }
  ];

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders loading state initially', () => {
    render(<ImpactMap markers={mockMarkers} />);
    expect(screen.getByTestId('map-skeleton')).toBeInTheDocument();
  });

  it('handles marker clicks', () => {
    const onMarkerClick = vi.fn();
    render(<ImpactMap markers={mockMarkers} onMarkerClick={onMarkerClick} />);
    
    // Simulate marker click
    const marker = screen.getByRole('button', { name: /Test Location/i });
    marker.click();
    
    expect(onMarkerClick).toHaveBeenCalledWith(mockMarkers[0]);
  });

  it('applies dark mode styles correctly', () => {
    render(<ImpactMap markers={mockMarkers} />);
    const mapContainer = screen.getByTestId('map-container');
    
    expect(mapContainer).toHaveClass('dark:bg-gray-900');
  });
}); 