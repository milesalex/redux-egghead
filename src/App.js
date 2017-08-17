import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import Message from './components/Message'
import Footer from './components/Footer'


class App extends Component {
  render() {
    return (
      <Router>
        <div className="Todo-App pa4">
          <h2>Todos:</h2>
          <Message message="This is a message" />
          <TodoForm />
          <Route path='/:filter?' render={({match}) => (
            <TodoList  filter={match.params.filter}/>
          )} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App
