import React, { Component } from 'react';
import Todos from './Todos';

class App extends Component {
  constructor(){
    super();
    this.state = {
      todos: ["A", "B", "C"],
      currentText: '',
      isHoliday: null
    }
  }

  //To retrieve data from server use AJAX here:
  //Use fetch and chain of promises
  //Google how to use fetch for syntax
  //This should go in its own russianHolidays.js file in which a date is passed in and the return is
  //  the result of the AJAX, 
  //  export default (date) => {return fetch etc...}
  //  It is not component related so it should be put outside of component
  componentWillMount(){
    fetch('https://datazen.katren.ru/calendar/day/2018-06-11/')
      .then(res => res.json())
      .then(data => { //convert response to an object
        console.log(data);
        this.setState({isHoliday : data.holiday})
      });
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
    const {currentText, todos, isHoliday} = this.state;
    return (
      <Todos
        currentText = {currentText}
        setText = {this.setText}
        addToDo = {this.addToDo}
        todos = {todos}
        isHoliday = {isHoliday}
      />
    );
  }
}

export default App;
