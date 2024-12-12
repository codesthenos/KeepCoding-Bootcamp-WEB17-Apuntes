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

    const currentTodos = this.getCurrentTodos()

    currentTodos.forEach(todo => {
      this.drawActionItem(todo.text)
    })

    this.shadowRoot.querySelector('input-action').addEventListener('input-action-submit', (event) => {
      const text = event.detail
      const id = Date.now().toString()
      
      this.drawActionItem(text, id)

      const currentTodos = this.getCurrentTodos()

      localStorage.setItem('TODOS', JSON.stringify([...currentTodos, { text, isCompleted: false, id }]))
    })
  }

  drawActionItem (text, id) {
    const actionItem = document.createElement('action-item')
    this.shadowRoot.appendChild(actionItem)
    actionItem.setAttribute('text', text)
    actionItem.setAttribute('id', id)
    actionItem.addEventListener('action-item-status-change', (event) => {
      const currentTodos = this.getCurrentTodos()
      currentTodos.forEach(todo => {
        
      })
    })
  }

  getCurrentTodos () {
    const currentTodos = JSON.parse(localStorage.getItem('TODOS')) ?? []
    return currentTodos
  }
}

window.customElements.define("todo-list", TodoList)
