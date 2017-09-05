import { observer } from 'mobx-react'
import React, { Component } from 'react'
@observer
class Todo extends Component {
  render() {
    console.log(this.props)
    let { finished, content, id, store } = this.props
    return (
      <li className="item level">
        <div className="level-item level-left">
          <label className="checkbox">
            <input type="checkbox" checked ={ finished } onClick = {() => {
              store.toggleState(id)
            }} />
            <span className = { finished ? "line" : ""}>{ content }</span>
          </label>
          <span className="icon is-small is-left" onClick={ () => {
            store.delTodo(id)
          }}>
            <i className="fa fa-times" aria-hidden="true"></i>
          </span>
        </div>
      </li>
    )
  }
}

export default Todo
