<%@page contentType="text/html" pageEncoding="UTF-8"%>

<div class="navbar1">

    <div class="navbar navbar-fixed-top">  
        <a href="index.jsp" class="brand">
            Ayacucho tu mejor alternativa!
        </a>
        <div class="navbar-inner">
            <div class="nav-collapse collapse">
                <ul class="nav pull-right" >               
                    <li class="dropdown">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown"> <i class="icon-ok icon-white"></i>
                            Donde ir <b class="caret"></b>
                        </a>
                        <ul class="dropdown-menu select_recurso">
                            <li>
                                <a class="select_recursos" href="index.jsp#sitiosarqueológicos">Sitios Arqueológicos</a>
                            </li>
                            <li>
                                <a class="select_recursos" href="index.jsp#arquitecturacolonial">Arquitectura Colonial</a>
                            </li>
                            <li>
                                <a class="select_recursos" href="index.jsp#sitioshistoricos">Sitios Historicos</a>
                            </li>
                            <li>
                                <a class="select_recursos" href="index.jsp#culturaviva">Cultura Viva</a>
                            </li>
                            <li>
                                <a class="select_recursos" href="index.jsp#paisajenatural">Paisaje Natural</a>
                            </li>
                            <li class="divider"></li>
                            <li>
                                <a class="select_recursos" href="index.jsp#todos">Todos</a>
                            </li>

                        </ul>
                    </li>
                    <li class="dropdown">
                        <a  href="#"  class="dropdown-toggle" data-toggle="dropdown">
                            <i class="icon-dormir"></i>
                            Donde Dormir <b class="caret"></b>
                        </a>
                        <ul class="dropdown-menu">
                            <li>
                                <a class="select_hoteles" id="sincategoria" href="hoteles.jsp#sincategoria">Sin Categoria</a>
                            </li>
                            <li>
                                <a class="select_hoteles" id="1estrella" href="hoteles.jsp#1estrella">1 Estrella</a>
                            </li>
                            <li>
                                <a class="select_hoteles" id="2estrellas" href="hoteles.jsp#2estrellas">2 Estrellas</a>
                            </li>
                            <li>
                                <a class="select_hoteles" id="3estrellas" href="hoteles.jsp#3estrellas">3 Estrellas</a>
                            </li>
                            <li>
                                <a class="select_hoteles" id="4estrellas" href="hoteles.jsp#4estrellas">4 Estrellas</a>
                            </li>
                            <li class="select_hoteles" class="divider"></li>
                            <li>
                                <a class="select_hoteles" id="todos" href="hoteles.jsp#todos">Todos</a>
                            </li>

                        </ul>

                    </li>
                    <li class="dropdown">
                        <a href="#"  class="dropdown-toggle" data-toggle="dropdown">
                            <i class="icon-comer"></i>
                            Donde Comer  <b class="caret"></b>
                        </a>       
                        <ul class="dropdown-menu">
                            <li>
                                <a class="select_restaurant" id="comidatípicaynacional" href="restaurants.jsp#comidatípicaynacional">Comida típica  y nacional</a>
                            </li>
                            <li>
                                <a class="select_restaurant" id="comidacacera" href="restaurants.jsp#comidacacera">Comida cacera</a>
                            </li>
                            <li>
                                <a class="select_restaurant" id="pollosalabrasayparrillas" href="restaurants.jsp#pollosalabrasayparrillas">Pollos a la brasa  y parrillas</a>
                            </li>
                            <li>
                                <a class="select_restaurant" id="comidavegetariana" href="restaurants.jsp#comidavegetariana">Comida vegetariana</a>
                            </li>
                            <li>
                                <a class="select_restaurant" id="desayunoylonches" href="restaurants.jsp#desayunoylonches">Desayuno y lonches</a>
                            </li>
                            <li class="select_restaurant" class="divider"></li>
                            <li>
                                <a class="select_restaurant" id="todos" href="restaurants.jsp#todos">Todos</a>
                            </li>

                        </ul>

                    </li>
                    <li>
                        <a href="transportes.jsp">
                            <i class="icon-transporte"></i>
                            Como Viajar
                        </a>
                    </li>
                    <li class="dropdown">
                        <a href="complementario.jsp" class="dropdown-toggle" data-toggle="dropdown">
                            <i class="icon-comprar"></i>
                            Otros Servicios<b class="caret"></b>
                        </a>
                        <ul class="dropdown-menu">
                            <li><a class="select_complementario" id="puntosdeinformaciónalturista" href="complementario.jsp#puntosdeinformaciónalturista"> Puntos de información al turista</a></li>
                            <li><a class="select_complementario" id="agenciasdeturismo" href="complementario.jsp#agenciasdeturismo"> Agencias de turismo</a></li>
                            <li><a class="select_complementario" id="comerciodeartesanías" href="complementario.jsp#comerciodeartesanías">Comercio de artesanías </a></li>
                            <li><a class="select_complementario" id="bar" href="complementario.jsp#bar">Bar</a></li>
                            <li><a class="select_complementario" id="farmacia" href="complementario.jsp#farmacia">Farmacia</a></li>
                            <li><a class="select_complementario" id="banco" href="complementario.jsp#banco">Banco</a></li>
                            <li><a class="select_complementario" id="galeriadearte" href="complementario.jsp#galeriadearte">Galeria de Arte</a></li>
                            <li><a class="select_complementario" id="policia" href="complementario.jsp#policia">Policia</a></li>
                            <li><a class="select_complementario" id="Serviciodesalud" href="complementario.jsp#Serviciodesalud">Servicios de Salud</a></li>
                            <li><a class="select_complementario" id="cabinasdeinternet" href="complementario.jsp#cabinasdeinternet">Cabinas de Internet</a></li>
                            <li class="select_restaurant" class="divider"></li>
                            <li>
                                <a class="select_restaurant" id="todos" href="complementario.jsp#todos">Todos</a>
                            </li>

                        </ul>
                    </li>






                    <!--
                    
                    

                    
                    
                    -->
                    <!-- <li class="dropdown">
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
                     </li>-->
                </ul>
            </div>

        </div>
    </div>

</div>
