import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {Card, Container} from 'react-bootstrap';
import '../index.css';
import logo from '../images/circle-cropped.png'
import Login from './Login';
import { PDFDownloadLink } from "@react-pdf/renderer";
import ConvertToPdf from './ConvertToPdf';
import 'bootstrap/dist/css/bootstrap.min.css';

const USERS_URL = ('http://localhost:3000/users')

export default class Dashboard extends React.Component {
    constructor() {
        super()
        this.state = {
            display: false,
            email: "",
            first_name: "",
            last_name: "",
            password: "", 
            loggedIn: false
        }
    }

    renderLoginComp = () => {
        if (!this.state.display) {
        this.setState({
            ...this.state,
            display: true
        })
    } else {
        this.setState({
            ...this.state,
            display: false
        })
    }
}

    handleChange = (event) => {
        const value = event.target.value
        this.setState({
            ...this.state,
            [event.target.name]: value
        })
    }

    handleLogin = (event) => {
        event.preventDefault()
        const postObj = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                first_name: this.state.first_name,
                last_name: this.state.last_name,
                email: this.state.email,
                password: this.state.password
            })
        }
        fetch(USERS_URL, postObj)
        .then(resp => resp.json())
        .then(userObj => console.log(userObj))
        this.setState({
            loggedIn: true
        }, () => {
            // this.renderLoginComp();
            this.props.history.push('/participant-registration')
        });
      }

    handleChange = (event) => {
        this.setState ({
            ...this.state, 
            first_name: "",
            last_name: "",
            email: "",
            password: ""
        })
    }

    handleLogout = () => {
        return this.setState({
            ...this.state,
            loggedIn: false,
            display: true
        })
    }

    
    
    

    render () {
        return (
            <div className="dashboard">
                            <Navbar bg="light" variant="light">
              <Navbar.Brand href="/dashboard">      
                <img alt="" src={logo} width="42" height="42" className="d-inline-block align-top"/>
                {' '}HydroGP
              </Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/participant-registration">Participant Registration</Nav.Link>
                    <Nav.Link href="#pricing">Volunteer Registration</Nav.Link>
                </Nav>
                <Form inline> 
                    {!this.state.loggedIn ? 
                        <Button onClick={this.renderLoginComp} variant="outline-info">Login/Create Account</Button>
                        :
                        <Button onClick={this.handleLogout} variant="outline-info">Logout</Button>
                    }   
                    </Form>
            </Navbar>
            <div className="dash-div">
            {this.state.display ?
                <Login className="login-form" handleLogin={this.handleLogin}
                       handleChange={this.handleChange} 
                ></Login>
            :
            // <div>
            //     <h1 className="justify-self-center">Your Completed Forms:
            //     </h1>
            //     <div className="pdf-link-container">
            //      <PDFDownloadLink className="pdf-link" document={<ConvertToPdf formValues={this.props.formValues} />} fileName="entryform.pdf">
            //         {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Download now!')}
            //      </PDFDownloadLink>
            //     </div>
            // </div>
            <Container>
            <Card className="text-center">
            <Card.Header>Your Completed Forms</Card.Header>
            <Card.Body>
              <Card.Title> <PDFDownloadLink className="pdf-link" document={<ConvertToPdf formValues={this.props.formValues} />} fileName="entryform.pdf">
                     {({ blob, url, loading, error }) => (loading ? 'Loading document...' : '2020 Grand Prix Entry Form')}
                        </PDFDownloadLink></Card.Title>
              <Card.Text>
                Sign this form and hand in to officials once you arrive at the Championship location.
              </Card.Text>
              <Button variant="primary">Edit your form</Button>
            </Card.Body>
            <Card.Footer className="text-muted">Each participant on a team must complete a separate entry form to be eligible to compete.</Card.Footer>
          </Card>
          </Container>
            }
            
            </div>
        </div>
        )
    }
}