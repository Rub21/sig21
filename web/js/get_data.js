function mm_recurso2(callback) {
    if (typeof reqwest === 'undefined') {
        throw 'CSV: reqwest required for';
    }
    var url = 'http://localhost:8080/map21/SListPuntos_Delincuencia?callback=callback';
    reqwest({
        url: url,
        type: 'jsonp',
        jsonpCallback: 'callback',
        success: response,
        error: response
    });

    function response(x) {
        console.log(x)

        for (var i = 0; i < x.length; i++) {
            //Properties
            x[i]['properties'] = {};
            x[i].properties['marker-size'] = 'small';
            if (x[i].estado) {
                x[i].properties['marker-color'] = '#E55C3C';
            } else {
                x[i].properties['marker-color'] = '#659E51';
            }

            if (x[i].img.replace(/\s/g, "") != 'null') {

                if (x[i].reg_de.replace(/\s/g, "") == 'w') {
                    x[i].img = '../imagenesDB/' + x[i].img;
                }

            }


            features.push(x[i]);
        }
        //console.log(features);
        return callback(features);
    }
}
;











/*function mm_recurso() {
 var json = $.getJSON("http://localhost:8080/sigturayacucho/SListarRecurso", function() {
 console.log("success");
 }).done(function(data) {
 console.log(data);
 
 // $.each(data, function(key, val) {
 ///  console.log(key);
 // console.log(val);            
 //}); 
 return  data;
 
 }).fail(function() {
 console.log("error");
 }).always(function() {
 console.log("complete");
 });
 
 }*/

