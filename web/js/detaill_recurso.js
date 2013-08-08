function  call_detaill_recurso(id) {

    var rec = buscarproducto(list_recurso, id);
    console.log(rec.properties.icon['iconUrl']);

    var o = '<div id="popover_recurso">' +
            '<div class="content well">' +
            '<a name="up"></a><div class="navbar ">' +
            '<div class="img_popover"> <img src="' + rec.properties.icon['iconUrl'] + '" alt=""></div>' +
            '<div class="navbar-inner">' +
            '<div class="container">' +
            '<a class="brand" href="#">' + rec.nombre +
            '</a>' +
            '<ul class="nav pull-right" >' +
            '<li>' +
            '<a href="#hotel" ><i class="icon-dormir-black"></i>Donde Dormir' +
            '</a>' +
            '</li>' +
            '<li>' +
            '<a href="#restaurant"><i class="icon-comer-black"></i>Donde Comer' +
            '</a>' +
            '</li>' +
            '<li>' +
            '<a href="#transporte" ><i class="icon-transporte-black"></i>Como viajar' +
            '</a>' +
            '</li>' +
            '<li>' +
            '<a href="#complementario" ><i class="icon-dormir-black"></i>Otros Servicios' +
            '</a>' +
            '</li>' +
            '<li>' +
            '<a href="#"> Otros' +
            '</a>' +
            '</li>' +
            '</ul>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '<div class="row-fluid">' +
            '<div class="span6">' +
            '<p  class="well">' + rec.descripcion +
            '</p>' +
            '<div id="id_detalles_recurso">' +
            '</div>' +
            '</div>' +
            '<div  id="carrucel" class="span6">' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>';

    var close_button = '<div class="modal-footer"><button type="button" data-dismiss="modal" class="btn btn-primary" id="butoon_close">Close</button></div>';

    var div_map = '<div class="container-servicios">' +
            '<a id="servicios" >' +
            '<h3  class="text-info text-center" >Servicios Adicionales en : ' + rec.nombre + '</h3>' +
            '</a>' +
            '<div class="map_servicios"></div>' +
            '<div class="select_servicios">' +
            '<ul class="dropdown-menu">' +
            '<li><a id="select_hotel" href="#hotel"><i class="icon-hand-right"></i>Donde Dormir</a></li>' +
            '<li><a id="select_restaurant"href="#restaurant"><i class="icon-hand-right"></i>Donde Comer</a></li>' +
            '<li><a id="select_transporte" href="#transporte"><i class="icon-hand-right"></i>Como Viajar</a></li>' +
            '<li><a id="select_complementario" href="#complementario"><i class="icon-hand-right"></i>Otros Servicios</a></li>' +
            '<li class="divider"></li>' +
            '<li><a id="select_todos" href="#todos"><i class="icon-hand-right"></i>Todos</a></li>' +
            '</ul>' +
            '</div>' +
            '</div>'; //finish content



    var up_pages = '<a href="#up" class="ancla"></a>';

    o = o + div_map + close_button + up_pages;

    $('#detail').append(o);
    // call_map_servicios(rec.idproducto);
    $('#backdrop').fadeIn(200);
    $('#detail').show(200);
    $('#close').show(200);




    carrucel_images(rec.imagenes, 'carrucel', 540);
    add_detalles_recurso('id_detalles_recurso', rec);
     /*window.setTimeout(function() {
     call_map_servicios(rec.idproducto);
     $('.dropdown-toggle').dropdown();
     
     }, 1000);*/


}
;





function carrucel_images(aray, id_parent, size) {

    $('#' + id_parent).append('<div id="myCarousel" class="carousel slide"><div>');
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

    $('#myCarousel').css("width", size);
}
;


/*
 *altitud: "ubicado entre 3820 y 4550msnm "
categoria: "Paisaje Natural                                   "
clase: "Recurso Turístico                                 "
como_llegar: "Se debe tomar una desvió en la carretera Libertadores en el sector , en el sector Jutumpapa (18 L 560867 8525369)distante a 55.8km desde Ayacucho, desde ali son 5,2km por una carretera afirmada.
↵Es recomendable contra los servicios de una agencia de turismo."
corredor: "Ninguno                                           "
costo_de_ingreso: "Libre                         "
descripcion: "Es una enorme bosque pétreo de unos 30km2, aquí se encuentra cientos de formaciones rocosas de caprichosas  formas, que han sido talladas probablemente por acción del viento y las lluvias ,además en la zona se ubica la laguna Ustanaqcha, distante a unos 2 Km desde una comunidad próxima, ideal para realizar una  pesca deportiva de trucha , todo matizado por plantas nativas (tasta, tumbo silvestre, tankar, kiswar, muña, ichu entre otros).
↵Al inicio del Bosque de piedras se ubica la pequeña comunidad de Huaraca, que aun conserva sus costumbres  tradicionales  y forma de vida, incluso, aprovecha algunas formas pétreas para acondicionar sus viviendas, esta comunidad se dedica a la crianza de llamas y alpacas. En cuanto a Fauna silvestre encontramos especies como viscacha, zorro andino, zorrillo, puma andino, cóndor aguilucho, cernícalo china linda, Huallata y picaflores. La zona es perfecta para realizar camiatas y realizar  fotografías, incluso acampar, para lo cual  se recomienda una carpa adecuada para el clima  frio y ropa  de abrigo."
distancia: "61km al suroeste de la ciudad de Ayacucho                                                           "
estado: true
fecha: "                                                                                                    "
geometry: Object
historia: ""
horario_de_atencion: "Recomendable Lunes - Domingo de 7.00 am a 18.00pm                                                   "
idproducto: "6p"
idrecurso: "6pr"
imagenes: Array[4]
nombre: "Bosque de Piedras de Huaraca                                                                        "
properties: Object
temperatura: "                              "
tipo: "Bosque de Piedra                                                                                    "
transporte: Array[0]
type: "Feature"
video: "                                                                                                    "
__proto__: Object
*/
function add_detalles_recurso(id_parent, rec) {
    var tr_dis = '';
    var tr_cos = '';
    var tr_tem = '';
    var tr_com = '';
    if (check_null(rec.distancia)) {
        tr_dis = '<tr>' +
                '<td  width="150"> <i class="icon-hand-right"></i> Distancia </td>' +
                '<td>' + rec.distancia + '</td>' +
                '</tr>';
    }
    if (check_null(rec.costo_de_ingreso)) {
        tr_cos = '<tr>' +
                '<td width="150"> <i class="icon-hand-right"></i> Costo de Ingreso</td>' +
                '<td>' + rec.costo_ingreso + '</td>' +
                '</tr>';
    }
    if (check_null(rec.temperatura)) {
        tr_tem = '<tr>' +
                '<td width="150"> <i class="icon-hand-right"></i> Temperatura</td>' +
                '<td>' + rec.temperatura + '</td>' +
                '</tr>';


    }
    if (check_null(rec.como_llegar)) {
        tr_com = '<tr>' +
                '<tr>' +
                '<td width="150"> <i class="icon-hand-right"></i> Como Llegar</td>' +
                '<td>' + rec.como_llegar + '</td>' +
                '</tr>';
    }

    var table = '';
    table = '<table class="table table-striped table-bordered table-condensed">' +
            '<tbody>' + tr_dis + tr_cos + tr_tem + tr_com +
            '</tbody>' +
            '</table>';
    $('#' + id_parent).append(table);

}
;


function check_null(k) {
    if (k.replace(/\s/g, "") + String.fromCharCode(160) != String.fromCharCode(160)) {
        return true;
    } else {
        return false;
    }
}

