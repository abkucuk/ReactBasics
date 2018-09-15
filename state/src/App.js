import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component {
  state={
    name:'mehmet',
    users: [],
    isLoading: true
  };
  changeName = () => {
    this.setState({name:'ahmet'});
  }; 
  componentDidMount() {
    setTimeout(() => {

      axios.get('https://jsonplaceholder.typicode.com/users')
      .then(result => result.data)
      .then(jsonData => {
        this.setState(
          {
            users: jsonData,
            isLoading: false
          }
        );
      });


    },3000)
   
  }
  render() {
    const {isLoading} = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">{this.state.name}</h1>
        </header>
        <p className="App-intro">

          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        {
          isLoading ?  'Loading...' : this.state.users.map(user => 
            <div key={user.email}>
              {user.name} - @{user.username}
            </div>
          )
        }
        <button onClick={this.changeName}>change name</button>
      </div>
    );
  }
}

export default App;


