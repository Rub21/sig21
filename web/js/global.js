var list_recursos = [];
var list_hoteles = [];
var list_restaurants = [];
var list_transportes = [];
var list_complementarios = [];
var list_servicios = [];

//list for autocommplete
var list_auto_recursos = [];
var list_auto_hoteles = [];
var list_auto_restaurants = [];
var list_auto_transportes = [];
var list_auto_complementarios = [];

var dir = 'imagenesDB/';
var url_img = "https://dl.dropboxusercontent.com/u/43116811/icon-tur/";
var url_data = "http://localhost:8080/sigturayacucho/";

function buscarproducto(list, id) {
    var producto;
    _.each(list, function(value, key) {

        if (list[key].idproducto == id) {
            producto = list[key];
        }
    });
    return producto;
}
;

function moveSlide(direction) {
    var $slideshow = $('.slideshow'),
            totalSlides = $slideshow.children().length;

    if (direction === 'prev') {
        var $newSlide = $slideshow.find('.active').prev();
        if ($newSlide.index() < 0) {
            $newSlide = $('.image').last();
        }
    } else {
        var $newSlide = $slideshow.find('.active').next();
        if ($newSlide.index() < 0) {
            $newSlide = $('.image').first();
        }
    }

    $slideshow.find('.active').removeClass('active').hide();
    $newSlide.addClass('active').show();
    return false;
}
;

function check_null(k) {
    if (k.replace(/\s/g, "") + String.fromCharCode(160) != String.fromCharCode(160)) {
        return true;
    } else {
        return false;
    }
}
;

function fill_search_products(arr) {
    $('#content_of_search').empty();

    var html = "";
    for (i = 0; i < arr.length; i++) {
        //  alert(i);
        html += '<div class="row-fluid well-ru">' +
                '<div class="span3"><img src="' + arr[i].imagenes[0].url + '" class="img-rounded"></div>' +
                '<div class="span9">' +
                '<h5><a class = "productos" href="#" id="' + arr[i].idproducto + '">' + arr[i].nombre + '</a></h5>' +
                '</div>' +
                '</div>';
    }
    $('#content_of_search').append(html);
    $('#content_of_search').removeClass('loading');

    if (arr.length === 1) {
        map.setView([arr[0].geometry.coordinates[1], arr[0].geometry.coordinates[0]], 16);
    }

    $('.productos').click(function(e) {
        var id = this.id;
        var coordinates = [];
        coordinates = buscarproducto(arr, id).geometry.coordinates;

        map.setView([coordinates[1], coordinates[0]], 16);


        var a_pro = buscarproducto(arr, id);
        /* console.log(a_pro)
         console.log(map.markerLayer);
         //console.log(map.marker);
         // markers[i].openPopup();*/

        //marker.openPopup();

        ///map.marker.openPopup();
        console.log(map)
        console.log(map.marker)
        console.log(map.markerLayer)
        // console.log(map.markerLayer._layers)
        //  console.log(map.markerLayer._layers._popup)
        /* 
         _popup: e
         _animated: true
         
         _initHooksCalled: true
         _isOpen: false*/

        //  console.log(map.markerLayer.markers);


        map.markerLayer.eachLayer(function(marker) {
           // console.log(marker.feature.idproducto );
            if (marker.feature.idproducto === id) {
                marker.openPopup();
            }
        });



    });
}







function carrucel_images_producto(arr, id, size) {//array, nombre para id, tamaño de imagenes

    var myCarousel = 'myCarousel' + id;
    var carousel_indicators = 'carousel-indicators' + id;
    var carousel_inner = 'carousel-inner' + id;
    $('.' + id).append('<div id="' + myCarousel + '" class="carousel slide"><div>');

    $('#' + myCarousel + '').append('<ol class="carousel-indicators" id="' + carousel_indicators + '"><ol>');
    $('#' + myCarousel + '').append('<div class="carousel-inner" id="' + carousel_inner + '"></div>');

    for (var i = 0; i < arr.length; i++) {
        var ol = '';
        var img = '';

        if (i === 0) {
            ol = '<li data-target="#' + myCarousel + '" data-slide-to="' + i + '" class="active"></li>';
            img = ' <div class="item active"> <img src="' + arr[i].url + '"  style=" width:' + size + 'px; height: auto;"/>';
            // '<div class="carousel-caption">  <h3>' + aray[i].titulo + '</h3> <p>' + aray[i].descripcion + '</p> </div> </div>';
        } else {

            ol = '<li data-target="#' + myCarousel + '' + myCarousel + '" data-slide-to="' + i + '"></li>';
            img = ' <div class="item"> <img src="' + arr[i].url + '"  style=" width:' + size + 'px; height: auto;"/>';
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


//resize sidebar to scream
var n = $('.sidebar').css('height');
n = parseInt(n.substring(0, 3));
$('#content_of_search').css('max-height', n - 100);
//end resize