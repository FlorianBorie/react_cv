import React from "react";
import "./Footer.css";

import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom"

function Footer() {
  
  return (
    <div class="app-footer">
        <div>
            <span>&copy; 2019 Copyright  </span>
            <Link to="/">Toto</Link>
        </div>
        
    </div>
  );
}

export default Footer;
