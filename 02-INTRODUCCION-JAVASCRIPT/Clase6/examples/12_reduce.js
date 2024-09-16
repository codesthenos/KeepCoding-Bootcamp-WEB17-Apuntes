// Array.reduce((acumulador, elemento) => accumulador + Operacion(elemento), VALOR_INICIAL=0)

// recibe dos parametros, el acumulador y los elementos del Array uno a uno, ademas del return
// tenemos que incluir un parametro mas, ponemos ',' y un VALOR_INCIAL

// example of adding all element of an Array
const INITIAL_VALUE = 0
Array.reduce((accumulator, element) => accumulator + element, INITIAL_VALUE)