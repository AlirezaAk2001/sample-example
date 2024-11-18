// import logo from './logo.svg';
// import './App.css';
import React, { Component } from 'react';
import Alert from 'react-bootstrap/Alert';

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>Hello Dear Users</h1>
        <Alert>
          This is a Alert!
        </Alert>
      </div>
    )
  }
}