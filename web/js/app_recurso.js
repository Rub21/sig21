
window.setTimeout(function() {
    mapData_recurso();
}, 2000);

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
    filter();
}
;



function filter() {
    var url = document.URL;
    var hash = url.substring(url.indexOf("#") + 1);
    // console.log(hash)
    map.markerLayer.setFilter(function(f) {
        if (hash === 'sitiosarqueológicos' || hash === 'arquitecturacolonial' || hash === 'sitioshistoricos' || hash === 'culturaviva' || hash === 'paisajenatural')
        {
            return f.categoria.replace(/\s/g, "").toLowerCase() === hash;
        } else {
            return true;
        }
    });
}
;

$(document).on('ready', function() {
    $('.select_recursos').click(function() {
        var id = this.id;
        map.markerLayer.setFilter(function(f) {
            if (id === 'todos')
            {
                return true;
            } else {
                return f.categoria.replace(/\s/g, "").toLowerCase() === id;
            }

        });
    });
//imagen
    $('.overimagen_recurso').click(function() {
        $('.click_imagen').click();
        $('#popover_imagen').css({
            'width': '75%',
            'height': '95%',
            'margin-top': '-5%',
            'margin-left': function() {
                return -($(this).width() / 2);
            }
        });
        var id = $('.idproducto').text();
        //alert(id)
        var array_images = buscarproducto(list_recursos, id).imagenes;
        full_imagen_recurso(array_images, 900);
    })





});