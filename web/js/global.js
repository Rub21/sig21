var list_recursos = [];
var list_hoteles = [];
var list_restaurants = [];
var list_transportes = [];
var list_complementarios=[];
var list_servicios=[];
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

