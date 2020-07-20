import React from "react";
import "./Menu.css";

import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';

function Menu() {
  return (
    <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">BORIE Florian</Navbar.Brand>
        <Nav className="mr-auto">
            <Nav.Link href="/projet">Mes projets</Nav.Link>
            <Nav.Link href="/experience">Mes expériences</Nav.Link>
            <Nav.Link href="http://wwwblogostreicoleflorianboriefr.000webhostapp.com/accueil" target="_blank">Mon blogs</Nav.Link>
        </Nav>
    </Navbar>
    
  );
}

export default Menu;
