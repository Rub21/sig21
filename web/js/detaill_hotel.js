function  call_detaill_hotel(id) {

    $('#imagenes').empty();
    $('.servicios').empty();
    var f = buscarproducto(list_hoteles, id);

    $('.click').trigger('click');
    $('#popover').css({
        'width': '820px',
        'margin-top': '-5%',
        'margin-left': function() {
            return -($(this).width() / 2);
        }
    });
    $('.imagen_logo').attr("src", f['properties']['icon']['iconUrl']);

    $('.nombre').text(f.nombre);
    $('.categoria').text(f.categoria);
    $('.descripcion').text(f.descripcion);

    $('.precio').text(f.precio_de_habitacion);
    $('.direccion').text(f.direccion);
    $('.telefono').text(f.telefono);


    if (check_null(f.sitio_web)) {
        $('.sitio_web').text(f.sitio_web);
    } else {
        $('.sitio_web').parents('tr').css('display', 'none');
    }
    if (check_null(f.correo_electronico)) {
        $('.correo_electronico').text(f.correo_electronico);
    } else {
        $('.correo_electronico').parents('tr').css('display', 'none');
    }

    if (check_null(f.formas_de_pago)) {
        $('.formas_de_pago').text(f.formas_de_pago);
    } else {
        $('.formas_de_pago').parents('tr').css('display', 'none');
    }

    carrucel_images_hotel(f.imagenes, 400);

    var servicios = "";
    for (i = 0; i < f.bServiciosAdicional.length; i++) {
        servicios += f.bServiciosAdicional[i].tipo + "<br>";
    }
    $('.servicios').append(servicios);



}
;

function carrucel_images_hotel(aray, size) {

    $('#imagenes').append('<div id="myCarousel" class="carousel slide"><div>');
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
    $('.modal-body').css("max-height", 500);
    $('#myCarousel').css("width", size);

}