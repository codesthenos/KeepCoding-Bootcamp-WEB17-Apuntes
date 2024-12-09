/*
  1- Create a digital-clock component using shadow DOM.
  2- Each second, we must calculate the time and update the component HTML
  3- Maybe we should use custom-properties...
*/
class DigitalClock extends HTMLElement {
  constructor () {
    super()
  }
  connectedCallback () {
    setInterval(() => {
      this.innerHTML = this.getTime()
    }, 1000)
  }
  getTime () {
    const date = new Date()
    const hours = date.getHours()
    const minutes = date.getMinutes()
    const seconds = date.getSeconds()

    return `<h2>${hours}:${minutes}:${seconds}</h2>`
  }
}
window.customElements.define('digital-clock', DigitalClock)

const digitalClock = new DigitalClock()