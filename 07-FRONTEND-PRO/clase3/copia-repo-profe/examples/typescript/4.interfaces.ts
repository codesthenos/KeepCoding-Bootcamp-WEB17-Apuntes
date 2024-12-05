enum Brands {
    AUDI = 'Audi',
    SKODA = 'Skoda'
}

type Brand = 'Audi' | 'Skoda';

interface Car {
    brand: Brand;
    model: string;
    year?: number;
    start: () => void;
}

const audiA4Car: Car = {
    brand: 'Audi',
    model: 'A4',
    year: 2021,
    start: function() {
        console.log("Start");
    }
};

const audiA3Car: Car = {
    brand: 'Audi',
    model: 'A3',
    year: 2023,
    start: () => {
        console.log('Engine ON :)');
    }
};

let getCarBrand: (item: Car) => string = (item: Car) => {
    // return item.color; -> Devolveria un error, la propiedad color no existe en Car
    // return 'Hola desde getCarBrand'; // -> Es ok, devolvemos un string.
    console.log(`La marca es: ${item.brand}`);
    return `${item.brand}`;
}

getCarBrand({
    brand: 'Skoda',
    model: 'Fabia',
    start: () => {
        console.log("Start")
    }
});

