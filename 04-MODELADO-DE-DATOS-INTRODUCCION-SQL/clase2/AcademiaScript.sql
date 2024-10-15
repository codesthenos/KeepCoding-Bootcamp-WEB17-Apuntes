create schema if not exists gruiz;

set schema 'gruiz';

drop table correspondencia;
drop table poblacion;
drop table provincia;
drop table miembro;

create table if not exists provincia (
	id serial primary key,
	provincia varchar(30) not null
);

create table if not exists poblacion (
	id serial primary key,
	poblacion varchar(50) not null,
	id_provincia int not null,
	constraint provincia_poblacion_fk foreign key (id_provincia) references provincia(id)
);

create table if not exists correspondencia (
	dni_miembro varchar(9) primary key,
	id_poblacion int not null,
	calle varchar(50) not null,
	numero smallint,
	piso varchar(10)
);

create table if not exists miembro (
	dni varchar(9) primary key,
	nombre varchar(30) not null,
	apellidos varchar(70) not null,
	fecha_nacimiento date not null
);

alter table correspondencia
add constraint miembro_correspondencia_fk
foreign key (dni_miembro) references miembro(dni);
alter table correspondencia
add constraint poblacion_correspondencia_fk
foreign key (id_poblacion) references poblacion(id);

