function  call_detaill_recurso(id) {
    
    
    $('.imagenes_recurso').empty();
    //$('.movilidad').css('display', 'block');
    
    var f = buscarproducto(list_recursos, id);
    $('.imagen_logo').attr("src", f['properties']['icon']['iconUrl']);
    $('#backdrop').fadeIn(200);
    $('#detaill_recurso').show(200);
    $('#close').show(200);
    
    

//FILL DATA
    $('.idproducto').text(f.idproducto);
    $('.nombre').text(f.nombre);
    $('.descripcion').text(f.descripcion);


    if (check_null(f.historia)) {
        $('.historia').text(f.historia);
    } else {
        $('.historia').parents('.cont_historia').css('display', 'none');
    }

    if (check_null(f.horario_de_atencion)) {
        $('.horario_de_atencion').text(f.horario_de_atencion);
    } else {
        $('.horario_de_atencion').parents('tr').css('display', 'none');
    }
    //$('.horario_de_atencion').text(f.horario_de_atencion);
    if (check_null(f.costo_de_ingreso)) {
        $('.costo_de_ingreso').text(f.costo_de_ingreso);
    } else {
        $('.costo_de_ingreso').parents('tr').css('display', 'none');
    }
//    $('.costo_de_ingreso').text(f.costo_de_ingreso);
    if (check_null(f.costo_de_ingreso)) {
        $('.distancia').text(f.distancia);
    } else {
        $('.distancia').parents('tr').css('display', 'none');
    }
    // $('.distancia').text(f.distancia);

    $('.como_llegar').text(f.como_llegar);

    if (check_null(f.corredor)) {
        $('.corredor').text(f.corredor);
    } else {
        $('.corredor').parents('tr').css('display', 'none');
    }
    //$('.corredor').text(f.corredor);

    if (check_null(f.altitud)) {
        $('.altitud').text(f.altitud);
    } else {
        $('.altitud').parents('tr').css('display', 'none');
    }

    // $('.altitud').text(f.altitud);

    if (check_null(f.temperatura)) {
        $('.temperatura').text(f.temperatura);
    } else {
        $('.temperatura').parents('tr').css('display', 'none');
    }

    if (f.transporte.length === 0) {

        $('.movilidad').attr("disabled","disabled");
    } else {
        $('.movilidad').css('display', 'block');
    }



    //$('.temperatura').text(f.temperatura);


    //IMAGENES  
    carrucel_images_recurso(f.imagenes, 540);

    //VIDEO
    if (check_null(f.video)) {
        add_video(f.video.replace(/\s/g, ""));
    } else {

    }

    //$('.ww').attr("src", f.video.replace(/\s/g, ""));

    //MAPA
    window.setTimeout(function() {
        add_map_servicios(f);
    }, 1000);

}
;





function carrucel_images_recurso(aray, size) {

    var myCarousel = 'myCarousel_recurso';
    var carousel_indicators = 'carousel-indicators_recurso';
    var carousel_inner = 'carousel-inner_recurso';
    $('.imagenes_recurso').append('<div id="' + myCarousel + '" class="carousel slide"><div>');

    $('#' + myCarousel + '').append('<ol class="carousel-indicators" id="' + carousel_indicators + '"><ol>');
    $('#' + myCarousel + '').append('<div class="carousel-inner" id="' + carousel_inner + '"></div>');

    for (var i = 0; i < aray.length; i++) {
        var ol = '';
        var img = '';

        if (i === 0) {

            ol = '<li data-target="#' + myCarousel + '" data-slide-to="' + i + '" class="active"></li>';
            img = ' <div class="item active"> <img src="' + aray[i].url + '"  style=" width:' + size + 'px; height: auto;"/>';
            /* '<div class="carousel-caption">  <h3>' + aray[i].titulo + '</h3> <p>' + aray[i].descripcion + '</p> </div> </div>';*/
        } else {

            ol = '<li data-target="#' + myCarousel + '' + myCarousel + '" data-slide-to="' + i + '"></li>';
            img = ' <div class="item"> <img src="' + aray[i].url + '"  style=" width:' + size + 'px; height: auto;"/>';
            /*'<div class="carousel-caption">  <h3>' + aray[i].titulo + '</h3>  </div> </div>';*/
        }
        $('#' + carousel_indicators).append(ol);
        $('#' + carousel_inner).append(img);
    }
    $('#' + myCarousel).append('<a class="carousel-control left" href="#' + myCarousel + '" data-slide="prev">&lsaquo;</a>');
    $('#' + myCarousel).append('<a class="carousel-control right" href="#' + myCarousel + '" data-slide="next">&rsaquo;</a>');

    $('#' + myCarousel).css("width", size);
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


function  add_map_servicios(rec) {//recurso=rec

    var g = rec.geometry;
    console.log(rec);
    $('.map_servicios').empty();
    $('.map_servicios').append('<div id="map_servicios"></div>');
    var map_ser = L.mapbox.map('map_servicios', 'ruben.map-5m93f3zc').setView([g.coordinates[1], g.coordinates[0]], 12);
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
            // console.log(feature);

            for (var i = 0; i < images.length; i++) {
                var img = images[i];
                //console.log(img['url']);
                slideshowContent += '<div class="image' + (i === 0 ? ' active' : '') + '">' +
                        '<img src="' + img['url'] + '" />' +
                        // '<div class="caption">' + img['url'] + '</div>' +
                        '</div>';
            }
            //button

            var clase = feature.clase.replace(/\s/g, "");
            console.log(clase);
            var a_button = '';

            if (clase === 'Hotel') {
                a_button = '<div class=" btn-detail"><a  role="button" class="btn  btn-success"  href="#detail" onclick="call_detaill_hotel(\'' + feature.idproducto + '\')"> Más Detalle</a></div>';

            } else if (clase === 'Restaurant') {
                a_button = '<div class=" btn-detail"><a  role="button" class="btn  btn-success"  href="#detail" onclick="call_detaill_restaurant(\'' + feature.idproducto + '\')"> Más Detalle</a></div>';


            } else if (clase === 'Transporte') {

                a_button = '<div class=" btn-detail"><a  role="button" class="btn  btn-success"  href="#detail" onclick="call_detaill_transporte(\'' + feature.idproducto + '\')"> Más Detalle</a></div>';

            } else if (clase === 'Complementario') {
                a_button = '<div class=" btn-detail"><a  role="button" class="btn  btn-success"  href="#detail" onclick="call_detaill_complementario(\'' + feature.idproducto + '\')"> Más Detalle</a></div>';


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


    $('a[href="#movilidad"]').click(function(e) {
        e.preventDefault();
        scroll_to = document.getElementById('servicios');
        scroll_to.scrollIntoView();

        // console.log(rec.transporte);

        var geo = [];

        map_ser.markerLayer.setFilter(function(f) {
            console.log(f);
            if (f.clase.replace(/\s/g, "") === 'Transporte') {

                var id0, id1, id2, id3, id4 = 'ninguno';

                for (i = 0; i < rec.transporte.length; i++) {

                    if (i === 0) {
                        id0 = rec.transporte[i].idtransporte.replace(/\s/g, "");
                    } else if (i === 1) {
                        id1 = rec.transporte[i].idtransporte.replace(/\s/g, "");
                    } else if (i === 2) {
                        id2 = rec.transporte[i].idtransporte.replace(/\s/g, "");
                    } else if (i === 3) {
                        id3 = rec.transporte[i].idtransporte.replace(/\s/g, "");
                    } else if (i === 4) {
                        id4 = rec.transporte[i].idtransporte.replace(/\s/g, "");
                    }


                    if (rec.transporte[i].idtransporte === f.idtransporte) {
                        geo = f.geometry.coordinates;
                        console.log(i);
                    }
                }
                var idtransporte = f.idtransporte.replace(/\s/g, "");
                return (id0 === idtransporte || id1 === idtransporte || id2 === idtransporte || id3 === idtransporte || id4 === idtransporte);

            }
        });

        /* _.filter([1, 2, 3, 4, 5, 6], function(num) {
         return num % 2 == 0;
         });
         [2, 4, 6]*/
        map_ser.setView([geo[1], geo[0]], 13);
    });


    $('a[href="#todos"]').click(function(e) {
        e.preventDefault();
        map_ser.markerLayer.setFilter(function(f) {
            return true;
        });

    });





}


function full_imagen_recurso(aray, size) {

    $('.full_imagen_recurso').empty();
    var myCarousel = 'myCarousel_recurso_full';
    var carousel_indicators = 'carousel-indicators_recurso_full';
    var carousel_inner = 'carousel-inner_recurso_full';
    $('.full_imagen_recurso').append('<div id="' + myCarousel + '" class="carousel slide"><div>');

    $('#' + myCarousel + '').append('<ol class="carousel-indicators" id="' + carousel_indicators + '"><ol>');
    $('#' + myCarousel + '').append('<div class="carousel-inner" id="' + carousel_inner + '"></div>');

    for (var i = 0; i < aray.length; i++) {
        var ol = '';
        var img = '';

        if (i === 0) {

            ol = '<li data-target="#' + myCarousel + '" data-slide-to="' + i + '" class="active"></li>';
            img = ' <div class="item active"> <img src="' + aray[i].url + '"  style=" width:100%;   max-height: 800px;"/>';
            /* '<div class="carousel-caption">  <h3>' + aray[i].titulo + '</h3> <p>' + aray[i].descripcion + '</p> </div> </div>';*/
        } else {

            ol = '<li data-target="#' + myCarousel + '' + myCarousel + '" data-slide-to="' + i + '"></li>';
            img = ' <div class="item"> <img src="' + aray[i].url + '"  style=" width:100%;  max-height: 800px;"/>';
            /*'<div class="carousel-caption">  <h3>' + aray[i].titulo + '</h3>  </div> </div>';*/
        }
        $('#' + carousel_indicators).append(ol);
        $('#' + carousel_inner).append(img);
    }
    $('#' + myCarousel).append('<a class="carousel-control left" href="#' + myCarousel + '" data-slide="prev">&lsaquo;</a>');
    $('#' + myCarousel).append('<a class="carousel-control right" href="#' + myCarousel + '" data-slide="next">&rsaquo;</a>');

    $('#' + myCarousel).css("width", size);
}
;