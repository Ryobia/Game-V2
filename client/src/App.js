import React, { useState } from "react";
import Game from './components/Game';
import Menu from "./components/Menu";


function App() {
  return (
    <div className="App">
      <Menu></Menu>
      <Game></Game>
    </div>
  );
}

export default App;
