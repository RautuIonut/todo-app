import MakeTodo from './todos.js'

class MakeList {
  constructor(name) {
    this.name = name
    this.count = 0
  }

  addTodo(title, description, dueDate, priority) {
    const todo = new MakeTodo(title, description, dueDate, priority)
    this[todo.title] = todo
    this.count++
  }
}

export default MakeList