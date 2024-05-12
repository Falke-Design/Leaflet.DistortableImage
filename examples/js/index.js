let map;

(() => {
  map = L.map('map').setView([51.505, -0.09], 13);
  // map.addGoogleMutant();
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        'attribution': 'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors'
    }).addTo(map)
  map.whenReady(() => {
    img = L.distortableImageOverlay('example.jpg', {
      selected: false,
      fullResolutionSrc: 'large.jpg',
    }).addTo(map);
  });
})();

L.Control.geocoder().addTo(map);
