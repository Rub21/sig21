<%@ page pageEncoding="ISO-8859-1" %>
<!DOCTYPE html>

<%    /*   String usuario3 = (String) session.getAttribute("session_usuario");
     if (usuario3 == null) {
     response.sendRedirect("../users/login_users.jsp");
     }*/

%>
<html>

    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Registro</title>
        <jsp:include page="templates/style.jspf"></jsp:include>
        </head>
        <body>

        <jsp:include page="templates/header.jsp"></jsp:include>
            <div class="span2"></div>
            <div class="container span10" > 
                <form name="form" id="form-h" method="post"  action="<%=request.getContextPath()%>/SRegistrarHotel" enctype="multipart/form-data" >
                <div class="container">
                    <div class="row">                  
                        <div class="well span8" align="center">
                            <h4> Registrar planta turística - Hotel</h4>
                            <div class="container-fluid">
                                <div class="row-fluid">
                                    <div class="span4">Nombre <spam class="required">*</spam></div>
                                    <div class="span4">
                                        <input type='text'  name='nombre' value=''  align="left" id='nombre-h' placeholder="" required/>
                                    </div>
                                </div>
                                <div class="row-fluid">
                                    <div class="span4 left">Categoria</div>
                                    <div class="span4">
                                        <select name='categoria' id='categoria-h' align="left" >
                                            <option value='Sin Categoria'>Sin Categoria</option>
                                            <option value='1 Estrella'>1 Estrella</option>
                                            <option value='2 Estrellas'>2 Estrellas</option>
                                            <option value='3 Estrellas'>3 Estrellas</option>
                                            <option value='4 Estrellas'>4 Estrellas</option>                                
                                        </select>
                                    </div>
                                </div>   

                                <div class="row-fluid">
                                    <div class="span4">Descripción<spam class="required">*</spam></div>
                                    <div class="span4">
                                        <textarea  name='descripcion'  rows='4' cols='75' id='descripcion-h' align="left"></textarea>
                                    </div>
                                </div>

                                <div class="row-fluid">
                                    <div class="span4">Dirección<spam class="required">*</spam></div>
                                    <div class="span4">
                                        <input type='text'  name='direccion' value=''  align="left" id='direcion-h' placeholder="" required/>
                                    </div>
                                </div>
                                <div class="row-fluid">
                                    <div class="span4">Teléfono<spam class="required">*</spam></div>
                                    <div class="span4">
                                        <input type='text'  name='telefono' value=''  align="left" id='telefono-h' placeholder="" required/>
                                    </div>
                                </div>

                                <div class="row-fluid">
                                    <div class="span4">Sitio web</div>
                                    <div class="span4">
                                        <input type='text'  name='sitio_web' value=''  align="left" id='sitio_web-h' placeholder="" />
                                    </div>
                                </div>
                                <div class="row-fluid">
                                    <div class="span4">Correo electrónico</div>
                                    <div class="span4">
                                        <input type='text'  name='correo_electronico' value=''  align="left" id='correo_electronico-h' placeholder=" " />
                                    </div>
                                </div>
                                <div class="row-fluid">
                                    <div class="span4">Tipo y precio de la habitación <spam class="required">*</spam></div>
                                    <div class="span4">
                                        <input type='text'  name='precio_de_habitacion' value=''  align="left" id='precio_de_habitacion-h'  required/>
                                    </div>
                                </div>

                                <div class="row-fluid">
                                    <div class="span4">Formas de pago</div>
                                    <div class="span4">
                                        <input type='text'  name='formas_de_pago' value=''  align="left" id='formas_de_pago-h' placeholder="" />
                                    </div>
                                </div>
                            </div>   
                        </div>
                    </div>
                </div>
                <div class="container">                         
                    <div class="row">                       
                        <div class="well span8" align="center">
                            <h4>Localización</h4>
                            <div class="container-fluid">
                                <div class="row-fluid">                            
                                    <div class="span2"><input type="checkbox" class='chek_lat_lon' id='chek_lat_lon' name="chek_lat_lon" value=''></div>
                                    <div class="span10"><p  align="left">Ingresar latitud y longitud manualmente</p>
                                    </div>
                                </div>
                                <div class="row-fluid">
                                    <div class="span4">Latitud<spam class="required">*</spam></div>
                                    <div class="span4">
                                        <input type='text' name='lat' value='' id='lat' align="left" placeholder='click en el Mapa' readonly/>
                                    </div>
                                </div>
                                <div class="row-fluid">
                                    <div class="span4">Longitud<spam class="required">*</spam></div>
                                    <div class="span4">
                                        <input type='text' name='lon' value='' id='lon' align="left" placeholder='click en el Mapa' readonly/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>  
                </div>  

                <div class="content_map">
                    <div class="accordion" id="accordion">
                        <div class="accordion-group">
                            <div class="accordion-reeading">
                                <a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion2" href="#collapse" >
                                    Mostrar mapa
                                </a>
                            </div>
                            <div id="collapse" class="accordion-body collapse">
                                <div class="accordion-inner">
                                    <div id='map'></div>
                                    <div class='left'>
                                        <a id='geojsonLayer' href='#'></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div class="container">
                    <div class="row"> 
                        <div class="well span8 file_upload" align="center">  
                            <h4>Galería de imágenes</h4>        
                            <div class='well file_upload' id='f1'>
                                <input name='file1' type='file' id='file_img1'required/>
                            </div>

                            <div id='file_tools'>
                                <img src='img/file_add.png' id='add_file' title='Add new input'/>
                                <img src='img/file_del.png' id='del_file' title='Delete'/>
                            </div>
                        </div> 
                    </div> 
                </div>     <div class="container">                         
                    <div class="row">                       
                        <div class="well span8" align="center">
                            <h4>Servicios adicionales</h4>
                            <div class="container-fluid">
                                <div id="service1">
                                    <div class="row-fluid well">
                                        <div class="span4">Tipo de servicio 1</div>
                                        <div class="span4">                          
                                            <input type='text'  name='type-service1' value=''  align="left" id='type-service1-h'  placeholder="Nombre del Servicios"/>
                                        </div>
                                    </div> 
                                </div>
                                <div id='service_tools-h'>
                                    <img src='img/file_add.png' id='add_service-h' title='Add new input'/>
                                    <img src='img/file_del.png' id='del_service-h' title='Delete'/>
                                </div>
                            </div>
                        </div>
                    </div>                       
                </div>  

                <div class="span3"></div>
                <div class="container">
                    <button type="submit" class="btn btn-primary" id="button">  Registrar</button>
                    <a class="btn" id="clear-re" href="#" onClick="location.href = 'registrar.jsp'">Cancelar</a>
                </div>

            </form>

        </div>

        <div class="span2"></div>

        <jsp:include page="templates/footer.jspf"></jsp:include>

    </body>
    <!--Scripts-->		
    <script src='js/mapbox0.6.js'></script>
    <script src='js/jquery-1.8.2.js'></script>
    <script src="js/jquery.validate.js"></script>
    <script src='js/underscore.min.js'></script>
    <script src='js/bootstrap.js'></script>        
    <script src='js/fun_map.js' ></script>
    <script src='js/app.js' ></script>
    <script src='js/form_recurso.js' ></script>
    <script src='js/form_hotel.js' ></script>
    <script src='js/form_restaurant.js' ></script>
    <script src='js/form_transporte.js' ></script>

    <script src='js/form_validate.js' ></script>

</html>
