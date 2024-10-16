select provincia use_group_by from tmp_academia group by provincia;
select distinct provincia as use_distintic from tmp_academia;
-- poblamos tabla provincia
insert into provincia (provincia)
select distinct provincia as use_distintic from tmp_academia;
-- comprobacion
select * from provincia;
-- poblamos tabla poblacion
insert into poblacion (poblacion, id_provincia)
select distinct ta.poblacion, p.id from tmp_academia ta
inner join provincia p on p.provincia = ta.provincia
order by ta.poblacion;
-- comprobacion
select p.poblacion, p2.provincia from poblacion p
inner join provincia p2 on p.id_provincia = p2.id;
-- poblamos tabla miembro
insert into miembro (dni, fecha_nacimiento, nombre, apellidos)
select ta.dni,
	   cast(ta.fecha_nacimiento as date) fecha_nacimiento,
	   ta.nombre,
	   concat(ta.apellido_1, ' ', ta.apellido_2) apellidos	   
from tmp_academia ta
group by ta.dni, ta.nombre, ta.apellido_1, ta.apellido_2, ta.piso, ta.fecha_nacimiento;
-- poblamos tabla correspondencia
insert into correspondencia (dni, calle, numero, piso, id_poblacion)
select distinct
	   ta.dni,
	   ta.calle,
	   cast(split_part(ta.piso, ' ', 1) as integer) numero,
	   split_part(ta.piso, ' ', 2) piso,
	   p.id as id_poblacion
from tmp_academia ta
inner join poblacion p on ta.poblacion = p.poblacion;
-- poblamos tabla curso
insert into curso (nombre)
select ta.curso from tmp_academia ta
group by ta.curso;
-- poblamos tabla asignatura
insert into asignatura (nombre, id_curso)
select distinct ta.asignatura, c.id from tmp_academia ta
inner join curso c on ta.curso = c.nombre;
-- poblamos tabla evaluacion
-- poblamos tabla profesor
-- poblamos tabla matricula