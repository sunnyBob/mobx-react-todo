import { observable, action } from 'mobx'
import { observer } from 'mobx-react'
import React, { Component } from 'react'
import Todo from './todo'
@observer
class TodoList extends Component {
  constructor(props) {
    super(props)
    this.add = this.add.bind(this)
  }
  add() {
    const store = this.props.store
    store.add(this.refs.input.value)
    this.refs.input.value = ""
  }
  render() {
    const store = this.props.store
    let html = []
    store.list.forEach((elem) => {
      html = [...html, <Todo { ...elem } store={ store } key = { elem.id }/>]
    })
    return (
      <div className="list">
        <strong>Todo List</strong>
        <div className="level">
          <div className="level-item level-left">
            <div className="field has-addons">
              <p className="control">
                <input className="input" ref = "input" type="text" placeholder="want to do?"/>
              </p>
              <p className="control">
                <button className="button" onClick = {this.add}>
                  <span className="icon is-small is-left">
                    <i className="fa fa-plus" aria-hidden="true"></i>
                  </span>
                </button>
              </p>
            </div>
          </div>
        </div>
        <ul>
          { html }
        </ul>
        <div className="tags has-addons">
          <span >left</span>
          <span className="tag is-primary">{ store.list.filter((item)=> !item.finished).length}</span>
        </div>
      </div>
    )
  }
}

export default TodoList
