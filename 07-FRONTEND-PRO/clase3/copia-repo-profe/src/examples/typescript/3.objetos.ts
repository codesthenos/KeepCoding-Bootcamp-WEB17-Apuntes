const car: {
    brand: string;
    model: string;
    year?: number;
} = {
    brand: 'Audi',
    model: 'A4',
    year: 2021,
};

const brands: string[] = [
    'Toyota',
    'Audi',
    'Seat',
];

function getCarBrand(item: typeof car): string {
    return item.brand;
}

const brands2: Array<string> = brands;
const teslaModels: (string|number)[] = [];
let tataModels: unknown[] | undefined;

function getCarYear(car: { brand: string, model: string, year: number } ) {
    if (car.year < 2020) {
        return car.year;
    }
    return car.year.toFixed(2);
}

// let carYear: number;
// carYear = getCarYear({brand: 'Seat', model: 'Ibiza', year: 2021});



