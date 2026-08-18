import MakeList from './lists.js'
import {saveState} from './storage.js'

const state = {
  lists: [],
  addList(name) {
    const list = new MakeList(name)
    this.lists.push(list)

    saveState()
  },
  deleteList(name) {
    this.lists = this.lists.filter(list => list.name !== name)

    saveState()
  },
  getList(id) {
    let match
    for (let i = 0; i < this.lists.length; i++) {
      for (let j = 0; j < this.lists[i].todos.length; j++) {
        if (this.lists[i].todos[j].id === id) {
          match = this.lists[i]
        }
      }
    }

    return match
  }
}

export default state