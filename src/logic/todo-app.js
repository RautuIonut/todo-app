import MakeList from './lists.js'

class TodoApp {
  constructor() {
    this.lists = []
  }

  addList(name) {
    const list = new MakeList(name)
    this.lists.push(list)
  }

  deleteList(name) {
    this.lists = this.lists.filter(list => list.name !== name)
  }
}

export default TodoApp