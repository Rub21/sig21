
$(document).on('ready', function() {

    $("#butoon_close").click(function(event) {
        $('#close').trigger('click');
    });
    $('#close').click(function(e) {
        e.preventDefault();
        $('#backdrop').fadeOut(200);
        $('#detaill_recurso').hide(200);
        // $('#detail').empty();
        $('#close').hide(200);
        //cerrar modal de hotel
        $('#butoon_close_hotel').click();
        //cerrar modal de Restaurant
        $('#butoon_close_restaurant').click();
        //cerrar modal de Complementario
        $('#butoon_close_complementario').click();
        //cerrar modal dede transporte
        $('#butoon_close_transporte').click();
        //cerrar imagens
        $('#butoon_close_imagen').click();
        //solo para el caso de video
        $('#video').empty();
    });


    $('.hide_sidebar').click(function() {
        $('.sidebar').hide(200);
        $('.inf_sidebar').css('display', 'block');
        //control map
        $('#map .leaflet-left .leaflet-control').css('top', '30px');
        $('#map .leaflet-left .leaflet-control').css('margin-left', '10px');
        $('#map .leaflet-left .leaflet-control').css('margin-bottom', '30px');



    });

    $('.inf_sidebar').click(function() {
        $('.sidebar').show(200);
        $('.inf_sidebar').css('display', 'none');
        //control map
        $('#map .leaflet-left .leaflet-control').css('top', '2px');
        $('#map .leaflet-left .leaflet-control').css('margin-left', '340px');
        $('#map .leaflet-left .leaflet-control').css('margin-bottom', '15px');
    })

});