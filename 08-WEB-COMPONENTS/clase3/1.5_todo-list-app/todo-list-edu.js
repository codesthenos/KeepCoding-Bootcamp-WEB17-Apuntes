import "./input-action.js"
import "./action-item-edu.js"

const templateElement = document.createElement("template")

templateElement.innerHTML = `
<style>


</style>

<div class="todo-list-wrapper">
  <h1></h1>
  <input-action placeholder="New todo here" button-label="ADD"></input-action>
</div>
`

class TodoList extends HTMLElement {
  constructor () {
    super()

    this.attachShadow({ mode: "open" })
    this.title = this.getAttribute('title') ?? 'DEFAULT TITLE'
  }

  connectedCallback () {
    const template = templateElement.content.cloneNode(true)

    template.querySelector('h1').textContent = this.title

    this.shadowRoot.appendChild(template)

    this.shadowRoot.querySelector('input-action').addEventListener('input-action-submit', (event) => {
      const text = event.detail
      const actionItem = document.createElement('action-item')
      
      this.shadowRoot.appendChild(actionItem)
      
      actionItem.setAttribute('text', text)
    })
  }
}

window.customElements.define("todo-list", TodoList)
