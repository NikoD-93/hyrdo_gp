import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { LinkContainer } from "react-router-bootstrap";

export default class NavBar extends React.Component {
    constructor() {
        super()
        this.state = {
            display: false 


        }
    }


    render() {
        return (
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
                        <Form inline> 
                            <Button onClick={this.props.handleLogout} variant="outline-info">Logout</Button>
                        </Form>
                </Navbar>
            
        )

        
    }
    
}