import React, { Component } from 'react';

export class Home extends Component {
  static displayName = Home.name;

  render () {
    return (
      <div>
        <h1>TodoList</h1>
        <p>Here are your Todo items for the day:</p>
        </div>
    );
  }
}
