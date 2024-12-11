/*
responsabilidad: reaccionar a cuando se quiere
	crear un nuevo item y crearlo.
	Borrar elementos y gestionar todo's completados
custom properties
	- XX
eventos
	- X
propiedades
	- title 
*/
const templateElement = document.createElement("template")

templateElement.innerHTML = `
<style>


</style>

<div class="todo-list-wrapper">
  <h1></h1>
  <input-action placeholder="New task here" button-label="ADD"></input-action>
  <action-item text="first task default" checked></action-item>
  <action-item text="second task default"></action-item>
</div>
`

class TodoList extends HTMLElement {
  constructor () {
    super()

    this.attachShadow({ mode: "open" })

    this.title = this.getAttribute('title') ?? 'DEFAULT TITLE'
  }

  createTask ({ text, checked }) {
    const newTask = document.createElement('div')
    newTask.innerHTML = `<action-item text="${text}" ${checked ? 'checked' : ''}></action-item>`

    return newTask
  }

  storeTask ({ text, checked }) {
    const currentTasks = JSON.parse(localStorage.getItem('TODOS')) ?? []

    localStorage.setItem('TODOS', JSON.stringify([...currentTasks, { text, checked }]))
  }

  showStoredTasks ({ container }) {
    const storedTasks = JSON.parse(localStorage.getItem('TODOS')) ?? []

    storedTasks.forEach(task => {
      const taskDiv = this.createTask({ text: task.text, checked: task.checked})
      container.appendChild(taskDiv)
    })
  }

  connectedCallback () {
    const template = templateElement.content.cloneNode(true)

    template.querySelector('h1').textContent = this.title

    this.shadowRoot.appendChild(template)

    const inputAction = this.shadowRoot.querySelector('input-action')
    const todoWrapper = this.shadowRoot.querySelector('.todo-list-wrapper')

    this.showStoredTasks({ container: todoWrapper })

    inputAction.addEventListener('input-action-submit', (event) => {
      const newActionItemDiv = this.createTask({ text: event.detail })
      // persistency
      this.storeTask({ text: event.detail, checked: false })
      todoWrapper.appendChild(newActionItemDiv)
    })
  }
}

window.customElements.define("todo-list", TodoList)
