export default class MarkerManager {
  constructor (map) {
    this.map = map;
    this.markers = {};
  }
  //...
  updateMarkers (benches) {
    const { Marker, LatLng } = window.google.maps;
    // console.log('time to update', benches);
    benches.forEach(bench => {
      if (!(Object.keys(this.markers).includes(bench.id))) {
        const marker = new Marker({
          position: new LatLng(bench.lat, bench.lng),
          description: bench.description
        });
        this.markers[bench.id] = marker;
      }
    });
  }
}
