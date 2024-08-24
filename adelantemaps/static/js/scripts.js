// initialize map
var map = L.map('map', {
    zoomControl: false
  }).setView([10.3157, 123.8854], 9.5);
  
L.control.zoom({
position: 'bottomright'
}).addTo(map);

// map layer
var osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);
osm.addTo(map);

// toggle dropdown
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // close dropdown if the user clicks outside of it
  window.onclick = function(e) {
    if (!e.target.matches('.dropbtn')) {
    var myDropdown = document.getElementById("myDropdown");
      if (myDropdown.classList.contains('show')) {
        myDropdown.classList.remove('show');
      }
    }
  }
