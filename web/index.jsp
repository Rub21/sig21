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

        <a href='#' id='geolocate'>&nbsp</a>

        <div class="inf_sidebar"><a href="#">&nbsp</a></div>
        <div class="sidebar">
            <div class="hide_sidebar"><a href="#">&nbsp</a></div>
            <div class="content-search">
                <h4>¿Dónde ir?</h4>
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

        <div id='backdrop'></div>
        <div id='detaill_recurso' class='sig_popover'>
            <!-- <div id="popover_recurso">-->
            <div class="content well">
                <a name="up"></a>
                <div class="navbar">
                    <div class="img_popover imagen_logo_recurso"> <img class="imagen_logo"alt=""></div>
                    <div class="navbar-inner ">
                        <div class="container">
                            <a class="brand" href="#"> 
                                <spam class="nombre"></spam><spam class="idproducto"></spam>
                            </a>
                            <ul class="nav pull-right" >
                                <li>
                                    <a class="select_hotel" href="#hotel" ><i class="icon-dormir-black"></i>Dónde dormir
                                    </a>
                                </li>
                                <li>
                                    <a href="#restaurant"><i class="icon-comer-black"></i>Dónde comer
                                    </a>
                                </li>
                                <li>
                                    <a href="#transporte" ><i class="icon-transporte-black"></i>Cómo viajar
                                    </a>
                                </li>
                                <li>
                                    <a href="#complementario" ><i class="icon-comprar-black"></i></i>Otros servicios
                                    </a>
                                </li>                
                            </ul>
                        </div>
                    </div>
                </div>
                <div id="popover_recurso">

                    <div class="row-fluid">
                        <div class="span6">
                            <p  class="well descripcion" style="text-align: justify"> 
                            </p>
                            <div class="cont_historia">
                                <h5>Historia</h5>
                                <p  class="well historia" style="text-align: justify"> </p>
                            </div>

                            <div id="id_detalles_recurso">
                                <table class="table table-striped table-bordered table-condensed">
                                    <tbody>

                                        <tr>
                                            <td width="150"> 
                                                <i class="icon-hand-right"></i> Horario de Atencion
                                            </td>
                                            <td>
                                                <div class="horario_de_atencion"></div>
                                            </td>
                                        </tr> 
                                        <tr>
                                            <td width="150"> 
                                                <i class="icon-hand-right"></i> Tipo/Precio de Ingreso
                                            </td>
                                            <td>
                                                <div class="costo_de_ingreso"></div>
                                            </td>
                                        </tr> 
                                        <tr>
                                            <td width="150"> 
                                                <i class="icon-hand-right"></i><spam id="direccion_recurso">Distancia de la ciudad</spam> 
                                    </td>
                                    <td>
                                        <div class="distancia"></div>
                                    </td>
                                    </tr> 
                                    <tr>
                                        <td width="150"> 
                                            <i class="icon-hand-right"></i> Como llegar
                                        </td>
                                        <td>
                                            <div class="como_llegar"></div>
                                            <h6 class="movilidad">
                                                <a href="#movilidad"  class="click_movilidad"  >ver movilidad a este destino</a>
                                            </h6>

                                        </td>
                                    </tr> 


                                    <tr>
                                        <td width="150"> 
                                            <i class="icon-hand-right"></i> Corredor Turistio
                                        </td>
                                        <td>
                                            <div class="corredor"></div>
                                        </td>
                                    </tr>  

                                    <tr>
                                        <td width="150"> 
                                            <i class="icon-hand-right"></i> Altitud(msnm)
                                        </td>
                                        <td>
                                            <div class="altitud"></div>
                                        </td>
                                    </tr>  
                                    <tr>
                                        <td width="150"> 
                                            <i class="icon-hand-right"></i> Temperatura
                                        </td>
                                        <td>
                                            <div class="temperatura"></div>
                                        </td>
                                    </tr>  

                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div  class="span6">

                            <div class="imagenes_recurso">
                            </div>
                            <!-- <div class="overimagen_recurso">
 
                             </div>-->
                            <a class="overimagen_recurso" href="#">ver imagenes en tamaño normal</a>
                        </div>                        
                        <div id="video" class="span6">
                            <!--<textarea class="embed-code"></textarea> -->


                        </div>
                    </div>

                    <div class="row-fluid">
                        <div class="container-servicios">
                            <div class="well-small">
                                <a id="servicios" >
                                    <h3  class="text-info text-center" >Servicios Adicionales en <span  class="nombre"></span> </h3>
                                </a>
                            </div>

                            <div class="map_servicios">

                            </div>
                            <div class="select_servicios">
                                <ul class="dropdown-menu">
                                    <li><a id="select_hotel" href="#hotel"><i class="icon-hand-right"></i>Dónde Dormir</a></li>
                                    <li><a id="select_restaurant"href="#restaurant"><i class="icon-hand-right"></i>Dónde Comer</a></li>
                                    <li><a id="select_transporte" href="#transporte"><i class="icon-hand-right"></i>Cómo Viajar</a></li>
                                    <li><a id="select_complementario" href="#complementario"><i class="icon-hand-right"></i>Otros Servicios</a></li>
                                    <li class="divider"></li>
                                    <li><a id="select_todos" href="#todos"><i class="icon-hand-right"></i>Todos</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

            <!--</div>-->


            <div class="modal-footer"><button type="button" data-dismiss="modal" class="btn btn-primary" id="butoon_close">Cerrar</button></div>

        </div>
        <a id='close'  style="cursor: pointer;">✕</a>

        <!--HOTEL-->
        <div id="modal_hotel">
            <div id="popover_hotel" class="modal container hide fade" tabindex="-1">
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
                                            <i class="icon-hand-right"></i> Precios de habitaciones 
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
                                            <!--<div class="sitio_web"></div> -->
                                            <a target="_blank" class="sitio_web" id="sitio_web_hotel" href="#"></a>
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
                            <div class="imagenes_hotel">
                            </div>
                        </div>
                        <div class="span3">
                            <h6>Servicios Adicionales</h6>
                            <div class="servicios"></div>
                        </div>

                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" data-dismiss="modal" class="btn btn-primary" id="butoon_close_hotel">Cerrar</button>

                </div>
            </div>
            <a href="#popover_hotel"  class="click_hotel"  data-toggle="modal"></a>


        </div>
        <!--END HOTEL-->

        <!--RESTAURANT-->
        <div id="modal_restaurant">
            <div id="popover_restaurant" class="modal container hide fade" tabindex="-1">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                    <img class="imagen_logo"/>
                    <h1>
                        <spam class="nombre"></spam>
                    </h1>
                    <p>
                        Categoria: <spam class="categoria"></spam> 
                    </p> 
                    <p>
                        Ofrece:  <spam class="tipo"></spam> 
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
                                            <i class="icon-hand-right"></i> Pagos mediante
                                        </td>
                                        <td>
                                            <div class="formas_de_pago"></div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td width="150"> 
                                            <i class="icon-hand-right"></i> Especialidades en
                                        </td>
                                        <td>
                                            <div class="especialidad"></div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td width="150"> 
                                            <i class="icon-hand-right"></i> Precio promedio 
                                        </td>
                                        <td>
                                            <div class="precio_promedio"></div>
                                        </td>
                                    </tr>
                                    <tr>

                                        <td width="150"> 
                                            <i class="icon-hand-right"></i> Sitio web: 
                                        </td>
                                        <td>
                                            <!--<div class="sitio_web"></div> -->
                                            <a target="_blank" class="sitio_web" id="sitio_web_restaurant" href="#"></a>  
                                        </td>
                                    </tr>                        
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div class="row-fluid" >
                        <div class="span12">
                            <div class="imagenes_restaurant"  >
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" data-dismiss="modal" class="btn btn-primary"  id="butoon_close_restaurant">Cerrar</button>
                </div>
            </div>
            <a href="#popover_restaurant"  class="click_restaurant"  data-toggle="modal"></a>
        </div>
        <!--END RESTAURANT-->

        <!--COMPLEMENTARIO-->
        <div id="modal_complementario">
            <div id="popover_complementario" class="modal container hide fade" tabindex="-1">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                    <img class="imagen_logo"/>
                    <h1>
                        <spam class="nombre"></spam>
                    </h1>    
                    <p>
                        Destinos de llegada: <spam class="destinos"></spam>
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
                                            <i class="icon-hand-right"></i> Sitio web: 
                                        </td>
                                        <td>
                                            <!--<div class="sitio_web"></div> -->
                                            <a target="_blank" class="sitio_web" id="sitio_web_complementario" href="#"></a>

                                        </td>
                                    </tr>                        
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div class="row-fluid" >
                        <div class="span12">
                            <div class="imagenes_complementario"  >
                            </div>
                        </div>


                    </div>
                </div>


                <div class="modal-footer">
                    <button type="button" data-dismiss="modal" class="btn btn-primary" id="butoon_close_complementario">Cerrar</button>

                </div>
            </div>
            <a href="#popover_complementario"  class="click_complementario"  data-toggle="modal"></a>
        </div>
        <!--END COMPLEMENTARIO-->
        <!--TRANSPORTE-->
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
                                            <!--<div class="sitio_web"></div> -->
                                            <a target="_blank" class="sitio_web" id="sitio_web_transporte" href="#"></a> 

                                        </td>
                                    </tr>      
                                    <tr>

                                        <td width="150"> 
                                            <i class="icon-hand-right"></i> Destinos: 
                                        </td>
                                        <td>
                                            <!--<div class="sitio_web"></div> -->
                                            <div class="destinos" id="destinos_transporte"> </div>
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
                    <button type="button" data-dismiss="modal" class="btn btn-primary" id="butoon_close_transporte">Cerrar</button>

                </div>
            </div>
            <a href="#popover_transporte"  class="click_transporte"  data-toggle="modal"></a>
        </div>
        <!--END TRANSPORTE-->
        <!--MOVILIDAD-->

        <div id="modal_imagen">
            <div id="popover_imagen" class="modal container hide fade" tabindex="-1">

                <!-- <div class="modal-body" >
                     <button type="button" class="close" id="butoon_close_imagen" data-dismiss="modal" aria-hidden="true">×</button> 
                -->
                <div class="full_imagen_recurso"></div>


                <!--    </div>-->



            </div>
            <a href="#popover_imagen"  class="click_imagen"  data-toggle="modal"></a>
        </div>


        <!--END MOVILIDAD-->
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

        <!--function recurso-->
        <script type="text/javascript" src="js/detaill_recurso.js"></script>
        <script  type="text/javascript" src="js/app_recurso.js"></script>
        <script  type="text/javascript" src="js/app.js"></script>

        <!--function hoteles-->
        <script  type="text/javascript" src="js/detaill_hotel.js"></script>
        <!--function restaurant-->
        <script  type="text/javascript" src="js/detaill_restaurant.js"></script>
        <!--function Complentario-->
        <script  type="text/javascript" src="js/detaill_complementario.js"></script>

        <!--function transporte-->
        <script  type="text/javascript" src="js/detaill_transporte.js"></script>
    </body>
</html>