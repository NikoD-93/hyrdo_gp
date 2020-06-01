import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import ButtonToolbar from 'react-bootstrap/ButtonToolBar'
import FormControl from 'react-bootstrap/FormControl'



export default class Section3 extends React.Component {
    constructor() {
        super()
        this.state = {
            filler: ""
        }
    }


    render() {
        if (this.props.currentStep !== 3) { 
            return null
          }
       
        return (
            <React.Fragment>
                <h4 className="text-center" style={{color: "black"}}>Step {this.props.currentStep}: Team/Vessel Information </h4>
                <Form.Row>
                    <Col>
                    <Form.Group>
                        <Form.Label>National Authority</Form.Label>
                        <Form.Control name="national_authority" value={this.props.parentState.national_authority} onChange={(event) => {this.props.handleChange(event)}} placeholder="First name" />
                    </Form.Group>
                    </Col>
                    <Col>
                    <Form.Group>
                        <Form.Label>Class</Form.Label>
                        <Form.Control name="boat_class" value={this.props.parentState.boat_class} onChange={(event) => {this.props.handleChange(event)}} placeholder="Last name" />
                    </Form.Group>
                    </Col>
                </Form.Row>
                    <Form.Group id="relationship" >
                        <Form.Label>License Number</Form.Label>
                        <Form.Control name="license_number" value={this.props.parentState.license_number} onChange={(event) => {this.props.handleChange(event)}} placeholder="brother"/> 
                    </Form.Group>
                <Form.Row>  
                    <Col>
                    <Form.Group>
                        <Form.Label>Date of issue</Form.Label>
                        <Form.Control name="date_of_issue" value={this.props.parentState.date_of_issue} onChange={(event) => {this.props.handleChange(event)}} placeholder="110 S Willowby Dr" />
                    </Form.Group>
                    </Col>
                    <Col>
                    <Form.Group>
                        <Form.Label>Boat manufacturer</Form.Label>
                        <Form.Control name="boat_manufacturer" value={this.props.parentState.boat_manufacturer} onChange={(event) => {this.props.handleChange(event)}} placeholder="Kyiv" />
                    </Form.Group>
                    </Col>
                </Form.Row>
                <Form.Row>
                    <Col>
                    <Form.Group>
                        <Form.Label>Year of build</Form.Label>
                        <Form.Control name="year_of_build" value={this.props.parentState.year_of_build} onChange={(event) => {this.props.handleChange(event)}} placeholder="66056" />
                    </Form.Group>
                    </Col>
                    <Col>
                    <Form.Group>
                        <Form.Label>Engine</Form.Label>
                        <Form.Control name="engine" value={this.props.parentState.engine} onChange={(event) => {this.props.handleChange(event)}} placeholder="Oz" />
                    </Form.Group>
                    </Col>
                </Form.Row>
                <Form.Row>
                    <Col>
                    <Form.Group>
                        <Form.Label>Race Number</Form.Label>
                        <Form.Control name="race_number" value={this.props.parentState.race_number} className="mobile" onChange={(event) => {this.props.handleChange(event)}} placeholder="1-242-393-1337" />
                    </Form.Group>
                    </Col>
                    <Col>
                    <Form.Group>
                        <Form.Label>Team Name</Form.Label>
                        <Form.Control name="team_name" value={this.props.parentState.team_name} onChange={(event) => {this.props.handleChange(event)}} placeholder="hydrogp@SuperHydroXtreme.com" />
                    </Form.Group>
                    </Col>
                </Form.Row>
                <Form.Row>
                    <Col>
                    <Form.Group>
                        <Form.Label>UIM S.I. Number</Form.Label>
                        <Form.Control name="uim_number" value={this.props.parentState.uim_number} className="mobile" onChange={(event) => {this.props.handleChange(event)}} placeholder="1-242-393-1337" />
                    </Form.Group>
                    </Col>
                    <Col>
                    <Form.Group>
                        <Form.Label>Team Manager</Form.Label>
                        <Form.Control name="team_manager" value={this.props.parentState.team_manager} onChange={(event) => {this.props.handleChange(event)}} placeholder="hydrogp@SuperHydroXtreme.com" />
                    </Form.Group>
                    </Col>
                </Form.Row>
            </React.Fragment>
        )
    }
}