const markerFromBench = bench => (
  new window.google.maps.Marker({
    position: new window.google.maps.LatLng(bench.lat, bench.lng),
    description: bench.description
  })
);

export default class MarkerManager {
  constructor (map) {
    this.map = map;
    this.markers = {};
  }

  updateMarkers (benches) {
    const { Marker, LatLng } = window.google.maps;
    // console.log('time to update', benches);
    benches.forEach(bench => {
      if (!(Object.keys(this.markers).includes(bench.id))) {
        this.markers[bench.id] = markerFromBench(bench);
      }
    });
  }
}
