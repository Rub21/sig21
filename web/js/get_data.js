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


            list_recursos.push(data[key]);
        });

        //console.log("success");
        //mapData(data);

    }).fail(function() {
        console.log("error");
    }).always(function() {
        console.log("complete");
    });
}
;
//inicializa
mm_recurso();


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
            list_hoteles.push(data[key]);
        });
        // mapData_hoteles(data);

    }).fail(function() {
        console.log("error");
    }).always(function() {
        console.log("complete");
    });
}

//inicializa
mm_hoteles();

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
            list_restaurants.push(data[key]);
        });
//        mapData_restaurants(data);

    }).fail(function() {
        console.log("error");
    }).always(function() {
        console.log("complete");
    });
}
;
//inicializacion
mm_restaurants();


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
            list_transportes.push(data[key]);
        });
        //   mapData_transportes(data);

    }).fail(function() {
        console.log("error");
    }).always(function() {
        console.log("complete");
    });
}
;
//inicializar
mm_transportes()

function mm_complementarios() {

    var json = $.getJSON(url_data + "SListarComplementario", function() {

    }).done(function(data) {
        var ext = "-l.png";
        $.each(data, function(key, val) {
            data[key]['type'] = 'Feature';
            //Properties
            var tipo = data[key].tipo.toLowerCase().replace(/\s/g, "");
            console.log(tipo);
            data[key]['properties'] = {};
            data[key]['properties']['icon'] = {};
            data[key]['properties']['icon']['iconUrl'] = url_img + tipo + ext;
            data[key]['properties']['icon']['iconSize'] = [30, 70];
            /*data[key]['properties']['icon']['iconAnchor'] = [25, 45];*/
            data[key]['properties']['icon']['popupAnchor'] = [0, -35];
            //URL imagen
            _.each(data[key].imagenes, function(value, i) {
                data[key].imagenes[i].url = dir + data[key].imagenes[i].url;
            });
            list_complementarios.push(data[key]);
        });
        //mapData_complementarios(data);

    }).fail(function() {
        console.log("error");
    }).always(function() {
        console.log("complete");
    });
}
;
//inicializar
mm_complementarios();


function mm_servicios() {

    var json = $.getJSON(url_data + "SListarServicio", function() {

    }).done(function(data) {
        var ext = "-l.png";
        $.each(data, function(key, val) {
            data[key]['type'] = 'Feature';
            //clase
            var clase = data[key].clase.replace(/\s/g, "");

            data[key]['type'] = 'Feature';
            //Properties
            data[key]['properties'] = {};
            data[key]['properties']['icon'] = {};
            data[key]['properties']['icon']['iconSize'] = [30, 70];
            /*data[key]['properties']['icon']['iconAnchor'] = [25, 45];*/
            data[key]['properties']['icon']['popupAnchor'] = [0, -35];
            //URL imagen

            _.each(data[key].imagenes, function(value, i) {
                data[key].imagenes[i].url = dir + data[key].imagenes[i].url;
            });


            if (clase === 'Hotel') {
               // console.log(data[key].nombre)
                data[key]['properties']['icon']['iconUrl'] = url_img + 'hotel' + ext;
            } else if (clase === 'Restaurant') {
               // console.log(data[key].nombre)
                data[key]['properties']['icon']['iconUrl'] = url_img + 'restaurant' + ext;
            } else if (clase === 'Transporte') {
                //console.log(data[key].nombre)
                data[key]['properties']['icon']['iconUrl'] = url_img + 'transporte' + ext;
            } else if (clase === 'Complementario') {
                //console.log(data[key].nombre)
                var tipo = data[key].tipo.toLowerCase().replace(/\s/g, "");
                data[key]['properties']['icon']['iconUrl'] = url_img + tipo + ext;
            }


            list_servicios.push(data[key]);
        });
        //list_servicios = data;

    }).fail(function() {
        console.log("error");
    }).always(function() {
        console.log("complete");
    });
}
;

//Inicializar lista de servicos.
mm_servicios();