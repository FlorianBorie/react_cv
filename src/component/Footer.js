import React from "react";
import "./Footer.css";

import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom"

function Footer() {
  
  return (
    <footer class="app-footer">
        <div>
            <span>&copy; 2019 Copyright  </span>
            <Link to="/">Toto</Link>
        </div>
        
    </footer>
  );
}

export default Footer;
