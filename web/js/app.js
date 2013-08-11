
$(document).on('ready', function() {
    $("#butoon_close").live('click', function(event) {
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
        //cerrar modal de hotel
        $('#butoon_close_restaurant').click();
        //cerrar modal de hotel
        $('#butoon_close_complementario').click();
        //solo para el caso de video
        $('#video').empty();
    });
});