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
          <Card.Img variant="top" src={require('../img/rugby.jpg')} />
        </Card>

        <Card>
          <Card.Body>
            <Card.Title>Pelote Basque</Card.Title>
          </Card.Body>
          <Card.Img variant="top" src={require('../img/pelote_basque.jpg')}/>
        </Card>

        <Card>
          <Card.Body>
            <Card.Title>Plongée sous-marine</Card.Title>
          </Card.Body>
          <Card.Img variant="top" src={require('../img/plongee_sous_marine.jpg')} />
        </Card>

        <Card>
          <Card.Body>
            <Card.Title>Musculation / CrossFit</Card.Title>
          </Card.Body>
          <Card.Img variant="top" src={require('../img/crossfit-ou-musculation.png')} />
        </Card>

        <Card>
          <Card.Body>
            <Card.Title>Voyage</Card.Title>
          </Card.Body>
          <Card.Img variant="top" src={require('../img/voyage.jpg')} />
        </Card>

        <Card>
          <Card.Body>
            <Card.Title>Informatique</Card.Title>
          </Card.Body>
          <Card.Img variant="top" src={require('../img/informatique.jpg')} />
        </Card>
      </CardDeck>
    </div>
  );
}
export default Loisirs;