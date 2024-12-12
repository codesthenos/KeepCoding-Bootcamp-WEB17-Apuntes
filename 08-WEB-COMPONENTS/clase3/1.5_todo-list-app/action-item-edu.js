/*
responsabilidad: pintar un texto a modo de tarea pendiente.
	Borrarlo si se pulsa el botón de borrar.
	Modificar la apariencia cuando esté completada

custom properties
	- XXX

eventos
	- action-item-remove
	- action-item-complete
	
propiedades
	- text
  - checked
*/
const templateElement = document.createElement("template")

templateElement.innerHTML = `
<style>
  input:checked + span {
    text-decoration: line-through;
  }

</style>

<div class="action-item-wrapper">
  <input type="checkbox" />
  <span></span>
  <button>🚮</button>
</div>
`

class ActionItem extends HTMLElement {
  constructor() {
    super()

    this.attachShadow({ mode: "open" })
    // NO MANEJAMOS QUE SE PINTE UN ELEMENTO VACIO
    this.text = this.getAttribute('text') ?? ''
    // checked
    this.checked = this.hasAttribute('checked')

    this.id = this.getAttribute('id') ?? null
  }

  connectedCallback() {
    const template = templateElement.content.cloneNode(true)

    template.querySelector('span').textContent = this.text
    if (this.checked) {
      template.querySelector('input').setAttribute('checked', '')
    }

    this.shadowRoot.appendChild(template)

    const removeButton = this.shadowRoot.querySelector('button')
    const checkbox = this.shadowRoot.querySelector('input')

    removeButton.addEventListener('click', () => {
      const customEvent = new CustomEvent('action-item-remove')

      this.dispatchEvent(customEvent)

      this.remove()
    })

    checkbox.addEventListener('change', () => {
      const customEvent = new CustomEvent('action-item-status-change', {
        detail: {
          isCompleted: checkbox.checked,
          id: this.id
        }
      })

      this.dispatchEvent(customEvent)
    })
  }

  static get observedAttributes () {
    return ['text', 'id']
  }

  attributeChangedCallback (propName, oldValue, newValue) {
    if (propName === 'text') {
      this.shadowRoot.querySelector('span').textContent = newValue
    } else if (propName === 'id') {
      this.id = newValue
    }
  }
}

window.customElements.define("action-item", ActionItem)
