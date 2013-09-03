function  call_detaill_transporte(id) {


    $('#modal_transporte .imagenes_transporte').empty();
    //$('.servicios').empty();
    var f = buscarproducto(list_transportes, id);
    console.log(f)

    $('.click_transporte').trigger('click');
    $('#popover_transporte').css({
        'width': '820px',
        'margin-top': '-5%',
        'margin-left': function() {
            return -($(this).width() / 2);
        }
    });

    $('#modal_transporte .nombre').text(f.nombre);
    $('#modal_transporte .tipo').text(f.tipo);
    $('#modal_transporte .destinos').text(f.destinos);
    $('#modal_transporte .descripcion').text(f.descripcion);
    $('#modal_transporte .imagen_logo').attr("src", f['properties']['icon']['iconUrl']);
    $('#modal_transporte .direccion').text(f.direccion);
    $('#modal_transporte .telefono').text(f.telefono);


    if (check_null(f.horario_atencion)) {
        $('#modal_transporte .horario_de_atencion').text(f.horario_atencion);
    } else {
        $('#modal_transporte .horario_de_atencion').parents('tr').css('display', 'none');
    }
    if (check_null(f.horario_salida)) {
        $('#modal_transporte .horario_de_salida').text(f.horario_salida);
    } else {
        $('#modal_transporte .horario_de_salida').parents('tr').css('display', 'none');
    }
    if (check_null(f.sitio_web)) {
        $('#modal_transporte .sitio_web').text(f.sitio_web);
        var a = document.getElementById('sitio_web_transporte');
        a.href = f.sitio_web;
    } else {
        $('#modal_transporte .sitio_web').parents('tr').css('display', 'none');
    }
    carrucel_images_transporte(f.imagenes, 400);
}
;

function carrucel_images_transporte(aray, size) {
    var myCarousel = 'myCarousel_transporte';
    var carousel_indicators = 'carousel-indicators_transporte';
    var carousel_inner = 'carousel-inner_transporte';
    $('.imagenes_transporte').append('<div id="' + myCarousel + '" class="carousel slide"><div>');
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