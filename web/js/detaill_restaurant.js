function  call_detaill_restaurant(id) {

    $('#imagenes').empty();
    $('.servicios').empty();
    var f = buscarproducto(list_restaurants, id);
    console.log(f)

    $('.click').trigger('click');
    $('#popover').css({
        'width': '820px',
        'margin-top': '-5%',
        'margin-left': function() {
            return -($(this).width() / 2);
        }
    });



    $('.nombre').text(f.nombre);
    $('.categoria').text(f.categoria);
    $('.tipo').text(f.tipo);
    $('.descripcion').text(f.descripcion);
    $('.imagen_logo').attr("src", f['properties']['icon']['iconUrl']);

    $('.direccion').text(f.direccion);
    $('.telefono').text(f.telefono);
    $('.horario_de_atencion').text(f.horario_de_atencion);


    if (check_null(f.formas_de_pago)) {
        $('.formas_de_pago').text(f.formas_de_pago);
    } else {
        $('.formas_de_pago').parents('tr').css('display', 'none');
    }
    if (check_null(f.especialidad)) {
        $('.especialidad').text(f.especialidad);
    } else {
        $('.especialidad').parents('tr').css('display', 'none');
    }
    if (check_null(f.precio_promedio)) {
        $('.precio_promedio').text(f.precio_promedio);
    } else {
        $('.precio_promedio').parents('tr').css('display', 'none');
    }
    if (check_null(f.sitio_web)) {
        $('.sitio_web').text(f.sitio_web);
    } else {
        $('.sitio_web').parents('tr').css('display', 'none');
    }





    carrucel_images_restaurant(f.imagenes, 400);



}
;

function carrucel_images_restaurant(aray, size) {

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