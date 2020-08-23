import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [stateCar, setStateCar] = useState(false);
  const [contar, setContar] = useState(0);

  const encenderApagar = () => {
    setStateCar(!stateCar);
    // otra forma de hacerlo
    // setStateCar((prevValue) => !prevValue);
    setContar(contar + 1);
  };

  useEffect(() => {
    console.log("Total: " + contar);
  }, [contar + 1]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3>El conche esta: {stateCar ? "Encendido" : "Apagado"}</h3>
        <h4>Cliks: {contar}</h4>
        <button onClick={encenderApagar}>Encender / Apagar</button>
      </header>
    </div>
  );
}

export default App;
