import React, { Component } from 'react';
import Header from './components/header';
import TodoInput from './components/todoInput';
import TodoItem from './components/todoItem';
import './App.css';

/*Notes:
- React requires when you iterate over a bunch of components that each one
has an unique key or . Items pulled from a database automatically come with an
identifier. You have to make your own keys/ids when making your own database.
- Use console log for event handlers temporarily
*/

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [
        {id: 0, text: "Make dinner tonight"},
        {id: 1, text: "Fold the laundry"},
        {id: 2, text: "Make wireframe for passion project"}
      ],
      nextId: 3
    }

    this.addTodo = this.addTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
  }

  addTodo(todoText) {
    // console.log("Todo added: ", todoText
    let todos = this.state.todos.slice();
    //The todos are saved to a new variable as we do not want to modify the state until we are ready
    todos.push({id: this.state.nextId, text: todoText})
    this.setState({
      todos: todos,
      nextId: this.state.next += 1
    })
  }

  removeTodo(id) {
    // console.log("Removing: ", id
    this.setState({
      todos: this.state.todos.filter((todo, index) => todo.id !== id)
    })
  }

  render() {
    return (
      <div className="App">
        <div className="todo-wrapper">
          <Header />
          <TodoInput todoText="" addTodo={this.addTodo} />
        <ul>
          {
            this.state.todos.map((todo) => {
              return <TodoItem todo={todo} key={todo.id} id={todo.id} removeTodo={this.removeTodo} />
            })
          }
        </ul>
      </div>
      </div>
    );
  }
}

export default App;
