document.querySelector('body').innerHTML = `
<h1 style='text-align: center';>04_strings.js</h1>
`

const username = '  Guille     '
const password = ' 1234   '
let authenticated = false

const sanitizedUsername = username.trim()

if (sanitizedUsername === 'Guille' && password.trim() === '1234') {
  authenticated = true
}

console.log(`Is ${sanitizedUsername} authenticated: ${authenticated}`)

document.querySelector('body').innerHTML = `
<h1 style='text-align: center';>Is ${sanitizedUsername} authenticated: ${authenticated}</h1>
`