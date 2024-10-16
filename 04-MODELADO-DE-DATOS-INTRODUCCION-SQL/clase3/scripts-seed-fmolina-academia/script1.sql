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
-- poblamos tabla profesor
insert into profesor (dni, id_asignatura)
select distinct ta.dni, a.id from tmp_academia ta 
inner join asignatura a on ta.asignatura = a.nombre
where ta.fecha_matriculacion = '';
-- poblamos tabla matricula
-- la fecha esta en formato varchar, no me da tiempo a corregirlo durante la clase
insert into matricula (dni, id_curso, fecha_matricula)
select distinct ta.dni, c.id, ta.fecha_matriculacion from tmp_academia ta
inner join curso c on ta.curso = c.nombre
where ta.fecha_matriculacion != '';
-- poblamos tabla evaluacion
--CUIDADO insert into evaluacion (id_matricula, nota, id_profesor)
select m.id, ta.nota, max(p.id) from tmp_academia ta
inner join matricula m on ta.dni = m.dni
inner join asignatura a on ta.asignatura = a.nombre
inner join profesor p on a.id = p.id_asignatura
where ta.nota is not null
group by m.id, ta.nota;

-- consultas
--miembros tanto alumnos como profesores
--left join todos los valores de la tabla principal y los de la secundaria que coinciden
select * from miembro m 
left join profesor p on m.dni = p.dni
left join matricula m2 on m.dni = m2.dni
where p.id is not null and m2.id is not null
order by m.dni;
--lo mismo con inner
select * from miembro m 
inner join profesor p on m.dni = p.dni
inner join matricula m2 on m.dni = m2.dni
order by m.dni;

--alumnos
select * from miembro m 
inner join matricula m2 on m.dni = m2.dni
order by m.dni;

--profesores
select * from miembro m 
inner join profesor p on m.dni = p.dni
order by m.dni;
/*
update miembro
set apellidos = concat(tmp_academia.apellido_1, ' ', tmp_academia.apellido_2)
from tmp_academia where miembro.dni = tmp_academia.dni;
 */