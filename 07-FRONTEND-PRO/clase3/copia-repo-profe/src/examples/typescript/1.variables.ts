// Variables
let outText = "Hola Mundo from typescript :)"
const age: number = 23;
const tel: number | string = '+34601001001';
const response: unknown = {};
const request: any = {};

// Typescript es un lenguaje de tipo estricto.
// Infiere los tipos iniciales y asume que siempre sera del mismo tipo.
// outText = 1; // -> error.
console.log(outText);