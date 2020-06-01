import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../index.css';
import logo from '../images/circle-cropped.png'
import Login from './Login';
import { PDFDownloadLink } from "@react-pdf/renderer";
import ConvertToPdf from './ConvertToPdf';



export default class Dashboard extends React.Component {
    constructor() {
        super()
        this.state = {
            display: false
        }
    }

    renderLoginComp = () => {
        if (!this.state.display) {
        this.setState({
            display: true
        })
    } else {
        this.setState({
            display: false
        })
    }
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
                    <Button onClick={this.renderLoginComp} variant="outline-info">Login/Create Account</Button>
                    </Form>
            </Navbar>
            <div className="dash-div">
            {this.state.display
            ?
                <Login handleLogin={this.renderLoginComp}></Login>
            :
            <div>
                <h1 className="justify-self-center">Your Completed Forms:
                </h1>
                 <PDFDownloadLink document={<ConvertToPdf />} fileName="entryform.pdf">
                    {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Download now!')}
                 </PDFDownloadLink>
            </div>
            }
            
            </div>
        </div>
        )
    }
}