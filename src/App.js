import React, { Component } from 'react';
import './App.css';
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import Message from './components/Message'


class App extends Component {
  render() {
    return (
      <div className="Todo-App pa4">
        <h2>Todos:</h2>
        <Message message="This is a message" />
        <TodoForm />
        <TodoList />
      </div>
    );
  }
}

export default App
