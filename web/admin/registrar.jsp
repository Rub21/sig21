<%@page contentType="text/html" pageEncoding="UTF-8"%>
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
            <!-- Jumbotron -->
            <div class="jumbotron">  
                <h2>Ayacucho la mejor alternativa en Turismo!</h2>
                <p class="lead">Sitio para registrar  el producto  turístico de la Región de Ayacucho, </p>
                <a class="btn btn-large btn-success" href="../index.jsp">Visualizar Puntos Registrados</a>
            </div>

            <hr>

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
