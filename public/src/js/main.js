import React from 'react'
import ReactDOM from 'react-dom'
import TodoList from './component/todolist'
import { store } from './store/store'
console.log(store)
ReactDOM.render(
  <TodoList store = { store }/>,
  document.getElementById("app")
)
