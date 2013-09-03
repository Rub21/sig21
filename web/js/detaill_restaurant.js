function  call_detaill_restaurant(id) {

    $('#modal_restaurant .imagenes_restaurant').empty();
    //  $('#modal_restaurant .servicios').empty();
    var f = buscarproducto(list_restaurants, id);
    console.log(f)

    $('.click_restaurant').trigger('click');
    $('#popover_restaurant').css({
        'width': '820px',
        'margin-top': '-5%',
        'margin-left': function() {
            //console.log(this);
            return -($(this).width() / 2);
        }
    });

    $('#modal_restaurant .nombre').text(f.nombre);
    $('#modal_restaurant .categoria').text(f.categoria);
    $('#modal_restaurant .tipo').text(f.tipo);
    $('#modal_restaurant .descripcion').text(f.descripcion);
    $('#modal_restaurant .imagen_logo').attr("src", f['properties']['icon']['iconUrl']);
    $('#modal_restaurant .direccion').text(f.direccion);
    $('#modal_restaurant .telefono').text(f.telefono);
    $('#modal_restaurant .horario_de_atencion').text(f.horario_atencion);

    if (check_null(f.formas_pago)) {
        $('#modal_restaurant .formas_de_pago').text(f.formas_pago);
    } else {
        $('#modal_restaurant .formas_de_pago').parents('tr').css('display', 'none');
    }
    if (check_null(f.especialidad)) {
        $('#modal_restaurant .especialidad').text(f.especialidad);
    } else {
        $('#modal_restaurant .especialidad').parents('tr').css('display', 'none');
    }
    if (check_null(f.precio_promedio)) {
        $('#modal_restaurant .precio_promedio').text(f.precio_promedio);
    } else {
        $('#modal_restaurant .precio_promedio').parents('tr').css('display', 'none');
    }
    if (check_null(f.sitio_web)) {
        $('#modal_restaurant .sitio_web').text(f.sitio_web);
        var a = document.getElementById('sitio_web');
        a.href = f.sitio_web;
    } else {
        $('#modal_restaurant .sitio_web').parents('tr').css('display', 'none');
    }


    carrucel_images_restaurant(f.imagenes, 400);
}
;

function carrucel_images_restaurant(aray, size) {

    var myCarousel = 'myCarousel_restaurant';
    var carousel_indicators = 'carousel-indicators_restaurant';
    var carousel_inner = 'carousel-inner_restaurant';
    $('.imagenes_restaurant').append('<div id="' + myCarousel + '" class="carousel slide"><div>');

    $('#' + myCarousel + '').append('<ol class="carousel-indicators" id="' + carousel_indicators + '"><ol>');
    $('#' + myCarousel + '').append('<div class="carousel-inner" id="' + carousel_inner + '"></div>');

    for (var i = 0; i < aray.length; i++) {
        var ol = '';
        var img = '';

        if (i === 0) {

            ol = '<li data-target="#' + myCarousel + '" data-slide-to="' + i + '" class="active"></li>';
            img = ' <div class="item active"> <img src="' + aray[i].url + '"  style=" width:' + size + 'px; height: auto;"/>';
            // '<div class="carousel-caption">  <h3>' + aray[i].titulo + '</h3> <p>' + aray[i].descripcion + '</p> </div> </div>';
        } else {

            ol = '<li data-target="#' + myCarousel + '' + myCarousel + '" data-slide-to="' + i + '"></li>';
            img = ' <div class="item"> <img src="' + aray[i].url + '"  style=" width:' + size + 'px; height: auto;"/>';
            //<div class="carousel-caption">  <h3>' + aray[i].titulo + '</h3>  </div> </div>';
        }
        $('#' + carousel_indicators).append(ol);
        $('#' + carousel_inner).append(img);
    }
    $('#' + myCarousel).append('<a class="carousel-control left" href="#' + myCarousel + '" data-slide="prev">&lsaquo;</a>');
    $('#' + myCarousel).append('<a class="carousel-control right" href="#' + myCarousel + '" data-slide="next">&rsaquo;</a>');
    $('.modal-body').css("max-height", 500);
    $('#' + myCarousel).css("width", size);

    /*    $('#imagenes').append('<div id="myCarousel" class="carousel slide"><div>');
     $('#myCarousel').append('<ol class="carousel-indicators"><ol>');
     $('#myCarousel').append('<div class="carousel-inner"></div>');
     
     for (var i = 0; i < aray.length; i++) {
     var ol = '';
     var img = '';
     
     if (i == 0) {
     
     ol = '<li data-target="#myCarousel" data-slide-to="' + i + '" class="active"></li>';
     img = ' <div class="item active"> <img src="' + aray[i].url + '"  style=" width:' + size + 'px; height: auto;"/>';
     // '<div class="carousel-caption">  <h3>' + aray[i].titulo + '</h3> <p>' + aray[i].descripcion + '</p> </div> </div>';
     } else {
     
     ol = '<li data-target="#myCarousel" data-slide-to="' + i + '"></li>';
     img = ' <div class="item"> <img src="' + aray[i].url + '"  style=" width:' + size + 'px; height: auto;"/>';
     //'<div class="carousel-caption">  <h3>' + aray[i].titulo + '</h3>  </div> </div>';
     }
     $('.carousel-indicators').append(ol);
     $('.carousel-inner').append(img);
     }
     $('#myCarousel').append('<a class="carousel-control left" href="#myCarousel" data-slide="prev">&lsaquo;</a>');
     $('#myCarousel').append('<a class="carousel-control right" href="#myCarousel" data-slide="next">&rsaquo;</a>');
     $('.modal-body').css("max-height", 500);
     $('#myCarousel').css("width", size);
     */
}