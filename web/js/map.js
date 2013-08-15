
//Resize map
var n_map = $(window).height();
$('#map').css('height', n_map - 60);

var map = L.mapbox.map('map', 'ruben.map-5m93f3zc').setView([-14.041, -74.636], 8);

/*var fullscreenControl = new L.Control.Fullscreen();
 fullscreenControl.addTo(map);*/
L.control.scale().addTo(map);

var minimap = new L.Control.MiniMap(L.mapbox.tileLayer('examples.map-uci7ul8p'));
minimap.addTo(map);

//para obtener el hash
window.setTimeout(function() {
    var hash = L.hash();
    hash.init(map);
}, 3000);





