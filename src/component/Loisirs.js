import React from "react";
import "./Loisirs.css";

import { Row, Col, Card, CardDeck, Container } from 'react-bootstrap';

function Loisirs() {
  
  return (
    <div className="app-loisir">
      <h2 className="titre_loisir">Mes Loisirs</h2>
      <CardDeck>
        <Card>
          <Card.Body>
            <Card.Title>Rugby</Card.Title>
          </Card.Body>
          <Card.Img variant="top" src={require('../img/ynov.png')} />
        </Card>

        <Card>
          <Card.Body>
            <Card.Title>Pelote Basque</Card.Title>
          </Card.Body>
          <Card.Img variant="top" src={require('../img/ynov.png')}/>
        </Card>

        <Card>
          <Card.Body>
            <Card.Title>Plongée sous-marine</Card.Title>
          </Card.Body>
          <Card.Img variant="top" src={require('../img/CESI_Alternance.png')} />
        </Card>

        <Card>
          <Card.Body>
            <Card.Title>Musculation</Card.Title>
          </Card.Body>
          <Card.Img variant="top" src={require('../img/lycee_gustave_eiffel.jpg')} />
        </Card>

        <Card>
          <Card.Body>
            <Card.Title>Voyage</Card.Title>
          </Card.Body>
          <Card.Img variant="top" src={require('../img/lycee_gustave_eiffel.jpg')} />
        </Card>

        <Card>
          <Card.Body>
            <Card.Title>Informatique</Card.Title>
          </Card.Body>
          <Card.Img variant="top" src={require('../img/lycee_gustave_eiffel.jpg')} />
        </Card>
      </CardDeck>
    </div>
  );
}
export default Loisirs;