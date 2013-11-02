CREATE OR REPLACE FUNCTION insert_recurso(idproducto character(10),
				          nombre character(100),
				          clase character(50),
				          estado boolean,
					  idrecurso varchar(10) ,   
					  categoria character(50),
					  tipo character(100),
					  descripcion TEXT,
					  historia TEXT,
					  --fecha character(100),
					  corredor character(50),
					  distancia character(100),
					  tipo_precio_ing character(100),
					  horario_atencion character(100),
					  temperatura character(100),
					  altitud character(100),  
					  video character(100), 
					  como_llegar TEXT,          
				          lat numeric,
				          lon numeric)
RETURNS VOID
AS $$
DECLARE
        
BEGIN

	INSERT INTO producto(idproducto, nombre, clase, estado)
        VALUES (idproducto, nombre, clase, estado);                
        INSERT INTO recurso(idrecurso, categoria, tipo, descripcion, historia,  corredor, distancia, tipo_precio_ing, horario_atencion, temperatura, altitud, video, como_llegar, idproducto)
        VALUES (idrecurso, categoria, tipo, descripcion, historia, corredor, distancia, tipo_precio_ing, horario_atencion, temperatura, altitud, video, como_llegar, idproducto);
        INSERT INTO geometry(lat, lon, idproducto)
        VALUES (lat, lon, idproducto);	
END;
$$ LANGUAGE plpgsql;

CREATE OR REPLACE VIEW select_recurso AS
	SELECT p.idproducto, p.nombre, p.clase, p.estado,r.idrecurso, r.categoria, r.tipo, r.descripcion, r.historia, r.corredor, r.distancia, r.tipo_precio_ing, r.horario_atencion, r.temperatura, r.altitud, r.video, r.como_llegar,g.lat, g.lon
	FROM producto as p 
	left join recurso as r on  p.idproducto = r.idproducto
	left join geometry as g  on p.idproducto = g.idproducto		
	where p.clase='Recurso Turístico';


/******************
	HOTELES
******************/

CREATE OR REPLACE FUNCTION insert_hotel(idproducto character(10),
				          nombre character(100),
				          clase character(50),
					  estado boolean,
					  idhotel varchar(10),
					  categoria character(50),
					  descripcion text, 
					  direccion character(100),   
					  telefono character(50),
					  sitio_web character(100),
					  correo_elec character(100),
					  tipo_precio_hab text,  
					  formas_pago character(100),					  
					  lat numeric,
					  lon numeric
				           )
RETURNS VOID
AS $$
DECLARE        
BEGIN

	INSERT INTO producto(idproducto, nombre, clase, estado)
        VALUES (idproducto, nombre, clase, estado);  

	INSERT INTO hotel(idhotel, categoria, descripcion, direccion, telefono, sitio_web, 
            correo_elec, tipo_precio_hab, formas_pago, idproducto)
	VALUES (idhotel, categoria, descripcion, direccion, telefono, sitio_web, 
            correo_elec, tipo_precio_hab, formas_pago, idproducto);

        INSERT INTO geometry(lat, lon, idproducto)
        VALUES (lat, lon, idproducto);        
	--RETURN 'Insert a Hotel';	
END;
$$ LANGUAGE plpgsql;


CREATE OR REPLACE VIEW select_hotel AS
SELECT  p.idproducto, p.nombre, p.clase, p.estado, h.idhotel, h.categoria, h.descripcion, h.direccion, h.telefono, h.sitio_web,h.correo_elec, h.tipo_precio_hab, h.formas_pago ,g.lat, g.lon 
	FROM producto as p 
	left join geometry as g  on p.idproducto = g.idproducto
	left join hotel as h on  p.idproducto = h.idproducto
	where  p.clase='Hotel';

--SELECT * FROM select_hotel;



/************************
RESTAURANTS
*************************/

CREATE OR REPLACE FUNCTION insert_restaurant(idproducto character(10),
				          nombre character(100),
				          clase character(50),
				          estado boolean,				          
					  idrestaurant varchar(10),
					  categoria character(20),
					  tipo character(40),
					  descripcion TEXT,
					  direccion character(100),   
					  telefono character(50),
					  sitio_web character(100),
					  horario_atencion character(100),  
					  especialidad character(100),
					  precio_promedio character(100),
					  formas_pago character(100),					
					  lat numeric,
					  lon numeric
				           )
RETURNS VOID
AS $$
DECLARE        
BEGIN

	INSERT INTO producto(idproducto, nombre, clase, estado)
        VALUES (idproducto, nombre, clase, estado);
        
        INSERT INTO restaurant(idrestaurant, categoria, tipo, descripcion, direccion, telefono,sitio_web, horario_atencion, especialidad, precio_promedio, formas_pago,idproducto)
         VALUES(idrestaurant, categoria, tipo, descripcion, direccion, telefono,sitio_web, horario_atencion, especialidad, precio_promedio, formas_pago,idproducto);

        INSERT INTO geometry(lat, lon, idproducto)
        VALUES (lat, lon, idproducto);
	--RETURN 'Insert a Restaurant';	
END;
$$ LANGUAGE plpgsql;


CREATE OR REPLACE VIEW select_restaurant AS
	SELECT p.idproducto, p.nombre, p.clase, p.estado,re.idrestaurant, re.categoria, re.tipo, re.descripcion, re.direccion, re.telefono, re.sitio_web, re.horario_atencion, re.especialidad, re.precio_promedio, re.formas_pago,g.lat, g.lon
	FROM producto as p 
	left join geometry as g  on p.idproducto = g.idproducto
	left join restaurant as re on  p.idproducto = re.idproducto
	where  p.clase='Restaurant';


/***********************
TRANSPORTE
************************/
CREATE OR REPLACE FUNCTION insert_transporte(idproducto character(10),
				          nombre character(100),
				          clase character(50),
				          estado boolean,
					  idtransporte varchar(10),
					  descripcion TEXT,
					  tipo character(50),
					  direccion character(100),   
					  telefono character(50),
					  sitio_web character(100),
					  horario_atencion character(100),  
					  horario_salida character(100), 
					  destinos TEXT,								  
					  --idproducto character(10),
					  lat numeric,
					  lon numeric
				           )
RETURNS VOID
AS $$
DECLARE
        
BEGIN

	INSERT INTO producto(idproducto, nombre, clase, estado)
        VALUES (idproducto, nombre, clase, estado);       
        INSERT INTO transporte(idtransporte, descripcion,tipo, direccion, telefono, sitio_web, horario_atencion,horario_salida, destinos, idproducto)
        VALUES (idtransporte, descripcion,tipo, direccion, telefono, sitio_web, horario_atencion,horario_salida, destinos, idproducto);
        INSERT INTO geometry(lat, lon, idproducto)
        VALUES (lat, lon, idproducto);
	--RETURN 'Insert a Transporte';	
END;
$$ LANGUAGE plpgsql;


CREATE OR REPLACE VIEW select_transporte AS
	SELECT p.idproducto, p.nombre, p.clase, p.estado,t.idtransporte, t.descripcion, t.tipo,t.direccion, t.telefono, t.sitio_web, t.horario_atencion, t.horario_salida, t.destinos,g.lat, g.lon
	FROM producto as p 
	left join geometry as g  on p.idproducto = g.idproducto
	left join transporte as t on  p.idproducto = t.idproducto
	where  p.clase='Transporte';
	
--SELECT * FROM select_transporte;



/*******************
COMPLEMENTARIO
*******************/
CREATE OR REPLACE FUNCTION insert_complementario(idproducto character(10),
				          nombre character(100),
				          clase character(50),
				          estado boolean,
					  idcomplementario varchar(10),
					  tipo character(100),
					  descripcion TEXT,
					  direccion character(100),   
					  telefono character(50),
					  sitio_web character(100),
					  horario_atencion character(100),  
					  --idproducto varchar(10),
					  lat numeric,
					  lon numeric
				           )
RETURNS character(50)
AS $$
DECLARE
        
BEGIN

	INSERT INTO producto(idproducto, nombre, clase, estado)
        VALUES (idproducto, nombre, clase, estado);
        
INSERT INTO complementario(idcomplementario, tipo, descripcion, direccion, telefono, sitio_web,horario_atencion, idproducto)
    VALUES (idcomplementario, tipo, descripcion, direccion, telefono, sitio_web,horario_atencion, idproducto);

        INSERT INTO geometry(lat, lon, idproducto)
        VALUES (lat, lon, idproducto);
	RETURN 'Insert a complementario';	
END;
$$ LANGUAGE plpgsql;


CREATE OR REPLACE VIEW select_complementario AS
	SELECT p.idproducto, p.nombre, p.clase, p.estado,c.idcomplementario, c.tipo,c.descripcion, c.direccion, c.telefono, c.sitio_web ,c.horario_atencion,g.lat, g.lon
	FROM producto as p 
	left join geometry as g  on p.idproducto = g.idproducto
	left join complementario as c on  p.idproducto = c.idproducto
	where  p.clase='Complementario';
	
--SELECT * FROM select_complementario;
