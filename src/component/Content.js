import React from "react";
import "./Content.css";

import { Route } from "react-router-dom";
import Home from "../pages/Home.js"

function Content() {
  
  return (
    <div className="Content">
      <Route exact path="/" component={Home} />
    </div>
  );
}

export default Content;
