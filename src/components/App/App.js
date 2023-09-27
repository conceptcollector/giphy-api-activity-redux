import { useState } from 'react';
import axios from 'axios';

import './App.css';

function App() {

  const [randomGif, setRandomGif] = useState([]);

  const fetchRandomGif = () => {
    axios({
      method: 'GET',
      url: '/random'
    }).then((response) => {
      setRandomGif(response.data);
    })
  }

  // Renders the entire app on the DOM
  return (
    <div>
      <header className="App-header">
        <h1>Random Giphy API</h1>
      </header>
      
      <p>Results go here</p>
      <button onClick={fetchRandomGif}>Gimme Gif!</button>
      <div>
        {randomGif}
      </div>
    </div>
  );
}

export default App;
