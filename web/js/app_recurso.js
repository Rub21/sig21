
window.setTimeout(function() {
    mapData_recurso();
}, 1000);

function mapData_recurso() {
    var f = list_recursos;
    console.log(f);
    map.markerLayer.on('layeradd', function(e) {
        var marker = e.layer;
        var feature = marker.feature;
        marker.setIcon(L.icon(feature.properties.icon));

        var images = feature.imagenes;
        var slideshowContent = '';
        console.log(feature);

        for (var i = 0; i < images.length; i++) {
            var img = images[i];
            //console.log(img['url']);
            slideshowContent += '<div class="image' + (i === 0 ? ' active' : '') + '">' +
                    '<img src="' + img['url'] + '" />' +
                    // '<div class="caption">' + img['url'] + '</div>' +
                    '</div>';
        }
        //button
        var a_button = '<div class=" btn-detail"><a  role="button" class="btn  btn-success"  href="#detail" onclick="call_detaill_recurso(\'' + feature.idproducto + '\')"> Más Detalle</a></div>';
        // Create custom popup content
        var popupContent = '<div id="' + feature.idproducto + '" class="popup">' +
                '<h2>' + feature.nombre + '</h2>' +
                '<div class="slideshow">' +
                slideshowContent +
                '</div>' +
                '<div class="cycle">' +
                '<a href="#" class="prev" onclick="moveSlide(\'prev\')">&laquo; Anterior</a>' +
                '<a href="#" class="next" onclick="moveSlide(\'next\')">Siguiente &raquo;</a>' +
                '</div>' +
                a_button +
                '</div>';
        // http://leafletjs.com/reference.html#popup
        marker.bindPopup(popupContent, {
            closeButton: false,
            minWidth: 320
        });
    });

    map.markerLayer.setGeoJSON(f);
}
;










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