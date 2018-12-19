import React, { Component } from 'react';
import ToDoList from './ToDoList';
import AddBar from './AddBar';


class Todos extends Component {
    render() {
        const {currentText, setText, addToDo, todos, isHoliday} = this.props;
         return (
            <div>
                <AddBar 
                currentText = {currentText}
                setText = {setText}
                addToDo = {addToDo}
                />
                <ToDoList todos={todos} />
                <h4>This is just a little experiment with an AJAX call:</h4>
                <div>Is it a holiday? {isHoliday ? "Yes" : "No"}</div>
          </div>
            );
    }
}

export default Todos;