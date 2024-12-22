import React, { Component } from "react";
import css from "./Navigation.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlaneDeparture, faUser } from '@fortawesome/free-solid-svg-icons';
import { Navbar, Nav} from 'react-bootstrap';

class Navigation extends Component {
    render() {
        return (
            <Navbar className={css.spacer} bg="light" expand="lg">
                <Navbar.Brand>Royal Air Maroc</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/Search_fligh/"><FontAwesomeIcon icon={faPlaneDeparture} /> Find a fligh</Nav.Link>
                        <Nav.Link href="Profile"><FontAwesomeIcon icon={faUser} />  Profile & Settings</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>


        ) ;
    }
}

export default Navigation;
