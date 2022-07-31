import React from "react";
import { Route, Link } from "wouter";
import "./App.css";
import ListOfGifs from "./components/ListOfGifs";

function App() {
  return (
    <div className="App">
      <section className="App-content">
        <Route
          path="/gif/:keyword"
          component={ListOfGifs}
        />
        <h1>Gifeate</h1>
        <Link to="/gif/argentina">Gifs de Argentina</Link>
        <Link to="/gif/red+panda">Gifs de panda rojo</Link>
        <Link to="/gif/fast+and+furious">Gifs de rápido y furioso</Link>
      </section>
    </div>
  );
}

export default App;
