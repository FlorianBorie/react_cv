import React from "react";
import "./Formation.css";

import { Row, Col, Card, CardDeck, Container } from 'react-bootstrap';

function Formation() {
  
  return (
    <div className="app-formation">
      <h2 className="titre_formation">Mes Formations</h2>
      <CardDeck>
        <Card>
          <Card.Img variant="top" src={require('../img/ynov.png')} />
          <Card.Body>
            <Card.Title>Master Expert Informatique et Systèmes d'Information à Ingésup Campus Ynov Bordeaux</Card.Title>
            <Card.Text>
            <p>Durant c'est trois première année j'ai pu découvrir plusieurs languages qui mon permit de choisir dans quel dommaine je
              voulais m'orienter, c'est pour ça que durant ma troisième année j'ai commencer à travailler plus dans le dommaine du développement
              Web.
            </p>
              <hr/>
            <p><strong>Langages :</strong> JS, HTML, CSS, PHP, SQL</p>
            <hr/>
            <p><strong>Framework :</strong> Symfony</p> 
            <hr/>
            <p><strong>librairie :</strong> NodeJS, ReactJS, React Native</p>
            <hr/>
            <p><strong>Outil :</strong> GIT</p>
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <img className="img_calendar_formation" src={require('../img/calendar.svg')}/>Depuis 2017
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src={require('../img/ynov.png')}/>
          <Card.Body>
            <Card.Title>Prépa Ynov Campus Opération 1000 apprentis</Card.Title>
            <Card.Text>
              <p>Durant cette formation j'ai pu revoir et améliorer les basses que j'ai pu acquérir durant mes deux premières années
                et j'ai pu en apprendre d'autre. J'ai pu aussi améliorer et gérer mon stress quand on parle devant du monde, mais aussi travailler en équipe.</p>  
              <hr/>
              <p><strong>Langages :</strong> JS, HTML, CSS, SQL</p>
              <hr/>
              <p><strong>librairie :</strong> ReactJS, NodeJS</p>
              <hr/>
              <p><strong>Outil :</strong> GIT</p>
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <img className="img_calendar_formation" src={require('../img/calendar.svg')}/>2019
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src={require('../img/CESI_Alternance.png')} />
          <Card.Body>
            <Card.Title>Booster class Gestionnaire de maintenance et support informatique (CESI)</Card.Title>
            <Card.Text>
              <p>Durant cette formation, j'ai pu me former dans la communication durant un entretien, à la gestion de l'organisation 
                d'un projet de groupe. Nous avons étais formé dans le domaine du réseaux pour apprendre les bases.</p>
              <hr/>
              <p><strong>logiciels :</strong> Cisco packet tracer</p>
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <img className="img_calendar_formation" src={require('../img/calendar.svg')}/>2016
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src={require('../img/lycee_gustave_eiffel.jpg')} />
          <Card.Body>
            <Card.Title>BAC Sti2D spécialité : SIN</Card.Title>
            <Card.Text>
              <p>Durant mes années de bac j'ai pu savoir réelement que je voulais partir dans l'informatique. Puisque ma spécialité,
                ma permis de me familiarisé avec les bases comme l'algorithme, le binaire. J'ai pu durant ma dernière année faire un projet
                avec la plateforme d'arduino qui ma familiarisé avce la programmation. ET aussi savoir s'oganisé pour séparer le projet 
                pour avancer le plus vite possible et finir le projet.</p>
              <hr/>
              <p><strong>Langage :</strong> C</p>
              <hr/>
              <p><strong>logiciels :</strong> Arduino, Cisco</p>
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <img className="img_calendar_formation" src={require('../img/calendar.svg')}/>2016
          </Card.Footer>
        </Card>
      </CardDeck>
    </div>
  );
}

export default Formation;
