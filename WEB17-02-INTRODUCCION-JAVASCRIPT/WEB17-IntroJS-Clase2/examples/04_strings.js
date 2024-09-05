document.querySelector('body').innerHTML = `
<h1 style='text-align: center';>04_strings.js</h1>
`

const username = '  GuilLE     '
const password = ' 1234   '
let authenticated = false

const sanitizedUsername = username.trim().toLowerCase()

if (sanitizedUsername === 'guille' && password.trim() === '1234') {
  authenticated = true
}

console.log(`Is ${sanitizedUsername} authenticated: ${authenticated}`)

document.querySelector('body').innerHTML = `
<h1 style='text-align: center';>Is ${sanitizedUsername} authenticated: ${authenticated}</h1>
`

const email = '  test@test.com  '

const moddedEmail = email.toLowerCase().trim()

const moddedEmail1 = moddedEmail.includes('@test.com')

const moddedEmail2 = moddedEmail.replace('test', '****')

const moddedEmail3 = moddedEmail.replaceAll('test', '****')

console.log(moddedEmail1)
console.log(moddedEmail2)
console.log(moddedEmail3)