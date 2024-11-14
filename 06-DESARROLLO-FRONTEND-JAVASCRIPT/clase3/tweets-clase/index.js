
const appendChildExample = () => {
  // creación del nuevo nodo
  const heading3 = document.createElement('h3');
  heading3.textContent = "h3 incluido desde JS";
  
  // inclusión del nuevo nodo en el lugar deseado
  const target = document.querySelector('div');
  target.appendChild(heading3);
}


const innerHTMLExample = () => {
  const newDiv = document.createElement('div');
  const date = new Date();
  
  newDiv.innerHTML = `
    <h2>Título del div</h2>
    <h3>${date.toLocaleString()}</h3>
  `;

  const target = document.querySelector('div');
  // target.appendChild(newDiv);
  target.innerHTML = `
    <div>
      <h2>Título del div</h2>
      <h3>${date.toLocaleString()}</h3>
    </div>
  `
}

