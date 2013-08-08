<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>TURAYACUCHO</title>

        <jsp:include page="templates/style.jspf"></jsp:include> 


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

        <div id='backdrop'></div>
        <div id='detail' class='sig_popover'></div>
        <a id='close'  style="cursor: pointer;">✕</a>


        <!--Librerias-->
        <script src="http://code.jquery.com/jquery-1.8.0.js"></script>
        <script src='http://api.tiles.mapbox.com/mapbox.js/v1.3.1/mapbox.js'></script>
        <script src="lib/Leaflet.fullscreen.js"></script>
        <script src="lib/leaflet-hash.js"></script>
        <script src="lib/Control.MiniMap.js"></script>
        <script type="text/javascript" src="lib/underscore-min.js"></script>        
        <script type="text/javascript" src="lib/bootstrap.js"></script>

        <!--Global Data-->
        <script type="text/javascript" src="js/global.js"></script>
        <script type="text/javascript" src="js/map.js"></script>
        
        <!--Get Data-->
        <script type="text/javascript" src="js/get_data.js"></script>
        
        <!--function recurso-->
        <script type="text/javascript" src="js/detaill_recurso.js"></script>
        <script  type="text/javascript" src="js/app.js"></script>

    </body>
</html>