var osmUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  osmAttrib = '&copy; <a href="http://openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  osm = L.tileLayer(osmUrl, {minZoom: 50, attribution: osmAttrib});
var map = L.map('map').setView([18.44989, -69.97568], 14).addLayer(osm);
L.marker([18.44989, -69.97568])
  .addTo(map)
  .bindPopup('Plaza de la Bandera')
  .openPopup();
