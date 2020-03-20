import React from "react";
import "./App.css";

import SmurfForm from "./SmurfForm";
import SmurfList from "./SmurfList";

const App = () => {
  return (
    <div className="App">
      <h1>Big Papa Smurf's Big List o' Smurfs</h1>
      <p>By Big Papa Smurf</p>
      <SmurfForm />
      <SmurfList />
    </div>
  );
};

export default App;
