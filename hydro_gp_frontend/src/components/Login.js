import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row'
import '../index.css';
import ButtonToolbar from 'react-bootstrap/ButtonToolBar'


export default class Login extends React.Component {
    constructor() {
        super()
        this.state = {
        }
    }

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
                    <Button id="login-btn" variant="outline-primary" type="submit">
                Login
                    </Button>
                    <Button variant="outline-dark" type="submit">
                New user? Click here
                    </Button>
            </ButtonToolbar>
        </Form>
    </Col>
    </Row>
</div>
        )
    }
}

