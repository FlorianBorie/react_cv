import React from "react";
import "./Home.css";

import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
  
  return ( 
    <div class="app-Home">
      <div className="bloc_presentation">
        <div className="arrondie"><img src={require('../img/photo_cv.png')} style={{width:"300px"}}/></div>
        <div className="presentation">
          <h1>A propos de moi</h1>
          <p></p>
        </div>
      </div>
    </div>
  );
}

export default Home;
