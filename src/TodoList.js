import React, { Component } from 'react'
import { Button } from 'reactstrap';

class TodoList extends Component {
  componentDidUpdate() {
    this.props.inputElement.current.focus()
  }
  render() {
    return (
      <div className="todoListMain">
        <div className="header">
          <form onSubmit={this.props.addItem}>
            <input
              placeholder="Task"
              ref={this.props.inputElement}
              value={this.props.currentItem.text}
              onChange={this.props.handleInput}
            />
            <Button type="submit" color="primary"> Add Task </Button>
          </form>
        </div>
      </div>
    )
  }
}

export default TodoList
