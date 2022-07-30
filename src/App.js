import { useState, useEffect } from 'react'
import './App.css';
import getGifs from './services/getGifs';

function App() {
  
  const [gifs, setGifs] = useState([])

  useEffect(() => {
    getGifs().then(gifs => setGifs(gifs))
  }, [])

  return (
    <div className="App">
      <section className="App-content">
        {
          gifs.map(gif => {
          return (
            <div>
              <h4>{gif.title}</h4>
              <small>{gif.id}</small>
              <img src={gif.url} alt={gif.title} />
            </div>
          )
        })
        }
      </section>

    </div>
  );
}

export default App;
