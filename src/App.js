import React from 'react';
import { BrowserRouter } from "react-router-dom";

import './App.css';
import Menu from "./component/Menu.js";
import Footer from "./component/Footer.js";
import Content from "./component/Content.js";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Menu />
        <Content />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
