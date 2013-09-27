mm_transportes();
window.setTimeout(function() {
    mapData_transportes();
}, 2000);


function mapData_transportes() {
    var arr = list_transportes;
    console.log(arr);
    map.markerLayer.on('layeradd', function(e) {
        var marker = e.layer;
        var feature = marker.feature;
        marker.setIcon(L.icon(feature.properties.icon));

        var images = feature.imagenes;
        var slideshowContent = '';
        //  console.log(feature);

        for (var i = 0; i < images.length; i++) {
            var img = images[i];
            //console.log(img['url']);
            slideshowContent += '<div class="image' + (i === 0 ? ' active' : '') + '">' +
                    '<img src="' + img['url'] + '" />' +
                    // '<div class="caption">' + img['url'] + '</div>' +
                    '</div>';
        }
        //button
        var a_button = '<div class=" btn-detail"><a  role="button" class="btn  btn-success"  href="#detail" onclick="call_detaill_transporte(\'' + feature.idproducto + '\')"> Más Detalle</a></div>';
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
    });

    map.markerLayer.setGeoJSON(arr);
    /*map.markerLayer.on('mouseover', function(e) {
     e.layer.openPopup();
     });*/
    filter(arr);


    $('#map').removeClass('loading');

}
;


function filter(arr) {
    var url = document.URL;
    var hash = url.substring(url.indexOf("#") + 1);

    //filtro en el mapa
    map.markerLayer.setFilter(function(f) {
        if (hash === 'interdepartamental' || hash === 'interprovincial' || hash === 'interdistrital')
        {
            return f.tipo.replace(/\s/g, "").toLowerCase() === hash;
        } else {
            return true;
        }
    });

    //filtro en sidebar
    if (hash === 'interdepartamental' || hash === 'interprovincial' || hash === 'interdistrital')
    {
        arr = _.filter(arr, function(item) {
            return item.tipo.replace(/\s/g, "").toLowerCase() === hash;
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
        source: list_auto_transportes
    });

    $('a[href="#buscar"]').click(function(e) {
        e.preventDefault();
        var nombre = $('#search').val().replace(/\s/g, "");
        var f_search = _.find(list_transportes, function(item) {
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


    $('.select_transporte').click(function() {
        var id = this.id;
        //filtrar en el mapa
        map.markerLayer.setFilter(function(f) {
            if (id === 'todos')
            {
                return true;
            } else {
                return f.tipo.replace(/\s/g, "").toLowerCase() === id;
            }
        });
        //filtrar en sidebar
        if (id === 'todos')
        {
            fill_search_products(list_transportes);
        } else {
            var arr = _.filter(list_transportes, function(item) {
                return item.tipo.replace(/\s/g, "").toLowerCase() === id;
            });
            fill_search_products(arr);
        }
        ;


    });

});
