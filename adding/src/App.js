import React, { Component } from 'react';// import logo from './logo.svg';
import './App.css';
// import 'bootstrap/dist/css/bootstrap.css';
import Counter from './components/Counter'
// import { connect } from 'react-redux'


export default class App extends Component {
  render(){
  return (
    <div className="App">
    <h1>app</h1>
    <Counter/>
    </div>
  );
}
}