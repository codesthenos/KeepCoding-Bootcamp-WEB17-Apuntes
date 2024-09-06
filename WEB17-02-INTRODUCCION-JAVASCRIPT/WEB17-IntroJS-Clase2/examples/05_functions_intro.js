document.querySelector('body').innerHTML = `
<h1 style='text-align: center';>05_functions_intro.js</h1>
`
// function declaration examples
function showMessage () {
  const discount = '50%'
  const message = `Oferta todo al ${discount}`
  console.log(message)
}

function sumCapTshirtPrice () {
  const tshirtPrice = 10
  const capPrice = 5
  const total = tshirtPrice + capPrice
  console.log(total)
}
// function call example
showMessage()
showMessage()
showMessage()
sumCapTshirtPrice()
