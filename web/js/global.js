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

function fill_search_products(f) {
    console.log(f);
    $('#content_of_search').empty();

    var pro = "";
    for (i = 0; i < f.length; i++) {
        //  alert(i);
        pro += '<div class="row-fluid well-ru">' +
                '<div class="span3"><img src="' + f[i].imagenes[0].url + '" class="img-rounded"></div>' +
                '<div class="span9">' +
                '<h5><a class = "productos" href="#" id="' + f[i].idproducto + '">' + f[i].nombre + '</a></h5>' +
                '</div>' +
                '</div>';
    }
    //console.log(pro)
    $('#content_of_search').append(pro);
    $('#content_of_search').removeClass('loading');

    $('.productos').click(function() {
        //  alert('fff');
        var id = this.id;
        var coordinates = [];
        map.markerLayer.setFilter(function(f) {
            if (f.idproducto.replace(/\s/g, "") === id) {
                coordinates = f.geometry.coordinates
            }
            return f.idproducto.replace(/\s/g, "") === id;
        });
        map.panTo([coordinates[1], coordinates[0]], 16);
    });
}


//resize sidebar to scream
var n = $('.sidebar').css('height');
n = parseInt(n.substring(0, 3));
$('#content_of_search').css('max-height', n - 100);
//end resize