mm_recurso();
mm_servicios();


window.setTimeout(function() {
    mapData_recurso();
}, 2000);

window.setTimeout(function() {
    mm_transportes();
    mm_restaurants();
    mm_hoteles();
    mm_complementarios();
}, 5000);

function mapData_recurso() {
    var arr = list_recursos;
    //console.log(f);
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
        var a_button = '<div class=" btn-detail"><a  role="button" class="btn  btn-success"  href="#detail" onclick="call_detaill_recurso(\'' + feature.idproducto + '\')"> Más Detalle</a></div>';
        // Create custom popup content
        var popupContent = '<div id="' + feature.idproducto + '" class="popup">' +
                '<h4>' + feature.nombre + '</h4>' +
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

    filter(arr);
    $('#map').removeClass('loading');
}
;



function filter(arr) {
    var url = document.URL;
    var hash = url.substring(url.indexOf("#") + 1);
    if (hash === 'sitiosarqueológicos' || hash === 'arquitecturacolonial' || hash === 'sitioshistoricos' || hash === 'culturaviva' || hash === 'paisajenatural')
    {
        map.markerLayer.setFilter(function(f) {
            return f.categoria.replace(/\s/g, "").toLowerCase() === hash;
        });
        //filter para sidebar
        arr = _.filter(arr, function(item) {
            return  item.categoria.replace(/\s/g, "").toLowerCase() === hash
        });
        fill_search_products(arr);
    } else if (hash === 'CorredorWari-Chanka-Inca' || hash === 'CorredorNazca-Chanka-Inca' || hash === 'CorredorParacas-Huaytará-Ayacucho' || hash === 'RutaPuquio-CoraCora-SaraSara' || hash === 'RutaHuancapi-Carapo-Huancasancos')
    {
        map.markerLayer.setFilter(function(f) {
            return f.corredor.replace(/\s/g, "") === hash;
        });
        //filter para sidebar
        arr = _.filter(arr, function(item) {
            return item.corredor.replace(/\s/g, "") === hash
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
        source: list_auto_recursos,
        select: function(event, ui) {


            busqueda(ui.item.value)

        }
    });



    $('a[href="#buscar"]').click(function(e) {
        e.preventDefault();
        var nombre = $('#search').val().replace(/\s/g, "");


        //filtrar en mapa
        map.markerLayer.setFilter(function(f) {
            return f.nombre.replace(/\s/g, "") === nombre;
        });

        //filtrar en sidebar
        var arr = _.find(list_recursos, function(item) {
            return item.nombre.replace(/\s/g, "") === nombre;
        });
        if (_.isUndefined(arr)) {
            //informacion de falla en busqueda
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
        //filtrar recurso en sidebar
        if (id === 'todos')
        {
            fill_search_products(list_recursos);
        }
        else {

            var arr = _.filter(list_recursos, function(item) {
                return item.categoria.replace(/\s/g, "").toLowerCase() === id;
            });
            fill_search_products(arr);
        }
    });

    //corredor turistico
    $('.select_corredor').click(function() {
        var id = this.id;
        //alert(id);
        map.markerLayer.setFilter(function(f) {

            if (id === 'CorredorWari-Chanka-Inca' || id === 'CorredorNazca-Chanka-Inca' || id === 'CorredorParacas-Huaytará-Ayacucho' || id === 'RutaPuquio-CoraCora-SaraSara' || id === 'RutaHuancapi-Carapo-Huancasancos')
            {
                return f.corredor.replace(/\s/g, "") === id;
            }
        });
        //filtrar recurso en sidebar
        var arr = _.filter(list_recursos, function(item) {
            return item.corredor.replace(/\s/g, "") === id;
        });
        fill_search_products(arr);

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



function  busqueda(nombre) {
    //var nombre = $('#search').val().replace(/\s/g, "");

    nombre = nombre.replace(/\s/g, "");
    //filtrar en mapa
    map.markerLayer.setFilter(function(f) {
        return f.nombre.replace(/\s/g, "") === nombre;
    });

    //filtrar en sidebar
    var arr = _.find(list_recursos, function(item) {
        return item.nombre.replace(/\s/g, "") === nombre;
    });
    if (_.isUndefined(arr)) {
        //informacion de falla en busqueda
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
}
;