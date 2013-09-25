<%@ page pageEncoding="ISO-8859-1" %>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>

<%      String usuario = (String) session.getAttribute("user");
    if (usuario == null) {
        response.sendRedirect("login.jsp");
    }

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
                <form name="form" id="form-r" method="post"  action="<%=request.getContextPath()%>/SRegistrarRecurso" enctype="multipart/form-data" >
                <div class="container">
                    <div class="row">                  
                        <div class="well span8" align="center">
                            <h4> Registrar recurso tur�stico</h4>
                            <div class="container-fluid">
                                <div class="row-fluid">
                                    <div class="span4">Nombre<spam class="required">*</spam></div>
                                    <div class="span8">
                                        <input type='text'  name='nombre' value=''  align="left" id='nombre-r' placeholder="" />
                                    </div>
                                </div>
                                <div class="row-fluid">
                                    <div class="span4">Categoria<spam class="required">*</spam></div>
                                    <div class="span8">
                                        <select name='categoria' id='categoria-r' align="left" >
                                            <option value='Sitios Arqueol�gicos'>Sitios Arqueol�gicos</option>
                                            <option value='Arquitectura Colonial'>Arquitectura Colonial</option>
                                            <option value='Sitios Historicos'>Sitios Historicos</option>
                                            <!-- <option value='Cultura Viva'>Cultura Viva</option>-->
                                            <option value='Paisaje Natural'>Paisaje Natural</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="row-fluid">
                                    <div class="span4">Tipo<spam class="required">*</spam></div>
                                    <div class="span8">
                                        <select name='tipo' id='tipo-r'  align="left">
                                            <option value='Conjunto Arqueol�gico'>Conjunto Arqueol�gico</option>
                                            <option value='Sitio Arqueol�gico'>Sitio Arqueol�gico</option>
                                            <option value='Camino'>Camino</option>
                                            <option value='Andenes'>Andenes</option>
                                            <option value='Sistema de Riego'>Sistema de Riego</option>      
                                        </select>
                                    </div>                             
                                </div>
                                <div class="row-fluid">
                                    <div class="span4">Descripci�n<spam class="required">*</spam></div>
                                    <div class="span8">
                                        <textarea  name='descripcion'  rows='5' cols='75' id='descripcion-r' align="left"></textarea>
                                    </div>
                                </div>
                                <div class="row-fluid">
                                    <div class="span4">Historia</div>
                                    <div class="span8">
                                        <textarea  name='historia'  rows='5' cols='75' id='historia-r' align="left"></textarea>
                                    </div>
                                </div>
                            </div>   
                        </div>
                    </div>
                </div>
                <div class="container">                         
                    <div class="row">                       
                        <div class="well span8" align="center">
                            <h4>Detalles del recurso</h4>
                            <div class="container-fluid">
                                <div class="row-fluid corredor">
                                    <div class="span4">Corredor  al que pertenece</div>
                                    <div class="span8">
                                        <select name='corredor' id='corredor-r'required  align="left">
                                            <option value='Ninguno'>Ninguno</option>
                                            <option value='Corredor Wari-Chanka-Inca'>Corredor Wari-Chanka-Inca</option>
                                            <option value='Corredor Nazca-Chanka-Inca'>Corredor Nazca-Chanka-Inca</option>
                                            <option value='Corredor Paracas-Huaytar�-Ayacucho'>Corredor Paracas-Huaytar�-Ayacucho</option>
                                            <option value='Ruta Puquio-Cora Cora-Sara Sara'>Ruta Puquio-Cora Cora-Sara Sara</option>
                                            <option value='Ruta Huancapi-Carapo-Huancasancos'>Ruta Huancapi-Carapo-Huancasancos</option>      
                                        </select>
                                    </div> 
                                </div>


                                <!--  <div class="row-fluid fecha" style="display:none">
                                      <div class="span4">Fecha del evento <span class="obligatorio">*</span></div>
                                      <div class="span8"> 
                                          <input type="text" name="fecha" value=""  id="fecha"  placeholder="" >
                                      </div>
                                  </div>-->

                                <div class="row-fluid">
                                    <div class="span4" id="direcion_recurso">Distancia al recurso</div>
                                    <div class="span8">
                                        <input type='text' name='distancia' value='' id='distancia-r' align="left" placeholder='' />
                                    </div>
                                </div>
                                <div class="row-fluid costo_de_ingreso">
                                    <div class="span4">Tipo y precio de ingreso</div>
                                    <div class="span8">
                                        <input type='text' name='costo_de_ingreso' value='' id='costo_de_ingreso-r' align="left" placeholder='' />
                                    </div>
                                </div>
                                <div class="row-fluid horario_de_atencion">
                                    <div class="span4">Horario de atenci�n</div>
                                    <div class="span8">
                                        <input type='text' name='horario_de_atencion' value='' id='horario_de_atencion-r' align="left" placeholder='' />
                                    </div>
                                </div>

                                <div class="row-fluid">
                                    <div class="span4">Temperatura m�x. y m�n.</div>
                                    <div class="span8">
                                        <input type='text' name='temperatura' value='' id='temperatura-r' align="left" placeholder='' />
                                    </div>
                                </div>
                                <div class="row-fluid">
                                    <div class="span4">Altitud</div>
                                    <div class="span8">
                                        <input type='text' name='altitud' value='' id='altitud-r' align="left" placeholder='' />
                                    </div>
                                </div>   

                                <div class="row-fluid">
                                    <div class="span4">URL del video</div>
                                    <div class="span8">
                                        <input type='text' name='video' value='' id='video-r' align="left" placeholder='Ingrese URL de Youtube' />
                                    </div>
                                </div>   

                            </div>
                        </div>
                    </div>                       
                </div> 
                <div class="container">                         
                    <div class="row">                       
                        <div class="well span8" align="center">
                            <h4>Como llegar al recurso tur�stico</h4>
                            <div class="container-fluid">                          
                                <div class="row-fluid">
                                    <div class="span4">Como llegar<spam class="required">*</spam></div>
                                    <div class="span8">
                                        <textarea  name='como_llegar'  rows='4' cols='75' id='como_llegar-r' align="left"></textarea>
                                    </div>
                                </div>
                            </div>
                           <div class="accordion" id="accordion_transporte">
                                <div class="accordion-group">
                                    <div class="accordion-reeading">
                                        <a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion3" href="#collapse_transporte" >
                                            Buscar en Medios de trasporte Registrados que llegen a este punto
                                        </a>
                                    </div>
                                    <div id="collapse_transporte" class="accordion-body collapse">
                                        <div class="row">                                           
                                            <div class="span2_ru">
                                                <select name="origen" id="origen" multiple="multiple" size="15" style="width: 225px">
                                                    <c:forEach var="l" items="${list}">                                                        
                                                        <option value="${l.idtransporte}">${l.nombre}</option>                                                        
                                                    </c:forEach>                                                   
                                                </select>
                                            </div>
                                            <div class="span2_ru">
                                                <a  href="#pasar" class="pasar izq btn" >Pasar �</a><br/>
                                                <a   href="#quitar" class="quitar der btn" >� Quitar</a><br/>
                                                <a   href="#pasartodos"  class="pasartodos izq btn" >Pasar Todos �</a><br/>
                                                <a   href="#quitartodos"  class="quitartodos der btn" >� Quitar Todos</a><br/>
                                            </div>
                                            <div class="span2_ru">    
                                                <select name="destino" id="destino" multiple="multiple" size="15" style="width: 225px">

                                                </select>

                                            </div>
                                            <div id="selected">
                                                <input type='text' name='num_selected' value='0'/>
                                            </div>
                                        </div>
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
                    <div class="accordion" id="accordion_mapa">
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
                            <h4>Galer�a de im�genes</h4>        
                            <div class='well file_upload' id='f1'>
                                <input name='file1' type='file' id='file_img1'/>
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
                    <button type="submit" class="btn btn-primary" id="button">  Registrar</button>
                    <a class="btn" id="clear" href="#" onClick="location.href = 'registrar.jsp'">Cancelar</a>
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
    <script src="js/jquery.ptTimeSelect.js"></script>

    <script src='js/fun_map.js' ></script>
    <script src='js/app.js' ></script>
    <script src='js/form_recurso.js' ></script>
    <script src='js/form_hotel.js' ></script>
    <script src='js/form_restaurant.js' ></script>
    <script src='js/form_transporte.js' ></script>
    <script src='js/form_validate.js' ></script>

</html>




