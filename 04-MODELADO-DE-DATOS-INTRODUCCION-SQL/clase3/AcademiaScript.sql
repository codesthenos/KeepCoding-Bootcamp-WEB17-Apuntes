create schema if not exists gruiz_academia;

set schema 'gruiz_academia';
/*
drop table if exists correspondencia;
drop table if exists poblacion;
drop table if exists provincia;
drop table if exists email;
drop table if exists telefono;
drop table if exists evaluacion;
drop table if exists matricula;
drop table if exists profesor;
drop table if exists asignatura;
drop table if exists curso;
drop table if exists miembro;
*/
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

create unique index index_nombre_provincia on provincia (lower(provincia));

create table if not exists email (
	email varchar(50) primary key,
	dni_miembro varchar(9) not null,
	constraint miembro_email_fk foreign key (dni_miembro) references miembro(dni)
);

create table if not exists telefono (
	telefono smallint primary key,
	dni_miembro varchar(9) not null,
	constraint miembro_telefono_fk foreign key (dni_miembro) references miembro(dni)
);

create table if not exists matricula (
	id serial primary key,
	dni_miembro varchar(9) not null,
	id_curso smallint not null,
	fecha_matricula date not null,
	constraint miembro_matricula_fk foreign key (dni_miembro) references miembro(dni)
);

create table if not exists profesor (
	id serial primary key,
	dni_miembro varchar(9) not null,
	id_asignatura smallint not null,
	constraint miembro_profesor_fk foreign key (dni_miembro) references miembro(dni)
);

create table if not exists curso (
	id serial primary key,
	nombre varchar(30) not null
);

create table if not exists evaluacion (
	id serial primary key,
	apto boolean not null,
	id_matricula smallint not null,
	id_profesor smallint not null
);

create table if not exists asignatura (
	id serial primary key,
	nombre varchar(30) not null,
	id_curso smallint not null
);

alter table matricula
add constraint curso_matricula_fk
foreign key (id_curso) references curso(id);

alter table asignatura
add constraint curso_asignatura_fk
foreign key (id_curso) references curso(id);

alter table evaluacion
add constraint matricula_evaluacion_fk
foreign key (id_matricula) references matricula(id);

alter table evaluacion
add constraint profesor_evaluacion_fk
foreign key (id_profesor) references profesor(id);

alter table profesor
add constraint asignatura_profesor_fk
foreign key (id_asignatura) references asignatura(id);