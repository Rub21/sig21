function  call_detaill_recurso(id) {
    $('#carrucel').empty();

    var f = buscarproducto(list_recurso, id);
    //console.log(f.properties.icon['iconUrl']);

    $('.imagen_logo').attr("src", f['properties']['icon']['iconUrl']);

    // $('#detail').append(o);
    // call_map_servicios(rec.idproducto);
    $('#backdrop').fadeIn(200);
    $('#detaill_recurso').show(200);
    $('#close').show(200);

//FILL DATA

    $('.nombre').text(f.nombre);
    $('.descripcion').text(f.descripcion);

    $('.historia').text(f.historia);

    $('.horario_de_atencion').text(f.horario_de_atencion);
    $('.costo_de_ingreso').text(f.costo_de_ingreso);
    $('.distancia').text(f.distancia);
    $('.como_llegar').text(f.como_llegar);
    $('.corredor').text(f.corredor);
    $('.altitud').text(f.altitud);
    $('.temperatura').text(f.temperatura);



    carrucel_images(f.imagenes, 'carrucel', 540);

    //VIDEO


    add_video(f.video.replace(/\s/g, ""));
    //$('.ww').attr("src", f.video.replace(/\s/g, ""));




    window.setTimeout(function() {
        add_map_servicios(f.geometry);

    }, 1000);


}
;





function carrucel_images(aray, id_parent, size) {

    $('#' + id_parent).append('<div id="myCarousel" class="carousel slide"><div>');
    $('#myCarousel').append('<ol class="carousel-indicators"><ol>');
    $('#myCarousel').append('<div class="carousel-inner"></div>');

    for (var i = 0; i < aray.length; i++) {
        var ol = '';
        var img = '';

        if (i == 0) {

            ol = '<li data-target="#myCarousel" data-slide-to="' + i + '" class="active"></li>';
            img = ' <div class="item active"> <img src="' + aray[i].url + '"  style=" width:' + size + 'px; height: auto;"/>';
            /* '<div class="carousel-caption">  <h3>' + aray[i].titulo + '</h3> <p>' + aray[i].descripcion + '</p> </div> </div>';*/
        } else {

            ol = '<li data-target="#myCarousel" data-slide-to="' + i + '"></li>';
            img = ' <div class="item"> <img src="' + aray[i].url + '"  style=" width:' + size + 'px; height: auto;"/>';
            /*'<div class="carousel-caption">  <h3>' + aray[i].titulo + '</h3>  </div> </div>';*/
        }
        $('.carousel-indicators').append(ol);
        $('.carousel-inner').append(img);
    }
    $('#myCarousel').append('<a class="carousel-control left" href="#myCarousel" data-slide="prev">&lsaquo;</a>');
    $('#myCarousel').append('<a class="carousel-control right" href="#myCarousel" data-slide="next">&rsaquo;</a>');

    $('#myCarousel').css("width", size);
}
;


function  add_video(url) {
    $('#video').empty();
    //console.log(url);
    var id = url.substring(url.indexOf("=") + 1);
    // console.log(id);
    var o = '<iframe width="540" height="390" src="http://www.youtube.com/embed/' + id + '" frameborder="0" allowfullscreen></iframe>';
    $('#video').append(o);
}


function  add_map_servicios(g) {

    $('.map_servicios').empty();
    $('.map_servicios').append('<div id="map_servicios"></div>');
    var map_ser = L.mapbox.map('map_servicios', 'ruben.map-5m93f3zc').setView([g.coordinates[1], g.coordinates[0]], 16);
    //map_ser.dragging.disable();
    //map_ser.touchZoom.disable();
    // map_ser.doubleClickZoom.disable();
    map_ser.scrollWheelZoom.disable();
    var minimap = new L.Control.MiniMap(L.mapbox.tileLayer('examples.map-uci7ul8p'));
    minimap.addTo(map_ser);

    mapData_servicios(list_servicios);

    function mapData_servicios(f) {
        console.log(f);
        //list_recurso from global

        map_ser.markerLayer.on('layeradd', function(e) {
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

            //    var clase = f.clase.replace(/\s/g, "");
            var clase = "Hotel";

            if (clase === 'Hotel') {
                var a_button = '<div class=" btn-detail"><a  role="button" class="btn  btn-success"  href="#detail" onclick="call_detaill_hotel(\'' + feature.idproducto + '\')"> Más Detalle</a></div>';

            } else if (clase === 'Restaurant') {

            } else if (clase === 'Transporte') {

            } else if (clase === 'Complementario') {

            }
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

        map_ser.markerLayer.setGeoJSON(f);
    }
    ;

    /*****************************************
     initializer events
     ******************************************/

    $('a[href="#hotel"]').click(function(e) {
        e.preventDefault();

        scroll_to = document.getElementById('servicios');
        scroll_to.scrollIntoView();


        map_ser.markerLayer.setFilter(function(f) {
            return f.clase.replace(/\s/g, "") === 'Hotel';
        });

        $('#select_hotel').addClass('active');
    });

    $('a[href="#restaurant"]').click(function(e) {
        e.preventDefault();
        scroll_to = document.getElementById('servicios');
        scroll_to.scrollIntoView();

        map_ser.markerLayer.setFilter(function(f) {
            return f.clase.replace(/\s/g, "") === 'Restaurant';
        });

    });

    $('a[href="#transporte"]').click(function(e) {
        e.preventDefault();
        scroll_to = document.getElementById('servicios');
        scroll_to.scrollIntoView();


        map_ser.markerLayer.setFilter(function(f) {
            return f.clase.replace(/\s/g, "") === 'Transporte';
        });
    });


    $('a[href="#complementario"]').click(function(e) {
        e.preventDefault();
        scroll_to = document.getElementById('servicios');
        scroll_to.scrollIntoView();

        map_ser.markerLayer.setFilter(function(f) {
            return f.clase.replace(/\s/g, "") === 'Complementario';
        });
    });

    $('a[href="#todos"]').click(function(e) {
        e.preventDefault();
        map_ser.markerLayer.setFilter(function(f) {
            return true;
        });

    });
}

