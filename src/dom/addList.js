function addList(name, app) {
  const list = app.addList(name)
  const container = document.createElement('div')
  
  container.appendChild(document.createElement('h2'))
  container.firstChild.textContent = name
  document.querySelector('.sidebar').appendChild(container)
}

export default addList