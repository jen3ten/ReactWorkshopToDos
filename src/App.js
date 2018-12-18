import React, { Component } from 'react';
import Todos from './Todos';

class App extends Component {
  constructor(){
    super();
    this.state = {
      todos: ["A", "B", "C"],
      currentText: ''
    }
  }

  //Allows typing in text box and keeps state in sync
  setText = (e) => {
    const newValue = e.target.value;
    this.setState({currentText : newValue})
  }

  addToDo = () => {
    const newTodo = this.state.currentText;
    const newTodos = [...this.state.todos, newTodo]
    this.setState({ todos: newTodos, currentText : '' })
  }

  render() {
    //const todos = ["Do Stuff", "Do more stuff", "You forgot to do this"];
    // const todoList = todos.map(t => <li key={t}>{t}</li>);
    const {currentText, todos} = this.state;
    return (
      <Todos
        currentText = {currentText}
        setText = {this.setText}
        addToDo = {this.addToDo}
        todos = {todos}
      />
    );
  }
}

export default App;
