mm_hoteles();
window.setTimeout(function() {
    mapData_hoteles();
}, 2000);

function mapData_hoteles() {

    var f = list_hoteles;
    console.log(f);
    //list_hoteles = f;

    map.markerLayer.on('layeradd', function(e) {
        var marker = e.layer;
        var feature = marker.feature;
        marker.setIcon(L.icon(feature.properties.icon));

        var images = feature.imagenes;
        var slideshowContent = '';
        //console.log(feature);

        for (var i = 0; i < images.length; i++) {
            var img = images[i];
            //console.log(img['url']);
            slideshowContent += '<div class="image' + (i === 0 ? ' active' : '') + '">' +
                    '<img src="' + img['url'] + '" />' +
                    // '<div class="caption">' + img['url'] + '</div>' +
                    '</div>';
        }
        //button
        var a_button = '<div class=" btn-detail"><a  role="button" class="btn  btn-success"  href="#detail" onclick="call_detaill_hotel(\'' + feature.idproducto + '\')"> Más Detalle</a></div>';
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
    fill_search_products(f)

    $('#map').removeClass('loading');
}
;


function filter() {
    //alert('2estrellas');
    var url = document.URL;
    var hash = url.substring(url.indexOf("#") + 1);
    //console.log(hash)
    map.markerLayer.setFilter(function(f) {
        if (hash === '1estrellas' || hash === '2estrellas' || hash === '3estrellas' || hash === '4estrellas')
        {
            return f.categoria.replace(/\s/g, "").toLowerCase() === hash;
        } else {
            return true;
        }
    });
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
        var f_search = _.find(list_hoteles, function(item) {
            return item.nombre.replace(/\s/g, "") === nombre;
        });
        if (_.isUndefined(f_search)) {
            //alert('Este servicio no fue registrado');
            $('#faill_search').empty();
            $('#faill_search').append('<div class="alert alert-error"><button type="button" class="close" data-dismiss="alert">&times;</button>Este servicio no fue registrado</div>')
            $('#search').val('');

        } else {
            fill_search_products([f_search]);
        }

        window.setTimeout(function() {
            $('#search').val('');
            $('#faill_search').empty();
        }, 2000);
    });


    $('.select_hoteles').click(function() {
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
});


