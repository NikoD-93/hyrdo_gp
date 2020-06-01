import React from 'react';
// import './App.css';
import Login from './components/Login.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Dashboard from './components/Dashboard'
import './index.css';
import { Switch, Route } from 'react-router-dom'
import EntryFormMaster from './components/EntryFormMaster'



export default class App extends React.Component {
  constructor () {
    super()
    this.state = {
      many_things: ""
    }
  }


  

  render() {
  return (
    <div className="App">
             <Switch>
      <Route path='/dashboard' render={ (routeParams) => {
        return <Dashboard {...routeParams}  />
      }} />
      <Route path='/login' render={ (routeParams) => {
  return <Dashboard {...routeParams} />
        }} />
      <Route path='/participant-registration' render={ (routeParams) => {
  return <EntryFormMaster {...routeParams} />
        }} />
    </Switch>
    </div>
  );
}
}


