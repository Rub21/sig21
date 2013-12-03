mm_hoteles();
window.setTimeout(function() {
    mapData_hoteles();
}, 2000);

function mapData_hoteles() {
    var arr = list_hoteles;
    map.markerLayer.on('layeradd', function(e) {

        //this.eachLayer(function(marker) {
            var marker = e.layer;
            var feature = marker.feature;
            marker.setIcon(L.icon(feature.properties.icon));
            var images = feature.imagenes;
            var slideshowContent = '';
            for (var i = 0; i < images.length; i++) {
                var img = images[i];

                slideshowContent += '<div class="image' + (i === 0 ? ' active' : '') + '">' +
                        '<img src="' + img['url'] + '" />' +
                        // '<div class="caption">' + img['url'] + '</div>' +
                        '</div>';
            }
            //button
            var a_button = '<div class=" btn-detail"><a  role="button" class="btn  btn-success"  href="#detail" onclick="call_detaill_hotel(\'' + feature.idproducto + '\')"> Más Detalle</a></div>';
            // Create custom popup content
            var popupContent = '<div id="' + feature.idproducto + '" class="popup">' +
                    '<h3>' + feature.nombre + '</h3>' +
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
            
             
       // });

    });

    map.markerLayer.setGeoJSON(arr);

    filter(arr);
    $('#map').removeClass('loading');
}
;


function filter(arr) {
    var url = document.URL;
    var hash = url.substring(url.indexOf("#") + 1);
    //filtrado en la mapa
    map.markerLayer.setFilter(function(f) {
        if (hash === 'sincategoria' || hash === '1estrellas' || hash === '2estrellas' || hash === '3estrellas' || hash === '4estrellas')
        {
            return f.categoria.replace(/\s/g, "").toLowerCase() === hash;
        } else {
            return true;
        }
    });

    //filter para sidebar
    if (hash === 'sincategoria' || hash === '1estrellas' || hash === '2estrellas' || hash === '3estrellas' || hash === '4estrellas')
    {
        arr = _.filter(arr, function(item) {
            return item.categoria.replace(/\s/g, "").toLowerCase() === hash
        });
        fill_search_products(arr);
    } else {
        fill_search_products(arr);
    }
}
;

$(document).on('ready', function() {
    //Autocomplete
    $("#search").autocomplete({
        source: list_auto_hoteles
    });
    $('a[href="#buscar"]').click(function(e) {
        e.preventDefault();

        var nombre = $('#search').val().replace(/\s/g, "");
        var arr = _.find(list_hoteles, function(item) {
            return item.nombre.replace(/\s/g, "") === nombre;
        });
        if (_.isUndefined(arr)) {
            $('#faill_search').empty();
            $('#faill_search').append('<div class="alert alert-error"><button type="button" class="close" data-dismiss="alert">&times;</button>Este servicio no fue registrado</div>')
            $('#search').val('');

        } else {
            fill_search_products([arr]);
        }
        window.setTimeout(function() {
            $('#search').val('');
            $('#faill_search').empty();
        }, 2000);
    });


    $('.select_hoteles').click(function() {
        var id = this.id;
        //filtrado en el mapa
        map.markerLayer.setFilter(function(f) {
            if (id === 'todos')
            {
                return true;
            } else {
                return f.categoria.replace(/\s/g, "").toLowerCase() === id;
            }
        });
        //filtrado en sidebar   
        if (id === 'todos')
        {
            fill_search_products(list_hoteles);
        } else {
            var arr = _.filter(list_hoteles, function(item) {
                return item.categoria.replace(/\s/g, "").toLowerCase() === id
            });
            fill_search_products(arr);
        }
    });
});


