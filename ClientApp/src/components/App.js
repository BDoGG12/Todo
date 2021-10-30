import React, { Component } from 'react';
import { Route } from 'react-router';
//import  Home  from './components/Home';
import TodoEntry from './TodoEntry';

//import './custom.css'

class App extends Component {
  static displayName = App.name;

    render() {
        return (
            <div>
                <h1>TodoList</h1>
                <TodoEntry />
            </div>
        );
    }
}

export default App;