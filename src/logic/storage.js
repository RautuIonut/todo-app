import state from './state.js'
import MakeList from './lists.js'

const STORAGE_KEY = 'tood-app-state'

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state.lists))
}

function loadState() {
  const raw = localStorage.getItem(STORAGE_KEY)

  if (!raw) return

  const parsed = JSON.parse(raw)

  state.lists = parsed.map(list => {
    const newList = new MakeList(list.name)
    newList.todos = list.todos
    newList.count = list.todos.length
    return newList
  })
}

export {saveState, loadState}