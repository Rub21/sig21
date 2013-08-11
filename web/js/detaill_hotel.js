function  call_detaill_hotel(id) {

    $('#modal_hotel .imagenes_hotel').empty();
    $('#modal_hotel .servicios').empty();
    var f = buscarproducto(list_hoteles, id);
    //console.log('hotel');
    //console.log(f)

    $('.click_hotel').trigger('click');
    $('#popover_hotel').css({
        'width': '820px',
        'margin-top': '-5%',
        'margin-left': function() {
            return -($(this).width() / 2);
        }
    });
    $('#modal_hotel .imagen_logo').attr("src", f['properties']['icon']['iconUrl']);

    $('#modal_hotel .nombre').text(f.nombre);
    $('#modal_hotel .categoria').text(f.categoria);
    $('#modal_hotel .descripcion').text(f.descripcion);

    $('#modal_hotel .precio').text(f.precio_de_habitacion);
    $('#modal_hotel .direccion').text(f.direccion);
    $('#modal_hotel .telefono').text(f.telefono);


    if (check_null(f.sitio_web)) {
        $('#modal_hotel .sitio_web').text(f.sitio_web);
    } else {
        $('#modal_hotel .sitio_web').parents('tr').css('display', 'none');
    }
    if (check_null(f.correo_electronico)) {
        $('#modal_hotel .correo_electronico').text(f.correo_electronico);
    } else {
        $('#modal_hotel .correo_electronico').parents('tr').css('display', 'none');
    }

    if (check_null(f.formas_de_pago)) {
        $('#modal_hotel .formas_de_pago').text(f.formas_de_pago);
    } else {
        $('#modal_hotel .formas_de_pago').parents('tr').css('display', 'none');
    }

    carrucel_images_hotel(f.imagenes, 400);

    var servicios = "";
    for (i = 0; i < f.bServiciosAdicional.length; i++) {
        servicios += f.bServiciosAdicional[i].tipo + "<br>";
    }
    $('#modal_hotel .servicios').append(servicios);



}
;

function carrucel_images_hotel(aray, size) {
    var myCarousel = 'myCarousel_hotel';
    var carousel_indicators = 'carousel-indicators_hotel';
    var carousel_inner = 'carousel-inner_hotel';
    $('.imagenes_hotel').append('<div id="' + myCarousel + '" class="carousel slide"><div>');

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
}