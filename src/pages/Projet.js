import React from "react";
import "./Projet.css";

import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom"

function Projet() {
  
  return (
    <div class="app-Projet">
        <div>
            <h1>Mes projets</h1>
            <div className="projet_symfony_pilotari">
              <p><img src={require('../img/symfony.svg')} style={{width:'25px'}}/> Pilotari Gujannais</p>
              <p><u>Description </u>: Site pour un club de pelote basque, qui m'a permis de me familiarisé et d'apprendre une nouvelle technologies.
                Durant, ma deuxième année.</p>
              <p><u>Technologies utilisées </u>: HTML, CSS, PHP, Bootstrap, Symfony</p>
              <button className="btn btn-outline-dark" style={{marginLeft:'5%'}}><img className="img_lien" style={{width: '17px', marginRight: '4px', paddingBottom: '3px'}} src={require('../img/github.svg')}></img>Github</button>
            </div>
            <div className="projet_symphony_blog">
              <p><img src={require('../img/symfony.svg')} style={{width:'25px'}}/> Blog Symfony</p>
              <p><u>Description </u>: J'ai réalisé un blog qui m'a permis de mieux connnaitre le Framework. Et de renforcé les bases que j'ai 
              pue acquérir durant mon premier Projet.</p>
              <p><u>Technologies utilisées </u>: HTML, CSS, PHP, Bootstrap, Symfony</p>
              <button className="btn btn-outline-dark" style={{marginLeft:'5%'}}><img className="img_lien" style={{width: '17px', marginRight: '4px', paddingBottom: '3px'}} src={require('../img/github.svg')}></img>Github</button>
            </div>
            <div className="projet_node_js">
              <p><img src={require('../img/node.svg')} style={{width:'30px'}}/> Mytwit</p>
              <p><u>Description </u>: J'ai réalisé une api sur twitter qui me permet de chercher sur mon twitter des concours ou des images,
              Selon l'hashtag que l'utilisateur à mis.</p>
              <p><u>Technologie utilisée </u>: NodeJS</p>
              <button className="btn btn-outline-dark" style={{marginLeft:'5%'}}><img className="img_lien" style={{width: '17px', marginRight: '4px', paddingBottom: '3px'}} src={require('../img/github.svg')}></img>Github</button>
            </div>
            <div className="projet_monopoly_fight">
              <p><img src={require('../img/react.svg')} style={{width:'25px'}}/> Monolpoly Fight</p>
              <p><u>Description </u>: Ce projet ma permit de connaitre la librairie React, mais aussi de pouvoir m'améliorer dans les autres
              langages que je connaissé déjà qui m'a permis de réalisé se projet en groupe.</p>
              <p><u>Technologie utilisée </u>: HTML, CSS, Bootstrap, ReactJS, NodeJS, SQL</p>
              <button className="btn btn-outline-dark" style={{marginLeft:'5%'}}><img className="img_lien" style={{width: '17px', marginRight: '4px', paddingBottom: '3px'}} src={require('../img/github.svg')}></img>Github</button>
            </div>
            <div className="projet_tchanquee_team">
              <p><img src={require('../img/wordpress.svg')} style={{width:'25px'}}/> Tchanquée Team</p>
              <p><u>Description </u>: J'ai fait ce site pour une association qui fait des marathons ou semi-marathon, pour 
              d'autre association d'enfant malade.</p>
              <p><u>Technologie utilisée </u>: HTML, CSS, Wordpress</p>
              <button className="btn btn-outline-info" style={{marginLeft:'5%'}}><img className="img_lien" style={{width: '17px', marginRight: '4px', paddingBottom: '3px'}} src={require('../img/globe-europe.svg')}></img>Site</button>
            </div>
        </div>
    </div>
  );
}

export default Projet;
