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
`

class TodoList extends HTMLElement {
  constructor () {
    super()

    this.attachShadow({ mode: "open" })

    this.title = this.getAttribute('title') ?? 'DEFAULT TITLE'
  }

  createTask ({ text, checked, taskId }) {
    const newTask = document.createElement('div')
    newTask.innerHTML = `<action-item id="${taskId}" text="${text}" ${checked ? 'checked' : ''}></action-item>`

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

  connectedCallback () {
    const template = templateElement.content.cloneNode(true)

    template.querySelector('h1').textContent = this.title

    this.shadowRoot.appendChild(template)

    const inputAction = this.shadowRoot.querySelector('input-action')
    const todoWrapper = this.shadowRoot.querySelector('.todo-list-wrapper')
    
    this.showStoredTasks({ container: todoWrapper })
    
    const actionItems = Array.from(todoWrapper.querySelectorAll('action-item'))
    
    inputAction.addEventListener('input-action-submit', (event) => {
      const taskId = crypto.randomUUID()
      const newActionItemDiv = this.createTask({ text: event.detail, taskId })
      // persistency
      this.storeTask({ text: event.detail, checked: false, taskId })

      const newActionItem = newActionItemDiv.querySelector('action-item')
      // add remove listener to a created action item
      newActionItem.addEventListener('action-item-remove', () => {
        const taskId = newActionItem.getAttribute('id')

        this.deleteTask({ id: taskId })
      })
      todoWrapper.appendChild(newActionItemDiv)
    })
    // add again for the ones are already in the screen
    actionItems.forEach(actionItem => {
      actionItem.addEventListener('action-item-remove', () => {
        const taskId = actionItem.getAttribute('id')

        this.deleteTask({ id: taskId })
      })
    })
  }
}

window.customElements.define("todo-list", TodoList)
