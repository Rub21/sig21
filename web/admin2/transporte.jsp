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
                <form name="form" id="form-t" method="post"  action="<%=request.getContextPath()%>/SRegistrarTransporte" enctype="multipart/form-data" >
                <div class="container">
                    <div class="row">                  
                        <div class="well span8" align="center">
                            <h4>Registrar medio de transporte</h4>
                            <div class="container-fluid">
                                <div class="row-fluid">
                                    <div class="span4">Nombre<spam class="required">*</spam></div>
                                    <div class="span4">
                                        <input type='text'  name='nombre' value=''  align="left" id='nombre-t' placeholder="" required/>
                                    </div>
                                </div>                               
                                <div class="row-fluid">
                                    <div class="span4">Descripci�n<spam class="required">*</spam></div>
                                    <div class="span4">
                                        <textarea  name='descripcion'  rows='3' cols='75' id='descripcion-t' align="left"></textarea>
                                    </div>
                                </div>
                                <div class="row-fluid">
                                    <div class="span4">Direcci�n<spam class="required">*</spam></div>
                                    <div class="span4">
                                        <input type='text'  name='direccion' value=''  align="left" id='direccion-t' placeholder="" />
                                    </div>
                                </div>
                                <div class="row-fluid">
                                    <div class="span4">Telefono<spam class="required">*</spam></div>
                                    <div class="span4">
                                        <input type='text'  name='telefono' value=''  align="left" id='telefono-t' placeholder="" />
                                    </div>
                                </div>

                                <div class="row-fluid">
                                    <div class="span4">Sitio Web</div>
                                    <div class="span4">
                                        <input type='text'  name='sitio_web' value=''  align="left" id='sitio_web-t' placeholder="" />
                                    </div>
                                </div>
                                <div class="row-fluid">
                                    <div class="span4">Horario de Atenci�n<spam class="required">*</spam></div>
                                    <div class="span4">
                                        <input type='text'  name='horario_de_atencion' value=''  align="left" id='horario_de_atencion-t' placeholder="" />
                                    </div>
                                </div> 
                                <div class="row-fluid">
                                    <div class="span4">Horario de salidas<spam class="required">*</spam></div>
                                    <div class="span4">
                                        <input type='text'  name='horario_de_salida' value=''  align="left" id='horario_de_salida-t' placeholder="" />
                                    </div>
                                </div> 
                                <div class="row-fluid">
                                    <div class="span4">Destinos de transporte<spam class="required">*</spam></div>
                                    <div class="span4">
                                        <textarea type='text'  name='destinos' value='' rows='2' cols='75'  align="left" id='destinos-t' placeholder="" ></textarea>
                                    </div>
                                </div> 
                            </div>   
                        </div>
                    </div>
                </div>
                <div class="container">                         
                    <div class="row">                       
                        <div class="well span8" align="center">
                            <h4>Localizaci�n</h4>
                            <div class="container-fluid">
                                <div class="row-fluid">                            
                                    <div class="span2"><input type="checkbox" class='chek_lat_lon' id='chek_lat_lon' name="chek_lat_lon" value=''></div>
                                    <div class="span10"><p  align="left">Ingresar Latitud y Longitud Manualmente</p>
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
                    <div class="accordion" id="accordion-re">
                        <div class="accordion-group">
                            <div class="accordion-reeading">
                                <a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion2" href="#collapse-re" >
                                    Mostrar Mapa
                                </a>
                            </div>
                            <div id="collapse-re" class="accordion-body collapse">
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
                            <h4>Galer�a de Im�genes<spam class="required">*</spam></h4>        
                            <div class='well file_upload' id='f1'>
                                <input name='file1' type='file' id='file_img1'required/>
                            </div>

                            <div id='file_tools'>
                                <img src='img/file_add.png' id='add_file' title='Add new input'/>
                                <img src='img/file_del.png' id='del_file' title='Delete'/>
                            </div>
                        </div> 
                    </div> 
                </div> 
                <div class="span3"></div>
                <div class="container">
                    <button type="submit" class="btn btn-primary" id="button-re">  Registrar</button>                    
                    <a class="btn" id="clear-re" href="#" onClick="location.href = 'registrar.jsp'">Cancelar</a>
                </div>
            </form>
        </div>
        <div class="span2"></div>
        <jsp:include page="templates/footer.jspf"></jsp:include>
    </body>
    <!--Scripts-->		
    <script src='http://api.tiles.mapbox.com/mapbox.js/v0.6.6/mapbox.js'></script>
    <script src='http://code.jquery.com/jquery-1.8.2.js'></script>
    <script type="text/javascript" src="http://ajax.aspnetcdn.com/ajax/jquery.validate/1.11.1/jquery.validate.js"></script>
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
