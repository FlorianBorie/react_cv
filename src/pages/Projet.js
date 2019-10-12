import React from "react";
import "./Projet.css";

import 'bootstrap/dist/css/bootstrap.min.css';

export default class Projet extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    }
  }

  openLinkTchanqueeTeam(){
    window.open("http://www.tchanqueeteam.fr/");
  }

  openLinkSymphonyPilotari(){
    window.open("https://github.com/Borixx33/symfony_pilotari_gujan");
  }

  openLinkSymphonyBlog(){
    window.open("https://github.com/Borixx33/SymfonyForum");
  }

  openLinkNodeJs(){
    window.open("https://github.com/Borixx33/NodeJS_projet");
  }

  openLinkMonopolyFight(){
    window.open("https://github.com/Borixx33/Monopoly-Fight");
  }
  openLinkBlocEte(){
    window.open("https://wwwblogostreicoleflorianboriefr.000webhostapp.com/accueil");
  }


  render(){
    return (
      <div class="app-projet">
          <div>
              <h1 style={{marginBottom: '4%', marginTop: '1%'}}>Mes projets</h1>
              <div className="row">
                <div className="col-md-5 mt-5">
                  <div>
                    <img className="img_bloc" src={require('../img/pilotari.jpg')}/>
                  </div>
                  <div className="projet_symfony_pilotari" >
                    <p className="Title_projet"><img className="img_projet" src={require('../img/symfony.svg')} /> Pilotari Gujannais</p>
                    <p><u>Description </u>: Site pour un club de pelote basque, qui m'a permis de me familiarisé et d'apprendre une nouvelle technologies.
                      Durant, ma deuxième année.</p>
                    <p><u>Technologies utilisées </u>: HTML, CSS, PHP, Bootstrap, Symfony</p>
                    <button className="btn btn-outline-dark"  onClick={this.openLinkSymphonyPilotari}><img className="img_lien" style={{width: '17px', marginRight: '4px', paddingBottom: '3px'}} src={require('../img/github.svg')}></img>Github</button>
                  </div>
                </div>
                <div className="col-md-5 mt-5">
                  <div>
                    <img className="img_bloc" src={require('../img/symfony.jpg')} style={{width: '87%'}}/>
                  </div>
                  <div className="projet_symphony_blog">
                    <p className="Title_projet"><img className="img_projet" src={require('../img/symfony.svg')}/> Blog Symfony</p>
                    <p><u>Description </u>: J'ai réalisé un blog qui m'a permis de mieux connnaitre le Framework. Et de renforcé les bases que j'ai 
                    pue acquérir durant mon premier projet.</p>
                    <p><u>Technologies utilisées </u>: HTML, CSS, PHP, Bootstrap, Symfony</p>
                    <button className="btn btn-outline-dark"  onClick={this.openLinkSymphonyBlog}><img className="img_lien" style={{width: '17px', marginRight: '4px', paddingBottom: '3px'}} src={require('../img/github.svg')}></img>Github</button>
                  </div>
                </div>
                <div className="col-md-5 mt-5">
                  <div>
                    <img className="img_bloc" src={require('../img/nodeJs.jpg')} style={{width: '74%'}}/>
                  </div>
                  <div className="projet_node_js">
                    <p className="Title_projet"><img className="img_projet" src={require('../img/node.svg')} style={{width:'30px'}}/> Mytwit</p>
                    <p><u>Description </u>: J'ai réalisé une api sur twitter qui me permet de chercher sur mon twitter des concours ou des images,
                    Selon l'hashtag que l'utilisateur à mis.</p>
                    <p><u>Technologie utilisée </u>: NodeJS</p>
                    <button className="btn btn-outline-dark" onClick={this.openLinkNodeJs}><img className="img_lien" style={{width: '17px', marginRight: '4px', paddingBottom: '3px'}} src={require('../img/github.svg')}></img>Github</button>
                  </div>
                </div>
                <div className="col-md-5 mt-5">
                  <div>
                    <img className="img_bloc" src={require('../img/tchanqueeTeam.jpg')} style={{width: '36%'}}/>
                  </div>
                  <div className="projet_tchanquee_team">
                      <p className="Title_projet"><img className="img_projet" src={require('../img/wordpress.svg')}/> Tchanquée Team</p>
                      <p><u>Description </u>: J'ai fait ce site pour une association qui fait des marathons ou semi-marathon, pour 
                      d'autre association d'enfant malade.</p>
                      <p><u>Technologie utilisée </u>: HTML, CSS, Wordpress</p>
                      <button className="btn btn-outline-info"  onClick={this.openLinkTchanqueeTeam.bind(this)}><img className="img_lien" style={{width: '17px', marginRight: '4px', paddingBottom: '3px'}} src={require('../img/globe-europe.svg')}></img>Site</button>
                  </div>                 
                </div>
                <div className="col-md-5 mt-5">
                  <div>
                    <img className="img_bloc" src={require('../img/reactJs.png')} style={{width: '82%'}}/>
                  </div>
                  <div className="projet_monopoly_fight">
                      <p className="Title_projet"><img className="img_projet" src={require('../img/react.svg')}/> Monolpoly Fight</p>
                      <p><u>Description </u>: Ce projet ma permit de connaitre la librairie React, mais aussi de pouvoir m'améliorer dans les autres
                      langages que je connaissé déjà qui m'a permis de réalisé se projet en groupe.</p>
                      <p><u>Technologie utilisée </u>: HTML, CSS, Bootstrap, ReactJS, NodeJS, SQL</p>
                      <button className="btn btn-outline-dark" onClick={this.openLinkMonopolyFight}><img className="img_lien" style={{width: '17px', marginRight: '4px', paddingBottom: '3px'}} src={require('../img/github.svg')}></img>Github</button>
                  </div>
                </div>
                <div className="col-md-5 mt-5">
                  <div>
                    <img className="img_bloc" src={require('../img/blogEte.jpg')} style={{width: '85%'}}/>
                  </div>
                  <div className="projet_blog_ete">
                      <p className="Title_projet"><img className="img_projet" src={require('../img/wordpress.svg')}/> Blog D'été</p>
                      <p><u>Description </u>: J'ai fait ce site, pour parler des différentes expériences que j'ai pu réaliser durant les été 2018 et 2019.</p>
                      <p><u>Technologie utilisée </u>: HTML, CSS, Wordpress</p>
                      <button className="btn btn-outline-info"  onClick={this.openLinkBlocEte.bind(this)}><img className="img_lien" style={{width: '17px', marginRight: '4px', paddingBottom: '3px'}} src={require('../img/globe-europe.svg')}></img>Site</button>
                  </div>                 
                </div>
              </div>
          </div>
      </div>
    );
  }
}