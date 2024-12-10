/*
responsabilidad: recoger un texto. Mantener el botón
    deshabilitado mientras no haya nada escrito.
    Limpiar el contenido del input cuando el botón se pulse.

custom properties
    - XXX

eventos
    - input-action-submit: al pulsar el botón

propiedades
    - button-label
    - placeholder
*/
const templateElement = document.createElement("template")

templateElement.innerHTML = `
<style>


</style>

<div class="input-action-wrapper">
  <input type="text" />
  <button></button>
</div>
`

class InputAction extends HTMLElement {
  constructor() {
    super()

    this.attachShadow({ mode: "open" })

    this.buttonLabel = this.getAttribute('button-label') ?? 'action'
    this.placeholder = this.getAttribute('placeholder') ?? 'placeholder text'
  }

  connectedCallback() {
    const template = templateElement.content.cloneNode(true)

    template.querySelector('button').textContent = this.buttonLabel

    this.shadowRoot.appendChild(template)
  }
}

customElements.define("input-action", InputAction)