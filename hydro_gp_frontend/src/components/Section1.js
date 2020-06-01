import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import ButtonToolbar from 'react-bootstrap/ButtonToolBar'
import FormControl from 'react-bootstrap/FormControl'
import DatePicker from "react-datepicker";
import PhoneInput from 'react-phone-number-input'
import "react-datepicker/dist/react-datepicker.css";
import 'react-phone-number-input/style.css'


export default class Section1 extends React.Component {
    constructor() {
        super()
        this.state = {
            filler: ""
        }
    }


    render() {
        console.log(this.props.parentState)
        if (this.props.currentStep !== 1) { 
            return null
          }
        return (
            <div className="section1-form">
                <h4 className="text-center" style={{color: "black"}}>Step {this.props.currentStep}: Personal Information</h4>
                <Form.Row>
                    <Col>
                    <Form.Group>
                        <Form.Label>First name</Form.Label>
                        <Form.Control name="first_name" onChange={(event) => {this.props.handleChange(event)}} value={this.props.parentState.first_name}  placeholder="First name" />
                    </Form.Group>
                    </Col>
                    <Col>
                    <Form.Group>
                        <Form.Label>Last name</Form.Label>
                        <Form.Control name="last_name" onChange={(event) => {this.props.handleChange(event)}} value={this.props.parentState.last_name} placeholder="Last name" />
                    </Form.Group>
                    </Col>
                </Form.Row>
                <Form.Group className="text-center">
                    <Form.Label > Date of birth</Form.Label>
                <Form.Row className="justify-content-center">
                    <DatePicker name="date_of_birth" onChange={this.props.onDateChange} selected={this.props.selected} value={this.props.date_of_birth}></DatePicker>
                </Form.Row>
                </Form.Group>
                <Form.Row>
                    <Col>
                    <Form.Group>
                        <Form.Label>Street</Form.Label>
                        <Form.Control name="street" onChange={(event) => {this.props.handleChange(event)}} value={this.props.parentState.street} placeholder="110 S Willowby Dr" />
                    </Form.Group>
                    </Col>
                    <Col>
                    <Form.Group>
                        <Form.Label>City</Form.Label>
                        <Form.Control name="city" onChange={(event) => {this.props.handleChange(event)}} value={this.props.parentState.city} placeholder="Kyiv" />
                    </Form.Group>
                    </Col>
                </Form.Row>
                <Form.Row>
                    <Col>
                    <Form.Group>
                        <Form.Label>ZIP/Postal code</Form.Label>
                        <Form.Control name="zip" onChange={(event) => {this.props.handleChange(event)}} value={this.props.parentState.zip}placeholder="66056" />
                    </Form.Group>
                    </Col>
                    <Col>
                    <Form.Group>
                        <Form.Label>Country</Form.Label>
                        <Form.Control name="country" onChange={(event) => {this.props.handleChange(event)}} value={this.props.parentState.country} placeholder="Oz" />
                    </Form.Group>
                    </Col>
                </Form.Row>
                <Form.Row>
                    <Col>
                    <Form.Group>
                        <Form.Label>Mobile phone</Form.Label>
                        <PhoneInput name="mobile_phone" value={this.props.parentState.mobile_phone} onChange={this.props.onMobileChange}  />
                    </Form.Group>
                    </Col>
                    <Col>
                    <Form.Group>
                        <Form.Label>E-mail</Form.Label>
                        <Form.Control name="email" onChange={(event) => {this.props.handleChange(event)}}placeholder="hydrogp@SuperHydroXtreme.com" />
                    </Form.Group>
                    </Col>
                </Form.Row>
            </div>
        )
    }
}