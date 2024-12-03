const car: {
  brand: string,
  model: string,
  year?: number
} = {
  brand: 'Audi',
  model: 'A4',
  year: 2021
}

const brands: string[] = [
  'Toyota',
  'Audi',
  'Seat'
]

const brands2: Array<string> = brands

const models: (string[]|number)[] = []

const models2: unknown[] = []

const models3: Array<string|number> = []

function getCarYear (car: { brand: string, mode: string, year: number }): number {
  return car.year
}