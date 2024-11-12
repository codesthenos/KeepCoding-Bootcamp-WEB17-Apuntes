const appendChildExample = () => {
  const heading3 = document.createElement('h3')
  heading3.innerHTML = 'h3 incluido a traves de <code style="font-size: 1.5rem; display: block; margin-top: .5rem;">indexClase2.js</code>'
  const target = document.querySelector('div')
  target.appendChild(heading3)
}

const innerHTMLExample = () => {
  const newDiv = document.createElement('div')
  const date = new Date()

  newDiv.innerHTML = `
  <h2>Fecha actual</h2>
  <h3>${date.toLocaleDateString()}</h3>
  `

  const target = document.querySelector('div')
  target.appendChild(newDiv)
  /*
  target.innerHTML = `
  <div>
    <h2>Fecha actual</h2>
    <h3>${date.toLocaleDateString()}</h3>
  </div>
  `
  */
}

innerHTMLExample()
appendChildExample()