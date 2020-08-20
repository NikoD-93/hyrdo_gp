import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row'
import '../index.css';
import logo from '../images/circle-cropped.png'

export default class SignUp extends React.Component {
    constructor() {
        super()
        this.state = {
            email: "",
            first_name: "",
            last_name: "",
            password: ""
        }
    }

    render() {
        return (
            <div className="login">
            <Navbar bg="light" variant="light">
              <Navbar.Brand href="#home">      
                <img alt="" src={logo} width="42" height="42" className="d-inline-block align-top"/>
                {' '}HydroGP
              </Navbar.Brand>
                <Nav className="mr-auto">
                </Nav>
            </Navbar>
                <Row >
                 <Col lg={{ span: 4, offset: 4 }}>
               <Form className="rounded border border-dark">
                <h4 className= "text-center">Create Account</h4>
                <Form.Group controlId="formBasicFirstName">
                <Form.Label>First name</Form.Label>
                <Form.Control type="first_name" placeholder="Enter first name" />
                </Form.Group>
                <Form.Group controlId="formBasicLastName">
                <Form.Label>Last name</Form.Label>
                <Form.Control type="email" placeholder="Enter last name" />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                Login
                </Button>
            </Form>
           </Col>
           </Row>
    </div>
        )
    }
}