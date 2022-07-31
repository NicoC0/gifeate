import React from "react";
import { Route } from "wouter";
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
        <a href="/gif/argentina">Gifs de Argentina</a>
        <a href="/gif/red+panda">Gifs de panda rojo</a>
        <a href="/gif/fast+and+furious">Gifs de rápido y furioso</a>
      </section>
    </div>
  );
}

export default App;
