interface IPerson {
    dni: string;
}

interface IStudent extends IPerson {
    id?: string;
    name: string;
    surnames: string;
    age: number;
    grade?: string;
}

class Student implements IStudent {

    name: string;
    surnames: string;
    age: number;
    grade: string;

    constructor(
        // init: Partial<IStudent> // ---> Con partial podemos utilizar la interfaz de manera parcial
        // init: Required<IStudent> // -> TODAS las propiedades son obligatorias.
        init: IStudent,
    ) {
        const grade = init.grade;
    }
}

// const pedro = new Student({
//     name: 'Pedro',
//     surnames: 'Lopez',
//     age: 10
// });

// const luis = new Student({
//     name: 'Luis',
//     age: 20
// })


// Ejercicio: Define una función que nos permita extraer propiedades de un objeto segun su tipo.
/**
 * {
 *  nombre: 'Nauel',
 *  apellido: 'Gómez'
 * }
 */

function getData<T>(item: T, key: keyof T) {
    return item[key];
}

const estudiante1: IStudent = {
    dni: '12345678A',
    name: 'Nauel',
    surnames: 'Gómez',
    age: 33,
}

const surnames = getData<IStudent>(estudiante1, 'grade');



