
<%@page contentType="text/html" pageEncoding="UTF-8"%>

<div class="content_user">
    <p style="color: #000"> Bienvenido : ${user}</p>

    <p><a href="${pageContext.request.contextPath}/SCerrarsesion">Cerrar Sesion</a></p>
</div>

<div class="masthead">
    <a href="#" onClick="location.href = 'registrar.jsp'"> <h3 class="muted">  Registra Poducto Turístico</h3></a>
    <div class="navbar">
        <div class="navbar-inner">
            <div class="container">
                <ul class="nav">

                    <li><a href = "${pageContext.request.contextPath}/Siniciar_medios_trasporte">Recurso turístico</a></li>
                    <li class="dropdown">
                        <a data-toggle="dropdown" class="dropdown-toggle" href="#">Planta Turistica<b class="caret"></b></a>
                        <ul class="dropdown-menu">
                            <li><a href="#" onClick="location.href = 'hotel.jsp'">Hotel</a></li>
                            <li><a href="#" onClick="location.href = 'restaurant.jsp'">Restaurante</a></li>
                        </ul>
                    </li>
                    <li><a href="#" onClick="location.href = 'transporte.jsp'">Medios de Transporte</a></li>
                    <li><a href="#" onClick="location.href = 'complementario.jsp'">Servicios Coplementarios</a></li>


                </ul>
            </div>
        </div>
    </div><!-- /.navbar -->
</div>

