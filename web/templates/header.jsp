<%@page contentType="text/html" pageEncoding="UTF-8"%>

<div class="navbar1">

    <div class="navbar navbar-fixed-top">  
        <a href="index.jsp" class="brand">
            Ayacucho tu mejor alternativa
            
        </a>
        <div class="navbar-inner">
            <div class="nav-collapse collapse">
                <ul class="nav pull-right" >               
                    <li class="dropdown">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown"> <i class="icon-ok icon-white"></i>
                            Dónde ir <b class="caret"></b>
                        </a>
                        <ul class="dropdown-menu select_recurso">
                            <li>
                                <a class="select_recursos" id="sitiosarqueológicos" href="index.jsp#sitiosarqueológicos">Sitios Arqueológicos</a>
                            </li>
                            <li>
                                <a class="select_recursos" id="arquitecturacolonial" href="index.jsp#arquitecturacolonial">Arquitectura Colonial</a>
                            </li>
                            <li>
                                <a class="select_recursos" id="sitioshistoricos" href="index.jsp#sitioshistoricos">Sitios Historicos</a>
                            </li>
                            <!--<li>
                                <a class="select_recursos" id="culturaviva"  href="index.jsp#culturaviva">Cultura Viva</a>
                            </li>-->
                            <li>
                                <a class="select_recursos" id="paisajenatural" href="index.jsp#paisajenatural">Paisaje Natural</a>
                            </li>
                            <li class="divider"></li>
                            <li>
                                <a class="select_recursos" id="todos" href="index.jsp#todos">Todos</a>
                            </li>             

                        </ul>
                    </li>
                    <li class="dropdown">
                        <a  href="#"  class="dropdown-toggle" data-toggle="dropdown">
                            <i class="icon-dormir"></i>
                            Dónde dormir <b class="caret"></b>
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
                            <li class="divider"></li>
                            <li>
                                <a class="select_hoteles" id="todos" href="hoteles.jsp#todos">Todos</a>
                            </li>

                        </ul>

                    </li>
                    <li class="dropdown">
                        <a href="#"  class="dropdown-toggle" data-toggle="dropdown">
                            <i class="icon-comer"></i>
                            Dónde comer  <b class="caret"></b>
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
                            <li class="divider"></li>
                            <li>
                                <a class="select_restaurant" id="todos" href="restaurants.jsp#todos">Todos</a>
                            </li>

                        </ul>

                    </li>
                    <li class="dropdown">
                        <a href="transportes.jsp" class="dropdown-toggle" data-toggle="dropdown">
                            <i class="icon-transporte"></i>
                            Cómo viajar<b class="caret"></b>
                        </a>
                        <ul class="dropdown-menu">

                            <li><a class="select_transporte" id="interdepartamental" href="transportes.jsp#interdepartamental">Interdepartamental</a></li>
                            <li><a class="select_transporte" id="interprovincial" href="transportes.jsp#interprovincial">Interprovincial</a></li>
                            <li><a class="select_transporte" id="interdistrital" href="transportes.jsp#interdistrital">Interdistrital</a></li>
                            <li  class="divider"></li>
                            <li>
                                <a class="select_transporte" id="todos" href="transportes.jsp#todos">Todos</a>
                            </li>



                        </ul>
                    </li>
                    <li class="dropdown">
                        <a href="complementario.jsp" class="dropdown-toggle" data-toggle="dropdown">
                            <i class="icon-comprar"></i>
                            Otros servicios<b class="caret"></b>
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
                            <li><a class="select_complementario" id="serviciodesalud" href="complementario.jsp#serviciodesalud">Servicios de Salud</a></li>
                            <li><a class="select_complementario" id="cabinasdeinternet" href="complementario.jsp#cabinasdeinternet">Cabinas de Internet</a></li>
                            <li  class="divider"></li>
                            <li>
                                <a class="select_complementario" id="todos" href="complementario.jsp#todos">Todos</a>
                            </li>
                        </ul>
                    </li>
                    <li class="dropdown">
                        <a href="#"  class="dropdown-toggle" data-toggle="dropdown">
                            <i class="icon-corredor"></i>
                            Corredores turisticos
                            <b class="caret"></b>
                        </a>
                        <ul class="dropdown-menu select_corredores">
                            <li>
                                <a  class="select_corredor" id="CorredorWari-Chanka-Inca"href="index.jsp#CorredorWari-Chanka-Inca">Corredor Wari-Chanka-Inca</a>
                            </li>
                            <li>
                                <a  class="select_corredor" id="CorredorNazca-Chanka-Inca" href="index.jsp#CorredorNazca-Chanka-Inca">Corredor Nazca-Chanka-Inca</a>
                            </li>
                            <li>
                                <a  class="select_corredor" id="CorredorParacas-Huaytará-Ayacucho"href="index.jsp#CorredorParacas-Huaytará-Ayacucho">Corredor Paracas-Huaytará-Ayacucho</a>
                            </li>
                            <li>
                                <a  class="select_corredor" id="RutaPuquio-CoraCora-SaraSara" href="index.jsp#RutaPuquio-CoraCora-SaraSara">Ruta Puquio-Cora Cora-Sara Sara</a>
                            </li>
                            <li>
                                <a  class="select_corredor" id="RutaHuancapi-Carapo-Huancasancos" href="index.jsp#RutaHuancapi-Carapo-Huancasancos">Ruta Huancapi-Carapo-Huancasancos</a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>

        </div>
    </div>

</div>
