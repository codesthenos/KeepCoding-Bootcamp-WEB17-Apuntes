'use strict'

const ingredients = ['sal', 'pimienta', 'conejo', 'gambas']

function echar (string) {
  return new Promise((resolve, reject) => {
    console.log('echo', string)
    resolve(string)
  })
}

const promisedTexts = ingredients.map(echar)

Promise.all(promisedTexts).then(arrayResultados => {
  console.log(arrayResultados)
})