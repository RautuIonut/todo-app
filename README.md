# todo-app
- A dynamic, persistent todo list application built with vanilla JavaScript, Webpack, and the Web Storage API.

## Overview
- This project focuses on structuring a non-trivial JavaScript application: separating application logic from the DOM, modeling data with factories/classes, and persisting state across page reloads.

## Features
- Create, edit, and delete todo items
- Organize todos into separate projects (with a default project for new todos)
- Expand a todo to view/edit full details
- Visual priority indicators in the list view
- Data persists across page refreshes via localStorage

## Architecture
- Logic modules - creating todos/projects, toggling complete, changing priority, persistence
- DOM modules - rendering the UI and handling user interaction