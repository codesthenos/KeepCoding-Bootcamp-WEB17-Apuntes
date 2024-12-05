var Student = /** @class */ (function () {
    function Student(init // Cualquier propiedad de IStudent
    // init: required<IStudent> // TODAS las propiedades de IStundent si o si incluso las ?: (propiedades opcionales)
    ) {
    }
    return Student;
}());
var Pedro = new Student({ name: 'Pedro' });
var Luis = new Student({ name: 'Luis' });
var Juan = new Student({ name: 'Juan' });
// Ejercicio: definir funcion que nos permita extraer propiedades de un objeto segun su tipo
/**
 * {
 *  nombre: 'Nauel',
 *  apellido: 'Gomez'
 * }
 */
// combinar generico con keyof muy util ver este ejemplo
function getData(item, key) {
    return item[key];
}
var estudiante1 = {
    dni: '09128t3a',
    name: 'Nauel',
    surname: 'Gomez',
    age: 33
};
var surname = getData(estudiante1, 'surname');
