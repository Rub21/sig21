function  call_detaill_hotel(id) {

    $('#modal_hotel .imagenes_hotel').empty();
    $('#modal_hotel .servicios').empty();
    var arr = buscarproducto(list_hoteles, id);
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
    $('#modal_hotel .imagen_logo').attr("src", arr['properties']['icon']['iconUrl']);

    $('#modal_hotel .nombre').text(arr.nombre);
    $('#modal_hotel .categoria').text(arr.categoria);
    $('#modal_hotel .descripcion').text(arr.descripcion);

    $('#modal_hotel .precio').text(arr.tipo_precio_hab);
    $('#modal_hotel .direccion').text(arr.direccion);
    $('#modal_hotel .telefono').text(arr.telefono);


    if (check_null(arr.sitio_web)) {
        $('#modal_hotel .sitio_web').text(arr.sitio_web);
        var a = document.getElementById('sitio_web_hotel');
        a.href = arr.sitio_web;
    } else {
        $('#modal_hotel .sitio_web').parents('tr').css('display', 'none');
    }
    if (check_null(arr.correo_elec)) {
        $('#modal_hotel .correo_electronico').text(arr.correo_elec);
    } else {
        $('#modal_hotel .correo_electronico').parents('tr').css('display', 'none');
    }

    if (check_null(arr.formas_pago)) {
        $('#modal_hotel .formas_de_pago').text(arr.formas_pago);
    } else {
        $('#modal_hotel .formas_de_pago').parents('tr').css('display', 'none');
    }

    // carrucel_images_producto(arr.imagenes, 'imagenes_hotel', 400);

    carrucel_images_hotel(arr.imagenes, 400);
    var servicios = "";
    for (i = 0; i < arr.bServiciosAdicional.length; i++) {
        servicios += arr.bServiciosAdicional[i].tipo + "<br>";
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