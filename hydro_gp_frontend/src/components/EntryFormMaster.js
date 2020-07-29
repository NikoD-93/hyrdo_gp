import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row'
import Section1 from "./Section1"
import Section2 from "./Section2"
import Section3 from "./Section3"
import logo from '../images/circle-cropped.png'
// import DatePicker from "react-datepicker";
import { LinkContainer } from "react-router-bootstrap";
import "react-datepicker/dist/react-datepicker.css";

const ENTRY_FORM_URL = ("http://localhost:3000/entry_forms")


export default class EntryFormMaster extends React.Component {
    constructor() {
        super()
        this.state = {
            currentStep: 1
            // first_name: "",
            // last_name: "",
            // date_of_birth: new Date(),
            // street: "",
            // city: "",
            // zip: 0,
            // country: "",
            // nationality: "Swedish",
            // mobile_phone: 0,
            // email: "",
            // emergency_first_name: "",
            // emergency_last_name: "",
            // relationship: "",
            // emergency_street: "",
            // emergency_city: "",
            // emergency_zip: 0,
            // emergency_country: "",
            // emergency_mobile_phone: 0,
            // emergency_email: "",
            // national_authority: "Sweden",
            // boat_class: "",
            // license_number: 0,
            // date_of_issue: "date",
            // boat_manufacturer: "",
            // year_of_build: 0,
            // engine: "",
            // race_number: "",
            // team_name: "",
            // team_manager: "",
            // uim_number: 0,
            // user_id: 1 


        }
    }

    // handleSubmit = (event) => {
    //     // const entryData = this.state 
    //     // delete entryData["currentStep"]
    //     // debugger 
    //     const postObj = {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json",
    //             "Accept": "application/json"
    //         },
    //         body: 
    //             JSON.stringify({
    //                 first_name: this.state.first_name,
    //                 last_name: this.state.last_name,
    //                 date_of_birth: this.state.date_of_birth,
    //                 street: this.state.street,
    //                 city: this.state.city,
    //                 zip: this.state.zip,
    //                 country: this.state.country,
    //                 nationality: this.state.nationality,
    //                 mobile_phone: this.state.mobile_phone,
    //                 email: this.state.email,
    //                 emergency_first_name: this.state.emergency_first_name,
    //                 emergency_last_name: this.state.emergency_last_name,
    //                 relationship: this.state.relationship,
    //                 emergency_street: this.state.emergency_street,
    //                 emergency_city: this.state.emergency_city,
    //                 emergency_zip: this.state.emergency_zip,
    //                 emergency_country: this.state.emergency_country,
    //                 emergency_mobile_phone: this.state.emergency_mobile_phone,
    //                 emergency_email: this.state.emergency_email,
    //                 national_authority: this.state.national_authority,
    //                 boat_class: this.state.boat_class,
    //                 license_number: this.state.license_number,
    //                 date_of_issue: this.state.date_of_issue,
    //                 boat_manufacturer: this.state.boat_manufacturer,
    //                 year_of_build: this.state.year_of_build,
    //                 engine: this.state.engine,
    //                 race_number: this.state.race_number,
    //                 team_name: this.state.team_name,
    //                 uim_number: this.state.uim_number,
    //                 team_manager: this.state.team_manager,
    //                 user_id: this.state.user_id
    //             })
    //         }
    //     event.preventDefault()
    //     fetch(ENTRY_FORM_URL, postObj) 
    //     .then(resp => resp.json())
    //     .then(entryFormObj => console.log(entryFormObj))
    //     return this.props.history.push("/dashboard")
    // }

    goToDash = () => {
        return this.props.history.push("/participant-registration")
    }

    // handleChange = (event) => {
    //     const value = event.target.value
    //      this.setState({
    //          ...this.state,
    //          [event.target.name]: value
    //      })
    //  }

    // handleDateChange = (date) => {
    //     this.setState({
    //       date_of_birth: date
    //     });
    // }

    // handleMobileChange = (number) => {
    //     let intPhoneNumber = parseInt(number)
    //     console.log(intPhoneNumber)
    //     this.setState({
    //         mobile_phone: number
    //     })
    // }


    nextPage = () => {
        let currentStep = this.state.currentStep
        // If the current step is 1 or 2, then add one on "next" button click
        currentStep = currentStep >= 2? 3: currentStep + 1
        this.setState({
          currentStep: currentStep
        })
      }

    prevPage = () => {
        let currentStep = this.state.currentStep
        // If the current step is 2 or 3, then subtract one on "previous" button click
        currentStep = currentStep <= 1? 1: currentStep - 1
        this.setState({
          currentStep: currentStep
        })
      }
    

    previousButton = () => {
        let currentStep = this.state.currentStep;
        // If the current step is not 1, then render the "previous" button
        if(currentStep !==1){
          return (
            <Button 
              className="btn btn-secondary" 
              type="button" onClick={this.prevPage}>
            Previous
            </Button>
          )
        }
        return null;
      }

      nextButton = () => {
        let currentStep = this.state.currentStep;
        // If the current step is not 3, then render the "next" button
        if(currentStep <3){
          return (
            <Button 
              className="btn btn-primary float-right" 
              type="button" onClick={this.nextPage}>
            Next
            </Button>        
          )
        }
        // ...else render nothing
        return null;
      }




    render() {
        console.log(this.props)
        return(
            <div className="entry-form-div">
                <Navbar bg="light" variant="light">
                    <Navbar.Brand href="/dashboard">      
                        <img alt="" src={logo} width="42" height="42" className="d-inline-block align-top"/>
                        {' '}HydroGP
                    </Navbar.Brand>
                        <Nav className="mr-auto">
                            <LinkContainer to="/participant-registration">
                                <Nav.Link onClick={this.goToDash}>Participant Registration</Nav.Link>
                            </LinkContainer>
                            <Nav.Link href="#pricing">Volunteer Registration</Nav.Link>
                        </Nav>
                </Navbar>
                <Row>
                 <Col lg={{ span: 4, offset: 4 }}>
                <Form onSubmit={this.props.handleSubmit} id="participant-entry-form" className="rounded border border-dark">
                <h2 className="text-center" id="part-form-header" style={{color: "black"}}>Participant Registration Form</h2>
                    <Section1
                        selected={this.props.selected}
                        currentStep={this.state.currentStep} 
                        handleDateChange={this.props.handleDateChange}
                        handleChange={this.props.handleChange} 
                        parentState ={this.props}   
                        handleMobileChange={this.props.handleMobileChange}
                    />
                    <Section2
                        currentStep={this.state.currentStep} 
                        onChange={this.handleChange}  
                        parentState ={this.props} 
                        handleChange={this.props.handleChange}  
                    />
                    <Section3
                        currentStep={this.state.currentStep}  
                        onChange={this.props.handleChange} 
                        parentState={this.props}  
                        handleChange={this.props.handleChange} 
                    />
                    <Row>
                        <Col>
                    {this.previousButton()}
                        </Col>
                        <Col>
                        {this.nextButton()}
                        {this.state.currentStep === 3? <Button className="float-right" variant="success" type="submit">Submit</Button>: null}   
                        </Col>
                    </Row>
                </Form>
                </Col>
                </Row>
            </div>
        )
    }
}


