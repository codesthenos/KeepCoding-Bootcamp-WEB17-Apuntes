var Student = /** @class */ (function () {
    function Student(name, surnames, age, grade) {
        this.name = name;
        this.surnames = surnames;
        this.age = age;
        this.grade = grade;
    }
    Student.prototype.setDni = function (dni) {
        this.dni = dni;
    };
    Student.prototype.getDni = function () {
        return this.dni;
    };
    Object.defineProperty(Student.prototype, "fullname", {
        get: function () {
            return "".concat(this.name, " ").concat(this.surnames);
        },
        // setter NUNCA DEVUELVE NADA
        set: function (fullname) {
            this.name = fullname.split(' ')[0];
            this.surnames = fullname.split(' ')[1];
        },
        enumerable: false,
        configurable: true
    });
    return Student;
}());
var aida = new Student('Aida', 'Apellido', 29, 'KCWB');
console.log(aida.fullname);
aida.fullname = 'Aida';
console.log(aida.surnames);
var Product = /** @class */ (function () {
    function Product(price) {
        this._price = price * 100;
    }
    Object.defineProperty(Product.prototype, "price", {
        get: function () {
            return this._price / 100;
        },
        set: function (price) {
            this._price = price * 100;
        },
        enumerable: false,
        configurable: true
    });
    return Product;
}());
/* para que no apse esto usamos estos getter y setter con * 100 y / 100
const product1 = new Product(1.50)
product1.price += 1.50
// Puede dar 3,000001 en vez de 3
console.log(product1.price)
*/ 
