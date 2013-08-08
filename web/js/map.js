var map = L.mapbox.map('map', 'ruben.map-5m93f3zc').setView([-14.041, -74.636], 8);

var fullscreenControl = new L.Control.Fullscreen();
fullscreenControl.addTo(map);

var minimap = new L.Control.MiniMap(L.mapbox.tileLayer('examples.map-uci7ul8p'));
minimap.addTo(map);


//para obtener el hash
window.setTimeout(function() {
    var hash = L.hash();
    hash.init(map);
}, 1000);



$('#map').removeClass('loading');

