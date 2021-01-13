import React from "react";
import "./Home.css";

import 'bootstrap/dist/css/bootstrap.min.css';
import Formation from "../component/Formation.js"
import Loisirs from "../component/Loisirs";

export default class Home extends React.Component {
  constructor(props){
    super(props);
    this.state = {
     
    }
  }

  openLinkLinkedin(){
    window.open("https://www.linkedin.com/in/florian-borie-a7b973172/");
  }
  openLinkGithub(){
    window.open("https://github.com/FlorianBorie");
  }
  openLinkGitlab(){
    window.open("https://gitlab.com/users/FloBorie/projects");
  }
  render(){
    
    return ( 
      <div className="app-Home">
        <div className="bloc_presentation">
          <div className="img_profil">
            <h1><u>A propos de moi </u>:</h1>
            <img src={require('../img/photo_cv.png')} style={{width:"300px"}}/>
          </div>
          <div className="presentation">
            <h2><strong>BORIE Florian</strong></h2>
            <h2><strong>#Dévelopeur</strong></h2>
            <p>Je suis actuellement en troisième année à Ingesup afin de préparer <strong>un titre d'expert en 
              informatique et système d'information</strong>.
            </p>
            <p>Je me spécialise dans le développement web, après je ne suis pas plus back-end ou front-end j'aime bien les deux 
              puisque j'ai eu l'occasion de pratiquer le framework <strong><u>Symfony</u></strong> pour le back-end et 
              la librairie <strong><u>ReactJS</u></strong> pour le front-end. 
            </p>
          </div>
          <div className="btn_lien">
            <button className="btn btn-outline-primary" onClick={this.openLinkLinkedin.bind(this)}><img className="img_lien" src={require('../img/linkedin.png')}></img>Linkedin</button>
            <button className="btn btn-outline-dark" style={{marginLeft:'5%'}} onClick={this.openLinkGithub.bind(this)}><img className="img_lien" style={{width: '17px', marginRight: '4px', paddingBottom: '3px'}} src={require('../img/github.svg')}></img>Github</button>
            <button className="btn btn-outline-danger" style={{marginLeft:'5%'}} onClick={this.openLinkGitlab.bind(this)}><img className="img_lien" style={{width: '20px', marginRight: '4px', paddingBottom: '3px'}} src={require('../img/gitlab.png')}></img>Gitlab</button>
          </div>
        </div>
        <Formation/>
        <Loisirs/>
      </div>
    );
  }

}