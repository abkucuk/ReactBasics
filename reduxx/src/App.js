import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from "react-redux";
import { updateUser } from "./actions/userActions";
class App extends Component {
  

  
  btnUpdateName = () => {
    this.props.onUpdateUser('Ahmet Burak');
  };
  render() {
    console.log('burası App.js bizim connect ile store a bağlandığımız yer ve bu da props: ',this.props);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <h2>{this.props.user.user}</h2>
        <button onClick={this.btnUpdateName}>change the name</button>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return state;
};
const mapDispatchToProps = {
  onUpdateUser: updateUser
};

export default connect(mapStateToProps,mapDispatchToProps)(App);
