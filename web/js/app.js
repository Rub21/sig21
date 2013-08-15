
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

});