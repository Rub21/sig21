
<%@page contentType="text/html" pageEncoding="UTF-8"%>

<link rel="stylesheet" href="css/style_header.css" />
<link rel="stylesheet" href="../sites/css/style_header.css" />

<div class="navbar1">
    <div class="navbar navbar-fixed-top">
        <div class="navbar-inner">
            <div class="container">
                <a data-target=".nav-collapse" data-toggle="collapse" class="btn btn-navbar">
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </a>
                <a href="index.html" data-section="html" class="brand scroller">Descubre las Mejores alternativas Para Conocer Ayacucho</a>
                <div class="nav-collapse collapse">
                    <ul class="nav pull-right">
                        <!--<li>
                            <a  href="<%=request.getContextPath()%>/sites/indexde.jsp">Inicio</a>
                        </li>
                        -->
                        <li>
                            <a href="#sobrenos"  data-toggle="modal" >Sobre Nosotros</a>
                        </li>
                        <li>
                            <a href="#contactenos"  data-toggle="modal" >Contactenos</a>
                        </li>


                    </ul>
                </div>
            </div>
        </div>
    </div>

</div>
<div class="navbar2">

    <div class="navbar navbar-inverse navbar-fixed-top ">
        <div class="navbar-inner">        
            <ul class="nav pull-right" >

               <!-- <li class="active">
                    <a href="#" id="inicio"> <i class="icon-home icon-white"></i>
                        Inicio
                    </a>
                </li>-->
                <li class="dropdown">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown"> <i class="icon-ok icon-white"></i>
                        Donde ir <b class="caret"></b>
                    </a>
                    <ul class="dropdown-menu select_recurso">
                        <li>
                            <a href="#">Sitios Arqueológicos</a>
                        </li>
                        <li>
                            <a href="#" id="arquitecturacolonial">Arquitectura Colonial</a>
                        </li>
                        <li>
                            <a href="#">Sitios Historicos</a>
                        </li>
                        <li>
                            <a href="#">Cultura Viva</a>
                        </li>
                        <li>
                            <a href="#">Paisaje Natural</a>
                        </li>
                        <li class="divider"></li>
                        <li>
                            <a href="#">Todos</a>
                        </li>

                    </ul>
                </li>
                <li class="dropdown">
                    <a  href="#"  class="dropdown-toggle" data-toggle="dropdown">
                        <i class="icon-dormir"></i>
                        Donde Dormir <b class="caret"></b>
                    </a>
                    <ul class="dropdown-menu select_hotel">
                        <li>
                            <a href="#">Sin Categoria</a>
                        </li>
                        <li>
                            <a href="#">1 Estrella</a>
                        </li>
                        <li>
                            <a href="#">2 Estrellas</a>
                        </li>
                        <li>
                            <a href="#">3 Estrellas</a>
                        </li>
                        <li>
                            <a href="#">4 Estrellas</a>
                        </li>
                        <li class="divider"></li>
                        <li>
                            <a href="#">Todos</a>
                        </li>

                    </ul>

                </li>
                <li>
                    <a id='play' href="#">
                        <i class="icon-comer"></i>
                        Donde Comer
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i class="icon-transporte"></i>
                        Como Viajar
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i class="icon-comprar"></i>
                        Donde Comparar
                    </a>
                </li>
                <li>
                    <a href="#">Otros</a>
                </li>
                <li class="dropdown">
                    <a href="#"  class="dropdown-toggle" data-toggle="dropdown">
                        <i class="icon-corredor"></i>
                        Corredores Turisticos
                        <b class="caret"></b>
                    </a>
                    <ul class="dropdown-menu select_corredor">
                        <li>
                            <a   href="#">Corredor Wari-Chanka-Inca</a>
                        </li>
                        <li>
                            <a href="#">Corredor Nazca-Chanka-Inca</a>
                        </li>
                        <li>
                            <a href="#">Corredor Paracas-Huaytará-Ayacucho</a>
                        </li>
                        <li>
                            <a href="#">Ruta Puquio-Cora Cora-Sara Sara</a>
                        </li>
                        <li>
                            <a href="#">Ruta Huancapi-Carapo-Huancasancos</a>
                        </li>
                    </ul>
                </li>




            </ul>




        </div>

    </div>

</div>

<!--Sobre Nosotros-->

<div id="sobrenos" class="modal container hide fade" tabindex="-1">
    <div class="modal-header">   
        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
        <p>
            Somos una grupos de Estudiantes egresados que venimos  implementando una  
            aplicacion que pueda haciedno uso de maps , para mejorar hacer participe a todo ciudadanno en el Peru, mediante su
            registro de puntos criticos que por juicio son donde los gobiernos distritales, provinciales , regionales, y nacional deberis de intervenir
        </p>       
    </div>
    <div class="modal-body" >
    </div>
</div>


<!--End Sobre Nosotros-->


<!--contactenos-->

<div id="contactenos" class="modal container hide fade" tabindex="-1">
    <div class="modal-header">   
        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>

    </div>
    <div class="modal-body" >
    </div>
</div>
<!--End Sobre contactenos-->
