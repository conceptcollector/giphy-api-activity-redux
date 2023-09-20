import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './App.css';

function App() {

  const dispatch = useDispatch();
  const gif = useSelector((store) => store.gif);
  // Renders the entire app on the DOM
  return (
    <div>
      <header className="App-header">
        <h1>Random Giphy API</h1>
      </header>
      
      <p>Results go here</p>
    </div>
  );
}

export default App;
