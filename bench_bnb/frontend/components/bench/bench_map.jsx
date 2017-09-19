import React from 'react';

import MarkerManager from '../../util/marker_manager';

class BenchMap extends React.Component {
  componentDidMount () {
    const { Map } = window.google.maps;
    const mapOptions = {
      center: { lat: 37.7758, lng: -122.435 }, // this is SF
      zoom: 13
    };
    this.map = new Map(this.refs.map, mapOptions);
    this.map.addListener('idle',() => {
      const bounds = this.map.getBounds();
      this.props.updateBounds({
        northEast: {
          lat: bounds.getNorthEast().lat(),
          lng: bounds.getNorthEast().lng()
        },
        southWest: {
          lat: bounds.getSouthWest().lat(),
          lng: bounds.getSouthWest().lng()
        }
      });
    });
    this.markerManager = new MarkerManager(this.map);
    this.markerManager.updateMarkers(this.props.benches);
  }

  componentDidUpdate () {
    this.markerManager.updateMarkers(this.props.benches);
    // console.log(this.markerManager);
  }

  render () {
    return (
      <div id='map-container' ref='map'>
      </div>
    );
  }
}

export default BenchMap;
