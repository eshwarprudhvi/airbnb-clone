
// Initialize the map and set its view to a geographical center and zoom level
const map = L.map('map').setView([51.505, -0.09], 13);

// Add a tile layer from OpenStreetMap
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map);

// Optional: Add a marker
const marker = L.marker([118.6923, 34.0381]).addTo(map);
marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
   