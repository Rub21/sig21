function mm_recurso() {

    var json = $.getJSON(url_data + "SListarRecurso", function() {

    }).done(function(data) {
        //console.log(data);

        var ext = "-l.png";
        $.each(data, function(key, val) {

            // console.log(data[key].tipo)
            /*  if (typeof data[key].tipo !== 'undefined') {*/
            data[key]['type'] = 'Feature';
            var type_icon = data[key].tipo.toLowerCase().replace(/\s/g, "");
            //Properties
            data[key]['properties'] = {};
            data[key]['properties']['icon'] = {};
            data[key]['properties']['icon']['iconUrl'] = url_img + type_icon + ext;
            data[key]['properties']['icon']['iconSize'] = [35, 90];
           /* data[key]['properties']['icon']['iconAnchor'] = [25, 25];*/
            data[key]['properties']['icon']['popupAnchor'] = [0, -43];
            /*data[key].properties['marker-size'] = 'large';
             data[key].properties['marker-symbol'] = 'star';
             data[key].properties['marker-color'] = '#000000';*/

            //console.log(data[key].tipo)

            //URL imagen
            _.each(data[key].imagenes, function(value, i) {
                data[key].imagenes[i].url = dir + data[key].imagenes[i].url;
                //console.log(data[key].imagenes[i].url);
            });
        });
        //console.log("success");
        mapData(data);

    }).fail(function() {
        console.log("error");
    }).always(function() {
        console.log("complete");
    });
}
;

function mm_hoteles() {

    var json = $.getJSON(url_data + "SListarHotel", function() {

    }).done(function(data) {
        var ext = "-l.png";
        $.each(data, function(key, val) {
            data[key]['type'] = 'Feature';
            //Properties
            data[key]['properties'] = {};
            data[key]['properties']['icon'] = {};
            data[key]['properties']['icon']['iconUrl'] = url_img + 'hotel' + ext;
            data[key]['properties']['icon']['iconSize'] = [30, 70];
            /*data[key]['properties']['icon']['iconAnchor'] = [25, 45];*/
            data[key]['properties']['icon']['popupAnchor'] = [0, -35];
            //URL imagen
            _.each(data[key].imagenes, function(value, i) {
                data[key].imagenes[i].url = dir + data[key].imagenes[i].url;             
            });
        });
        mapData_hoteles(data);

    }).fail(function() {
        console.log("error");
    }).always(function() {
        console.log("complete");
    });
}



function mm_restaurants() {

    var json = $.getJSON(url_data + "SListarRestaurant", function() {

    }).done(function(data) {
        var ext = "-l.png";
        $.each(data, function(key, val) {
            data[key]['type'] = 'Feature';
            //Properties
            data[key]['properties'] = {};
            data[key]['properties']['icon'] = {};
            data[key]['properties']['icon']['iconUrl'] = url_img + 'restaurant' + ext;
            data[key]['properties']['icon']['iconSize'] = [30, 70];
            /*data[key]['properties']['icon']['iconAnchor'] = [25, 45];*/
            data[key]['properties']['icon']['popupAnchor'] = [0, -35];
            //URL imagen
            _.each(data[key].imagenes, function(value, i) {
                data[key].imagenes[i].url = dir + data[key].imagenes[i].url;             
            });
        });
        mapData_restaurants(data);

    }).fail(function() {
        console.log("error");
    }).always(function() {
        console.log("complete");
    });
}


function mm_transportes() {

    var json = $.getJSON(url_data + "SListarTransporte", function() {

    }).done(function(data) {
        var ext = "-l.png";
        $.each(data, function(key, val) {
            data[key]['type'] = 'Feature';
            //Properties
            data[key]['properties'] = {};
            data[key]['properties']['icon'] = {};
            data[key]['properties']['icon']['iconUrl'] = url_img + 'transporte' + ext;
            data[key]['properties']['icon']['iconSize'] = [30, 70];
            /*data[key]['properties']['icon']['iconAnchor'] = [25, 45];*/
            data[key]['properties']['icon']['popupAnchor'] = [0, -35];
            //URL imagen
            _.each(data[key].imagenes, function(value, i) {
                data[key].imagenes[i].url = dir + data[key].imagenes[i].url;             
            });
        });
        mapData_transportes(data);

    }).fail(function() {
        console.log("error");
    }).always(function() {
        console.log("complete");
    });
}
