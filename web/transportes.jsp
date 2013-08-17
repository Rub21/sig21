<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Medios de transporte  en Ayacucho</title>
        <jsp:include page="templates/style.jspf"></jsp:include> 
        </head>
        <body>
        <jsp:include page="templates/header.jsp"></jsp:include> 

        <div id="map" class="loading">
        </div>
        <div class="sidebar">
            <div class="content-search">
                <h4>¿Como Viajar?</h4>
                <div class="search">
                    <input type="text" id="search" name="search" placeholder="Buscar"/>
                    <a class="btn btn-primary"  href = '#buscar'>Buscar</a>
                </div> 
                <br>
                <div id="faill_search"></div>
                <div id="content_of_search" class="loading">

                </div>
            </div>
        </div>
        <div id="modal_transporte">
            <div id="popover_transporte" class="modal container hide fade" tabindex="-1">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                    <img class="imagen_logo"/>
                    <h1>
                        <spam class="nombre"></spam>
                    </h1>    
                    <p>
                        Tipo de Servicio: <spam class="tipo"></spam>
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
                                            <i class="icon-hand-right"></i> Dirección 
                                        </td>
                                        <td>
                                            <div class="direccion"></div>
                                        </td>
                                    </tr>
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
                                            <i class="icon-hand-right"></i> Horario de atencion 
                                        </td>
                                        <td>
                                            <div class="horario_de_atencion"></div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td width="150"> 
                                            <i class="icon-hand-right"></i> Horario de salidas 
                                        </td>
                                        <td>
                                            <div class="horario_de_salida"></div>
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
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div class="row-fluid" >
                        <div class="span12">
                            <div class="imagenes_transporte"  >
                            </div>
                        </div>


                    </div>
                </div>


                <div class="modal-footer">
                    <button type="button" data-dismiss="modal" class="btn btn-primary">Cerrar</button>

                </div>
            </div>
            <a href="#popover_transporte"  class="click_transporte"  data-toggle="modal"></a>
        </div>
    </body>

    <!--Librerias-->
    <script src="lib/jquery-1.9.1.js"></script>
    <script src="lib/jquery-ui.js"></script>
    <script src='lib/mapbox.js'></script>
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

    <!--function transporte-->   
    <script  type="text/javascript" src="js/detaill_transporte.js"></script>
    <script  type="text/javascript" src="js/app_transporte.js"></script>


</html>
