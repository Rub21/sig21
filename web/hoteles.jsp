<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Hoteles en Ayacucho</title>
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


        <div id="modal_hotel">
            <div id="popover" class="modal container hide fade" tabindex="-1">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                    <img class="imagen_logo"/>
                    <h1>
                        <spam class="nombre"></spam>
                    </h1>
                    <p>
                        Categoria: <spam class="categoria"></spam> 
                    </p>             
                </div>
                <div class="modal-body" style="text-align: center">
                    <div class="row-fluid">
                        <div class="span3">
                            <p class="descripcion"></p>
                        </div>
                        <div class="span9">
                            <table class="table table-striped table-bordered table-condensed">
                                <tbody>
                                    <tr>
                                        <td width="150"> 
                                            <i class="icon-hand-right"></i> Telefono 
                                        </td>
                                        <td>
                                            <div class="telefono"></div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td width="150"> 
                                            <i class="icon-hand-right"></i> Dirección 
                                        </td>
                                        <td>
                                            <div class="direccion"></div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td width="150"> 
                                            <i class="icon-hand-right"></i> Pagos mediante
                                        </td>
                                        <td>
                                            <div class="formas_de_pago"></div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td width="150"> 
                                            <i class="icon-hand-right"></i> Promedio de precios de habitaciones 
                                        </td>
                                        <td>
                                            <div class="precio"></div>
                                        </td>
                                    </tr>
                                    <tr>

                                        <td width="150"> 
                                            <i class="icon-hand-right"></i> Sitio web: 
                                        </td>
                                        <td>
                                            <div class="sitio_web"></div> 
                                        </td>

                                    </tr>
                                    <tr>
                                        <td width="150"> 
                                            <i class="icon-hand-right"></i> Correo Electronico 
                                        </td>
                                        <td>
                                            <div class="correo_electronico"></div>   
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div class="row-fluid" >
                        <div class="span9">
                            <div class="imagenes_hotel" id="imagenes" >
                            </div>
                        </div>
                        <div class="span3">
                            <h6>Servicios Adicionales</h6>
                            <div class="servicios"></div>
                        </div>

                    </div>
                </div>


                <div class="modal-footer">
                    <button type="button" data-dismiss="modal" class="btn btn-primary">Cerrar</button>

                </div>
            </div>
            <a href="#popover"  class="click"  data-toggle="modal"></a>


        </div>
    </body>

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

    <!--function hoteles-->
    <script  type="text/javascript" src="js/detaill_hotel.js"></script>
    <script  type="text/javascript" src="js/app_hotel.js"></script>

</html>
