import React from "react";
import "./Content.css";

import { Route } from "react-router-dom";
import Home from "../pages/Home.js"
import Projet from "../pages/Projet.js";
import Experience from "../pages/Experience";

function Content() {
  
  return (
    <div className="Content">
      <Route exact path="/" component={Home} />
      <Route exact path="/projet" component={Projet}/>
      <Route exact path="/experience" component={Experience}/>
    </div>
  );
}

export default Content;
