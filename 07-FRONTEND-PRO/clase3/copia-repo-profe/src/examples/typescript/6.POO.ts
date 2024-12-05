// Creando app para universidad

interface IPerson {
    dni: string;
    setDni: (dni: string) => void;
    getDni: () => string;
}

interface IStudent {
    name: string;
    surnames: string;
    age: number;
    grade: string;
}

class Student implements IStudent, IPerson {
    name: string;
    surnames: string;
    age: number;
    grade: string;
    dni: string;
    constructor(
        name: string,
        surnames: string,
        age: number,
        grade: string,
    ) {
        this.name = name;
        this.surnames = surnames;
        this.age = age;
        this.grade = grade;
    }

    setDni(dni: string) {
        this.dni = dni;
    }

    getDni() {
        return this.dni;
    }

    get fullname(): string {
        console.log("Getter llamado");
        return `${this.name} ${this.surnames}`;
    }

    set fullname(fullname: string) {
        this.name = fullname.split(' ')[0];
        this.surnames = fullname.split(' ')[1];
    }

};

const aida = new Student(
    'Aida',
    'Apellido',
    29,
    'KCWB'
)

console.log(aida.fullname);
aida.fullname = 'Aida';
console.log(aida.surnames);


// Ejemplo de utilización de getters y setters
class Product {
    private _price: number; // --> 1,50 -> 1,50 -------> 3,00000001
    constructor(
        price: number,
    ) {
        this._price = price * 100;
    }

    // Devolvemos el precio en la unidad legible (euros decimales)
    get price(): number {
        return this._price / 100;
    }
    // Nos guardamos el precio en la unidad minima (céntimos enteros)
    set price(price: number) {
        this._price = price * 100;
    }
}

const product1 = new Product(1.50);
product1.price += 1.50;
console.log(product1.price);