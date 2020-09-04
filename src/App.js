import React, { useState, useEffect } from "react";
import { getVideos } from "./api/Jorge";
import ListadeVideos from "./components/ListadeVideos";
import "./App.css";

function App() {
  const [stateCar, setStateCar] = useState(false);
  const [lista, setLista] = useState([]);
  const [contar, setContar] = useState(0);

  const HandlerJorge = () => {
    getVideos().then((json) => {
      setLista(json);
    });
  };

  useEffect(() => {
    getVideos().then((json) => {
      setLista(json);
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <ListadeVideos lista={lista} />
        <button className="btn btn-info p-30" Click={HandlerJorge}>
          UpdateJorgeAPI
        </button>
      </header>
    </div>
  );
}

export default App;
