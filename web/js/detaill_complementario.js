function  call_detaill_complementario(id) {

    $('#modal_complementario .imagenes_complementario').empty();
    //  $('.servicios').empty();
    var f = buscarproducto(list_complementarios, id);
    console.log(f)

    $('.click_complementario').trigger('click');
    $('#popover_complementario').css({
        'width': '820px',
        'margin-top': '-5%',
        'margin-left': function() {
            return -($(this).width() / 2);
        }
    });


    $('#modal_complementario .nombre').text(f.nombre);
    $('#modal_complementario .destinos').text(f.destinos);
    $('#modal_complementario .descripcion').text(f.descripcion);
    $('#modal_complementario .imagen_logo').attr("src", f['properties']['icon']['iconUrl']);

    $('#modal_complementario .direccion').text(f.direccion);
    $('#modal_complementario .telefono').text(f.telefono);

    if (check_null(f.horario_atencion)) {
        $('#modal_complementario .horario_de_atencion').text(f.horario_atencion);
    } else {
        $('#modal_complementario .horario_de_atencion').parents('tr').css('display', 'none');
    }

    if (check_null(f.sitio_web)) {
        $('#modal_complementario .sitio_web').text(f.sitio_web);
        var a = document.getElementById('sitio_web');
        a.href = f.sitio_web;
    } else {
        $('#modal_complementario .sitio_web').parents('tr').css('display', 'none');
    }
    carrucel_images_complementario(f.imagenes, 400);
    //carrucel_images_producto(arr.imagenes, 'imagenes_complementario', 400);
}
;

function carrucel_images_complementario(aray, size) {
    var myCarousel = 'myCarousel_complementario';
    var carousel_indicators = 'carousel-indicators_complementario';
    var carousel_inner = 'carousel-inner_complementario';
    $('.imagenes_complementario').append('<div id="' + myCarousel + '" class="carousel slide"><div>');
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
        $('#' + carousel_inner).append(img);    }
    $('#' + myCarousel).append('<a class="carousel-control left" href="#' + myCarousel + '" data-slide="prev">&lsaquo;</a>');
    $('#' + myCarousel).append('<a class="carousel-control right" href="#' + myCarousel + '" data-slide="next">&rsaquo;</a>');
    $('.modal-body').css("max-height", 500);
    $('#' + myCarousel).css("width", size);
}