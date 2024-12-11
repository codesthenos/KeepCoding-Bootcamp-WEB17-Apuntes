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
  
</div>
`

class TodoList extends HTMLElement {
  constructor () {
    super()

    this.attachShadow({ mode: "open" })
  }

  connectedCallback () {
    const template = templateElement.content.cloneNode(true)
    this.shadowRoot.appendChild(template)
  }
}

customElements.define("todo-list", TodoList)
