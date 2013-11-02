
CREATE TABLE producto(
  idproducto varchar(10) NOT NULL  PRIMARY KEY ,
  nombre character(100),
  clase character(50),
  estado boolean not null,
  fecharegistro TIMESTAMP DEFAULT CURRENT_TIMESTAMP 
);
--RECURSO
CREATE TABLE recurso(
  idrecurso varchar(10) NOT NULL  PRIMARY KEY ,   
  categoria character(50),
  tipo character(100),
  descripcion TEXT,
  historia TEXT,
 -- fecha character(100),
  corredor character(50),
  distancia character(100),
  tipo_precio_ing character(100),
  horario_atencion character(100),
  temperatura character(100),
  altitud character(100),  
  video character(100),  
  como_llegar TEXT,
  idproducto varchar(10)
);

alter table recurso
add constraint fk_idproducto_recurso
Foreign key (idproducto)
references producto(idproducto);


CREATE TABLE recurso_transporte(
idrecurso varchar(10),
idtransporte varchar(10)
);

alter table recurso_transporte
add constraint fk_idrecurso_recurso_transporte
Foreign key (idrecurso)
references recurso(idrecurso);

--IMAGENES
create table imagen(
  url varchar(100),
  idproducto varchar(10)
);

alter table imagen
add constraint fk_idproducto_imagen
Foreign key (idproducto)
references producto(idproducto);

--GEOMETRY
create table geometry(
  lat numeric,
  lon numeric,  
  idproducto varchar(10)
);

alter table geometry
add constraint fk_idproducto_geometry
Foreign key (idproducto)
references producto(idproducto);

--SERVICIOS ADICIONALES
 CREATE TABLE servicion_adicional(
   tipo character varying(100),
   idproducto varchar(10)
);

alter table servicion_adicional
add constraint fk_idproducto_servicion_adicional
Foreign key (idproducto)
references producto(idproducto);

-- HOTEL
CREATE TABLE hotel(
  idhotel varchar(10) NOT NULL  PRIMARY KEY ,
  categoria character(50),
  descripcion text, 
  direccion character(100),   
  telefono character(50),
  sitio_web character(100),
  correo_elec character(100),
  tipo_precio_hab text,  
  formas_pago character(100),
  idproducto varchar(10)
);

alter table hotel
add constraint fk_idproducto_hotel
Foreign key (idproducto)
references producto(idproducto);

--Restaurant
CREATE TABLE restaurant(
  idrestaurant varchar(10) NOT NULL  PRIMARY KEY ,
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
  idproducto varchar(10)
);

alter table restaurant
add constraint fk_idproducto_restaurant
Foreign key (idproducto)
references producto(idproducto);

--transporte
CREATE  table transporte(
  idtransporte varchar(10) NOT NULL  PRIMARY KEY ,
  descripcion TEXT,
  direccion character(100),   
  tipo character(50),
  telefono character(50),
  sitio_web character(100),
  horario_atencion character(100),  
  horario_salida character(100), 
  destinos TEXT,
  idproducto varchar(10)
);

alter table transporte
add constraint fk_idproducto_transporte
Foreign key (idproducto)
references producto(idproducto);

alter table recurso_transporte
add constraint fk_idtransporte_recurso_transporte
Foreign key (idtransporte)
references transporte(idtransporte);

--complementario
CREATE  table complementario(
  idcomplementario varchar(10) NOT NULL  PRIMARY KEY ,
  tipo character(100),
  descripcion TEXT,
  direccion character(100),   
  telefono character(50),
  sitio_web character(100),
  horario_atencion character(100),  
  idproducto varchar(10)
);

alter table complementario
add constraint fk_idproducto_complementario
Foreign key (idproducto)
references producto(idproducto);

--usuario
CREATE TABLE usuario(
	idusuario  VARCHAR(10) NOT NULL PRIMARY KEY,
	nombre VARCHAR(80) ,
	apellidos VARCHAR(80) ,
	usuario varchar(20) NOT NULL unique,
	contrasenia text not null unique,	
	estado boolean not null,
	fecharegistro TIMESTAMP DEFAULT CURRENT_TIMESTAMP 
 );

INSERT INTO usuario(idusuario, nombre, apellidos, usuario, contrasenia, estado)
    VALUES ('1u','Ruben','Lopez Mendoza','Rub21','1234',true);
