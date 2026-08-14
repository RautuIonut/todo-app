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
    const edit = document.createElement('button')

    todo.classList.add('todo')
    title.classList.add('title')
    description.classList.add('description')
    priority.classList.add('priority')
    date.classList.add('date')
    checkbox.classList.add('checkbox')
    remove.classList.add('remove')
    edit.classList.add('edit')
    todo.id = list.todos[i].id
    

    checkbox.type = 'checkbox'

    title.textContent = list.todos[i].title
    description.textContent = list.todos[i].description
    date.textContent = list.todos[i].dueDate
    priority.textContent = list.todos[i].priority
    remove.textContent = 'remove'
    edit.textContent = 'edit'
    

    header.append(title, description)
    todo.append(checkbox, header, date, priority, remove, edit)
    content.appendChild(todo)
  }
}

export default showList