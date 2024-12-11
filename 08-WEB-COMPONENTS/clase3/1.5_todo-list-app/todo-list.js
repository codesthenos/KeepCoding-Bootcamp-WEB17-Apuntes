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
</div>
<button></button>
`

class TodoList extends HTMLElement {
  constructor () {
    super()

    this.attachShadow({ mode: "open" })

    this.title = this.getAttribute('title') ?? 'DEFAULT TITLE'
    this.buttonLabel = this.getAttribute('button-label') ?? 'ACTION BUTTON'
  }

  createTask ({ text, checked, taskId }) {
    const newTask = document.createElement('div')
    newTask.innerHTML = `<action-item id="${taskId}" text="${text}" ${checked ? 'checked' : ''}></action-item>`

    const actionItem = newTask.querySelector('action-item')

    actionItem.addEventListener('action-item-remove', () => {
      this.deleteTask({ id: taskId })
    })

    actionItem.addEventListener('action-item-status-change', (event) => {
      this.toggleTask({ id: taskId, checked: event.detail })
    })

    return newTask
  }

  storeTask ({ text, checked, taskId }) {
    const currentTasks = JSON.parse(localStorage.getItem('TODOS')) ?? []
    const newTask = { text, checked, id: taskId }

    localStorage.setItem('TODOS', JSON.stringify([...currentTasks, newTask]))
  }

  showStoredTasks ({ container }) {
    const storedTasks = JSON.parse(localStorage.getItem('TODOS')) ?? []

    storedTasks.forEach(task => {
      const taskDiv = this.createTask({ text: task.text, checked: task.checked, taskId: task.id })
      container.appendChild(taskDiv)
    })
  }

  deleteTask ({ id }) {
    const currentTasks = JSON.parse(localStorage.getItem('TODOS'))
    const tasksWithoutDeleted = currentTasks.filter(currentTask => currentTask.id !== id)
    
    localStorage.setItem('TODOS', JSON.stringify(tasksWithoutDeleted))
  }

  toggleTask ({ id, checked }) {
    const currentTasks = JSON.parse(localStorage.getItem('TODOS'))

    const finalTasks = currentTasks.map(currentTask => {
      if (currentTask.id !== id) {
        return currentTask
      } else {
        return {
          ...currentTask,
          checked
        }
      }
    })

    localStorage.setItem('TODOS', JSON.stringify(finalTasks))
  }

  connectedCallback () {
    const template = templateElement.content.cloneNode(true)

    template.querySelector('h1').textContent = this.title

    const button = template.querySelector('button')
    button.textContent = this.buttonLabel

    button.addEventListener('click', () => {
      // delete all checkeds class method
    })

    this.shadowRoot.appendChild(template)

    const inputAction = this.shadowRoot.querySelector('input-action')
    const todoWrapper = this.shadowRoot.querySelector('.todo-list-wrapper')

    this.showStoredTasks({ container: todoWrapper })
    
    inputAction.addEventListener('input-action-submit', (event) => {
      const taskId = crypto.randomUUID()
      const newActionItemDiv = this.createTask({ text: event.detail, taskId })

      this.storeTask({ text: event.detail, checked: false, taskId })

      todoWrapper.appendChild(newActionItemDiv)
    })
  }
}

window.customElements.define("todo-list", TodoList)
