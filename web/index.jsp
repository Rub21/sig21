<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>TURAYACUCHO</title>

        <link type='text/css' href='http://api.tiles.mapbox.com/mapbox.js/v1.3.1/mapbox.css' rel='stylesheet' />
        <link type='text/css' rel="stylesheet" href="css/bootstrap.css" >
        <link  type='text/css' href='css/style_header.css' rel='stylesheet' />
        <link  type='text/css' href='css/style.css' rel='stylesheet' />
        <link  type='text/css' href='css/style_popover.css' rel='stylesheet' />
        <link rel="stylesheet" href="lib/leaflet.fullscreen.css" />
        <link rel="stylesheet" href="lib/Control.MiniMap.css" />


    </head>

    <body>
        <jsp:include page="templates/header.jsp"></jsp:include>    
        <div id="map" class="loading">

        </div>


        <div class="sidebar">
            <div class="content-search">
                <h4>¿Donde Quieres Ir?</h4>
                <div class="search">
                    <!-- Search-->
                    <input type="text" id="search" name="search" placeholder="Buscar"/>
                    <!-- close-->
                    <a class="btn btn-primary"  href = '#'>Buscar</a>
                </div>  
            </div>

        </div>





        <script src="http://code.jquery.com/jquery-1.8.0.js"></script>
        <script type="text/javascript" src="https://www.google.com/jsapi"></script>

        <script src='http://api.tiles.mapbox.com/mapbox.js/v1.3.1/mapbox.js'></script>
        <script src="lib/Leaflet.fullscreen.js"></script>
        <script src="lib/leaflet-hash.js"></script>
        <script src="lib/Control.MiniMap.js"></script>
        <script type="text/javascript" src="lib/underscore-min.js"></script>        
        <script type="text/javascript" src="lib/bootstrap.js"></script>



        <script type="text/javascript" src="js/get_data.js"></script>

        <script  type="text/javascript" src="js/app.js"></script>

    </body>
</html>