import React from 'react';
// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Dashboard from './components/Dashboard'
import Login from './components/Login'
import { Switch, Route } from 'react-router-dom'
import EntryFormMaster from './components/EntryFormMaster'

const ENTRY_FORM_URL = ("http://localhost:3000/entry_forms")

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
        first_name: "",
        last_name: "",
        date_of_birth: new Date(),
        street: "",
        city: "",
        zip: 0,
        country: "",
        nationality: "Swedish",
        mobile_phone: 0,
        email: "",
        emergency_first_name: "",
        emergency_last_name: "",
        relationship: "",
        emergency_street: "",
        emergency_city: "",
        emergency_zip: 0,
        emergency_country: "",
        emergency_mobile_phone: 0,
        emergency_email: "",
        national_authority: "Sweden",
        boat_class: "",
        license_number: 0,
        date_of_issue: "date",
        boat_manufacturer: "",
        year_of_build: 0,
        engine: "",
        race_number: "",
        team_name: "",
        team_manager: "",
        uim_number: 0,
        user_id: 1,
        loggedIn: false
    }
}

handleChange = (event) => {
  const value = event.target.value
   this.setState({
       ...this.state,
       [event.target.name]: value
   })
}

handleDateChange = (date) => {
  this.setState({
    date_of_birth: date
  });
}

handleMobileChange = (number) => {
  let intPhoneNumber = parseInt(number)
  console.log(intPhoneNumber)
  this.setState({
      mobile_phone: number
  })
}

handleLogout = () => {
  return this.setState({
      ...this.state,
      loggedIn: false,
      display: true
  })
}

  

  render() {
  return (
    <div className="App">
             <Switch>
      <Route path='/dashboard' render={ (routeParams) => {
        return <Dashboard 
        formValues={this.state}
        {...routeParams} 
         />
      }} />
      <Route path='/login' render={ (routeParams) => {
        return <Login
        {...routeParams} />
        }} />
      <Route path='/participant-registration' render={ (routeParams) => {
        return <EntryFormMaster 
            selected={this.state.date_of_birth}
            parentState={this.state}
            handleChange={this.handleChange}
            handleDateChange={this.handleDateChange}
            handleMobileChange={this.handleMobileChange}
            // handleSubmit={this.handleSubmit}
            handleLogout={this.handleLogout}
            {...routeParams} />
        }} />
    </Switch>
    </div>
  );
}
}


