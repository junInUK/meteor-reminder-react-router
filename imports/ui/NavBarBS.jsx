import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';

const NavbarBS = () => {

    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/reminders">Reminder App</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/reminders">Reminder List</Nav.Link>
                    <Nav.Link href="/reminders-calendar">Reminder Calendar</Nav.Link>
                    <Nav.Link href="/reminders/create">Add Reminde</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavbarBS;
