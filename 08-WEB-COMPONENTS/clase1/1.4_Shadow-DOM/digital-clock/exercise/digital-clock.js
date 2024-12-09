/*
  1- Create a digital-clock component using shadow DOM.
  2- Each second, we must calculate the time and update the component HTML
  3- Maybe we should use custom-properties...
*/

const template = document.createElement('template')

template.innerHTML = `
  <style>
    h2 {
      color: var(--digital-clock-color, greenyellow);
    }
  </style>
  <div class="digital-clock-container">
    <h2></h2>
  </div>
`

class DigitalClock extends HTMLElement {
  constructor () {
    super()
    // SHADOW DOM AL COMPONENTE
    this.attachShadow({ mode: 'open' })
  }
  connectedCallback () {
    const clonedTemplate = template.content.cloneNode(true)

    this.shadowRoot.appendChild(clonedTemplate)
    
    setInterval(() => {
      this.shadowRoot.querySelector('h2').textContent = this.getTime()
    }, 1000)
  }
  getTime () {
    const date = new Date()
    const hours = date.getHours()
    const minutes = date.getMinutes()
    const seconds = date.getSeconds()

    return `${hours}:${minutes}:${seconds}`
  }
}
window.customElements.define('digital-clock', DigitalClock)

const digitalClock = new DigitalClock()