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
    const checkbox = document.createElement('input')
    const header = document.createElement('div')
    const remove = document.createElement('button')

    title.classList.add('title')
    checkbox.type = 'checkbox'
    checkbox.classList.add('checkbox')
    header.append(title, description) 
    remove.classList.add('remove')
    remove.textContent = 'remove'

    title.textContent = list.todos[i].title
    description.textContent = list.todos[i].description
    date.textContent = list.todos[i].dueDate
    priority.textContent = list.todos[i].priority
    todo.id = list.todos[i].id

    document.createElement('div').append()

    todo.classList.add('todo')
    todo.append(checkbox, header, date, priority, remove)
    content.appendChild(todo)
  }
}

export default showList