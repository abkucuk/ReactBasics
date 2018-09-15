import React, { Component } from 'react';
//xsimport logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link, Redirect, Switch } from 'react-router-dom';
const News = ({ match }) => { return (<h1>news page:  {match.params.id}</h1>) };
const Profile = () => { return (<h1>profile page: Ben profil sayfasıyım morug gardaş </h1>) };
const notFound404 = () => { return (<h1>Bu sayfa bulunamadı knk  </h1>) };

class App extends Component {
  state = {

    isLoggedIn: false
  }
  btnLogin = () => {
    this.setState({
      isLoggedIn: !this.state.isLoggedIn
    })
  };
  render() {
    return (
      <div className="App">

        <Router>
          <div>

            <Link to='/'>homepage</Link> <br />
            <Link to='/contact'>contact</Link><br />
            <Link to='/news/2'>news</Link><br />
            <Link to='/profile'>profile</Link><br />
            <input
              type='button'
              onClick={this.btnLogin}
              value={this.state.isLoggedIn ? 'logout' : 'login'} />
            <Switch>
              <Route
                path='/'
                exact={true}
                render={
                  () => {
                    return (<h1>Home page</h1>);
                  }}
              />
              <Route
                path='/contact'
                exact={true}
                render={
                  () => {
                    return (
                      <h1>contact page</h1>
                    );
                  }
                }
              />
              <Route
                path='/news/:id'
                exact={true}
                component={News}
              />
              <Route
                path='/profile'
                exact={true}
                render={() => (this.state.isLoggedIn ? (<Profile />) : (<Redirect to='/' />))}
              />
              <Route component={notFound404} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
