var Brands;
(function (Brands) {
    Brands["AUDI"] = "Audi";
    Brands["SKODA"] = "Skoda";
})(Brands || (Brands = {}));
var A4car = {
    brand: Brands.AUDI,
    model: 'A4',
    year: 2021,
    start: function () {
        console.log('Start');
    }
};
var A3car = {
    brand: Brands.AUDI,
    model: 'A3',
    year: 2020,
    start: function () {
        console.log('start arow');
    }
};
var getCarBrand = function (item) {
    return item.brand;
};
var products = [
    {
        name: 'shirt',
        price: 22,
        description: 'shirt 22 dollar',
        category: 'clothes'
    },
    {
        name: 'moto',
        price: 22000,
        description: 'moto 22000 dollar',
        category: 'motor'
    },
    {
        name: 'football',
        price: 26,
        description: 'football 26 dollar',
        category: 'sports'
    }
];
