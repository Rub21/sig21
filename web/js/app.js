

var map = L.mapbox.map('map', 'ruben.map-5m93f3zc').setView([-14.041, -74.636], 8);

var fullscreenControl = new L.Control.Fullscreen();
fullscreenControl.addTo(map);

var minimap = new L.Control.MiniMap(L.mapbox.tileLayer('examples.map-uci7ul8p'));
minimap.addTo(map);

var hash = L.hash();
hash.init(map);

$('#map').removeClass('loading');

mm_recurso2(mapData);


function mapData(f) {
    console.log(f);
}
;
/*
 var json = mm_recurso();
 
 
 window.setTimeout(function() {
 console.log(json);
 }, 3000);*/


$(document).on('ready', function() {

    /*   // Search
     $('#search').betterAutocomplete('init',
     features_search, {
     cacheLimit: 128,
     selectKeys: [13],
     crossOrigin: true
     }, {
     themeResult: function(result) {
     output = '' + result.title + '';
     return output;
     },
     select: function(result, $input) {
     $input.blur();
     $('#search').val(result.title);
     /*markerLayer.filter(function(features) {
     if (features.nombre === result.title) {
     map.ease.location({
     lat: features.geometry.coordinates[1],
     lon: features.geometry.coordinates[0]
     }).zoom(18).optimal();
     return true;             
     }             
     });
     window.setTimeout(function() {
     $('#search').val("");
     }, 3000);
     
     },
     getGroup: function(result) {
     if ($.type(result.categoria) == 'string' && result.categoria.length)
     return result.categoria;
     }
     });*/



});