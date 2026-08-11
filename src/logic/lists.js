import MakeTodo from './todos.js'

class MakeList {
  constructor(name) {
    this.name = name
    this.todos = []
    this.count = 0
  }

  addTodo(title, description, dueDate, priority) {
    const todo = new MakeTodo(title, description, dueDate, priority)
    this.todos.push(todo)
    this.count++
  }

  deleteTodo(id) {
    this.todos = this.todos.filter(todo => todo.id !== id)
  }
}

export default MakeList