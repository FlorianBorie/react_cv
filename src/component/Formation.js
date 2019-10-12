import React from "react";
import "./Formation.css";

import 'bootstrap/dist/css/bootstrap.min.css';

function Formation() {
  
  return (
    <div className="app-formation">
      <div class="fleche"></div>
        <h2 style={{marginBottom:'2%'}}>Mes Formations</h2>
        <div className="bloc_left_formation">
          <div  className="bloc_prepa_ynov">
            <div>
              <h3>Prépa Ynov Campus Opération 1 000 apprentis</h3>
              <p><img className="img_calendar_formation" src={require('../img/calendar.svg')}/>2019</p>
            </div>
            <div>
              <p>Durant cette formation j'ai pu revoir et améliorer les basses que j'ai pu acquérir durant mes deux premières années
                et j'ai pue en apprendre d'autre.</p>  
              <hr/>
              <p><strong>Langages :</strong> JS, HTML, CSS, SQL</p>
              <hr/>
              <p><strong>librairie :</strong> ReactJS, NodeJS</p>
              <hr/>
              <p><strong>Outil :</strong> GIT</p>
            </div>
          </div>
        </div>
        <div className="bloc_right_formation">
          <div className="bloc_deuxieme_annee_ynov">
            <div>
              <h3>Bachelor 2 Ingesup (Ynov)</h3>
              <p><img className="img_calendar_formation" src={require('../img/calendar.svg')}/>2018-2019</p>
            </div>
            <div>
              <p>Durant cette deuxième année de bachelor, ça m'a permi de savoir réélement dans quel domaine je voulais 
                vraiment partir. Du coup j'ai pu approfondir mes connaissances dans les Langages ou je veux m'orienter
                et apprendre un framework comme <strong>Symfony</strong>.</p>
                <hr/>
              <p><strong>Langages :</strong> JS, HTML, CSS, PHP, SQL, JAVA</p>
              <hr/>
              <p><strong>Framework :</strong> Symfony</p> 
              <hr/>
              <p><strong>librairie :</strong> NodeJS</p>
              <hr/>
              <p><strong>Outil :</strong> GIT</p>
            </div>
          </div>
        </div>
        <div className="bloc_left_formation">
          <div className="bloc_premiere_annee_ynov">
            <div>
              <h3>Bachelor 1 Ingesup (Ynov)</h3>
              <p><img className="img_calendar_formation" src={require('../img/calendar.svg')}/>2017-2018</p>
            </div>
            <div>
              <p>Durant cette première année de bachelor, j'ai pu découvrir plusieurs Langages de développement mais aussi les bases 
                dans le réseaux.</p>
                <hr/>
              <p><strong>Langages :</strong> JS, HTML, CSS, SQL, JAVA</p>
              <hr/>
              <p><strong>Outil :</strong> GIT</p>
            </div>
          </div>
        </div>
        <div className="bloc_right_formation">
          <div className="bloc_gms_ceci">
            <div>
              <h3>Booster class Gestionnaire de maintenance et support informatique (CESI)</h3>
              <p><img className="img_calendar_formation" src={require('../img/calendar.svg')}/>2016</p>
            </div>
            <div>
              <p>Durant cette formation, j'ai pu me former dans la communication durant un entretien, à la gestion de l'organisation 
                d'un projet de groupe. Nous avons étais formé dans le domaine du réseaux pour apprendre les bases.</p>
              <hr/>
              <p><strong>logiciels :</strong> Cisco packet tracer</p>
            </div>
          </div>
        </div>
        <div className="bloc_left_formation">
          <div className="bloc_bac_eiffel">
            <div>
              <h3>BAC Sti2D spécialité : <strong>SIN</strong></h3>
              <p><img className="img_calendar_formation" src={require('../img/calendar.svg')}/>2016</p>
            </div>
            <div>
              <p>Durant mes années de bac j'ai pu savoir réelement que je voulais partir dans l'informatique. Puisque ma spécialité,
                ma permis de me familiarisé avec les bases comme l'algorithme, le binaire. J'ai pu durant ma dernière année faire un projet
                avec la plateforme d'arduino qui ma familiarisé avce la programmation. ET aussi savoir s'oganisé pour séparer le projet 
                pour avancer le plus vite possible et finir le projet.</p>
              <hr/>
              <p><strong>Langage :</strong> C</p>
              <hr/>
              <p><strong>logiciels :</strong> Arduino, Cisco</p>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Formation;
