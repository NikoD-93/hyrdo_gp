import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import { Link } from 'react-router-dom'
import '../index.css';
import logo from '../images/circle-cropped.png'
import ButtonToolbar from 'react-bootstrap/ButtonToolBar'
import FormControl from 'react-bootstrap/FormControl'

// const USERS_URL = ('http://localhost:3000/users')

export default class Login extends React.Component {
    constructor() {
        super()
        this.state = {
            // email: "",
            // first_name: "",
            // last_name: "",
            // password: ""
        }
    }

    // handleChange = (event) => {
    //    const value = event.target.value
    //     this.setState({
    //         ...this.state,
    //         [event.target.name]: value
    //     })
    // }

    // handleLogin = (event) => {
    //   event.preventDefault()
    //   const postObj = {
    //       method: "POST",
    //       headers: {
    //           "Content-Type": "application/json",
    //           "Accept": "application/json"
    //       },
    //       body: JSON.stringify({
    //           first_name: this.state.first_name,
    //           last_name: this.state.last_name,
    //           email: this.state.email,
    //           password: this.state.password
    //       })
    //   }
    //   fetch(USERS_URL, postObj)
    //   .then(resp => resp.json())
    //   .then(userObj => console.log(userObj))
    //   this.props.handleLogin()
    // }

    render() {
        console.log(this.props)
        return (
            <div className="login">
                <Row >
                 <Col lg={{ span: 4, offset: 4 }}>
               <Form id="form-login" onSubmit={ (event) => {this.props.handleLogin(event)}} className="rounded border border-dark">
                <h4 className= "text-center" style={{color: "black"}}>Login</h4>
                <Form.Group controlId="formBasicFirstName">
                <Form.Label>First name</Form.Label>
                <Form.Control onChange={(event) => {this.props.handleChange(event)}} name="first_name" value={this.state.first_name} type="first_name" placeholder="Enter first name" />
                </Form.Group>
                <Form.Group controlId="formBasicLastName">
                <Form.Label>Last name</Form.Label>
                <Form.Control onChange={(event) => {this.props.handleChange(event)}} name="last_name" value={this.state.last_name} type="last_name" placeholder="Enter last name" />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control onChange={(event) => {this.props.handleChange(event)}} name="email" value={this.state.email} type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control onChange={(event) => {this.props.handleChange(event)}} name="password" value={this.state.password} type="password" placeholder="Password" />
                </Form.Group>
                <ButtonToolbar
                    className="justify-content-between" >
                {/* <ButtonGroup> */}
                    <Button id="login-btn" variant="outline-primary" type="submit">
                Login
                    </Button>
                    <Button variant="outline-dark" type="submit">
                New user? Click here
                    </Button>
                {/* </ButtonGroup> */}
            </ButtonToolbar>
        </Form>
    </Col>
    </Row>
</div>
        )
    }
}

