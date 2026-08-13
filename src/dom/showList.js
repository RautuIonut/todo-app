import state from '../logic/state.js'

function showList(name) {
  const list = state.lists.find(list => list.name === name)
  const content = document.querySelector('.content')
  
  content.innerHTML = ''
  
  for (let i = 0; i < list.todos.length; i++) {
    const todo = document.createElement('div')
    const title = document.createElement('p')
    const description = document.createElement('p')
    const date = document.createElement('p')
    const priority = document.createElement('p')

    title.textContent = list.todos[i].title
    description.textContent = list.todos[i].description
    date.textContent = list.todos[i].dueDate
    priority.textContent = list.todos[i].priority

    todo.classList.add('todo')
    todo.append(title, description, date, priority)
    content.appendChild(todo)
  }
}

export default showList