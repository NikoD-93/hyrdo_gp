import React from 'react';
// import './App.css';
import Login from './components/Login.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Dashboard from './components/Dashboard'
import './index.css';
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
        user_id: 1 


    }
}
handleSubmit = (event) => {
  // const entryData = this.state 
  // delete entryData["currentStep"]
  // debugger 
  const postObj = {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
      },
      body: 
          JSON.stringify({
              first_name: this.state.first_name,
              last_name: this.state.last_name,
              date_of_birth: this.state.date_of_birth,
              street: this.state.street,
              city: this.state.city,
              zip: this.state.zip,
              country: this.state.country,
              nationality: this.state.nationality,
              mobile_phone: this.state.mobile_phone,
              email: this.state.email,
              emergency_first_name: this.state.emergency_first_name,
              emergency_last_name: this.state.emergency_last_name,
              relationship: this.state.relationship,
              emergency_street: this.state.emergency_street,
              emergency_city: this.state.emergency_city,
              emergency_zip: this.state.emergency_zip,
              emergency_country: this.state.emergency_country,
              emergency_mobile_phone: this.state.emergency_mobile_phone,
              emergency_email: this.state.emergency_email,
              national_authority: this.state.national_authority,
              boat_class: this.state.boat_class,
              license_number: this.state.license_number,
              date_of_issue: this.state.date_of_issue,
              boat_manufacturer: this.state.boat_manufacturer,
              year_of_build: this.state.year_of_build,
              engine: this.state.engine,
              race_number: this.state.race_number,
              team_name: this.state.team_name,
              uim_number: this.state.uim_number,
              team_manager: this.state.team_manager,
              user_id: this.state.user_id
          })
      }
  event.preventDefault()
  fetch(ENTRY_FORM_URL, postObj) 
  .then(resp => resp.json())
  .then(entryFormObj => console.log(entryFormObj))
  return 
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
        return <EntryFormMaster 
            selected={this.state.date_of_birth}
            parentState={this.state}
            handleChange={this.handleChange}
            handleDateChange={this.handleDateChange}
            handleMobileChange={this.handleMobileChange}
            handleSubmit={this.handleSubmit}
            {...routeParams} />
        }} />
    </Switch>
    </div>
  );
}
}


