enum Brands {
  AUDI = 'Audi',
  SKODA = 'Skoda'
}

type Brand = 'Audi' | 'Skoda'

interface Car {
  brand: Brands
  model: string
  year?: number
  start: () => void
}
const A4car: Car = {
  brand: Brands.AUDI,
  model: 'A4',
  year: 2021,
  start: function () {
    console.log('Start')
  }
}
const A3car: Car = {
  brand: Brands.AUDI,
  model: 'A3',
  year: 2020,
  start: () => {
    console.log('start arow')
  }
}

const getCarBrand: (item: Car) => Brands = (item: Car) => {
  return item.brand
}

interface Product {
  name: string
  price: number
  description: string
  category: string
}

const products: Product[] = [
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
]