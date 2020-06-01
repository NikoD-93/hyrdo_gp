import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import ButtonToolbar from 'react-bootstrap/ButtonToolBar'
import FormControl from 'react-bootstrap/FormControl'



export default class Section2 extends React.Component {
    constructor() {
        super()
        this.state = {
            filler: ""
        }
    }


    render() {
        if (this.props.currentStep !== 2) { 
            return null
          }
       
        return (
            <React.Fragment>
                <h4 className="text-center" style={{color: "black"}}>Step {this.props.currentStep}: Emergency Contact Information</h4>
                <Form.Row>
                    <Col>
                    <Form.Group>
                        <Form.Label>First name</Form.Label>
                        <Form.Control name="emergency_first_name" value={this.props.parentState.emergency_first_name} onChange={(event) => {this.props.handleChange(event)}} placeholder="First name" />
                    </Form.Group>
                    </Col>
                    <Col>
                    <Form.Group>
                        <Form.Label>Last name</Form.Label>
                        <Form.Control name="emergency_last_name" value={this.props.parentState.emergency_last_name} onChange={(event) => {this.props.handleChange(event)}} placeholder="Last name" />
                    </Form.Group>
                    </Col>
                </Form.Row>
                    <Form.Group id="relationship" >
                        <Form.Label>Relationship</Form.Label>
                        <Form.Control name="relationship" value={this.props.parentState.relationship} onChange={(event) => {this.props.handleChange(event)}} placeholder="brother"/> 
                    </Form.Group>
                <Form.Row>  
                    <Col>
                    <Form.Group>
                        <Form.Label>Street</Form.Label>
                        <Form.Control name="emergency_street" value={this.props.parentState.emergency_street} onChange={(event) => {this.props.handleChange(event)}} placeholder="110 S Willowby Dr" />
                    </Form.Group>
                    </Col>
                    <Col>
                    <Form.Group>
                        <Form.Label>City</Form.Label>
                        <Form.Control name="emergency_city" value={this.props.parentState.emergency_city} onChange={(event) => {this.props.handleChange(event)}} placeholder="Kyiv" />
                    </Form.Group>
                    </Col>
                </Form.Row>
                <Form.Row>
                    <Col>
                    <Form.Group>
                        <Form.Label>ZIP/Postal code</Form.Label>
                        <Form.Control name="emergency_zip" value={this.props.parentState.emergency_zip} onChange={(event) => {this.props.handleChange(event)}} placeholder="66056" />
                    </Form.Group>
                    </Col>
                    <Col>
                    <Form.Group>
                        <Form.Label>Country</Form.Label>
                        <Form.Control name="emergency_country" value={this.props.parentState.emergency_country} onChange={(event) => {this.props.handleChange(event)}} placeholder="Oz" />
                    </Form.Group>
                    </Col>
                </Form.Row>
                <Form.Row>
                    <Col>
                    <Form.Group>
                        <Form.Label>Mobile phone</Form.Label>
                        <Form.Control name="emergency_mobile_phone" className="mobile" value={this.props.parentState.emergency_mobile_phone} onChange={(event) => {this.props.handleChange(event)}} placeholder="1-242-393-1337" />
                    </Form.Group>
                    </Col>
                    <Col>
                    <Form.Group>
                        <Form.Label>E-mail</Form.Label>
                        <Form.Control name="emergency_email" value={this.props.parentState.emergency_email} onChange={(event) => {this.props.handleChange(event)}} placeholder="hydrogp@SuperHydroXtreme.com" />
                    </Form.Group>
                    </Col>
                </Form.Row>
            </React.Fragment>
        )
    }
}