import './App.css';
import { useState, useEffect } from "react";
import { Route, Switch } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Favorites from './Components/Favorites';
import Search from './Components/Search';
import SongDetail from './Components/SongDetail';
import Login from './Components/Login';

function App() {
  const [tracks, setTracks] = useState([])

  useEffect(() =>{
    fetch('http://localhost:3000/tracks')
    .then(res => res.json())
    .then((tracks) => setTracks(tracks))
  }, [])

  console.log(tracks)

  return (
    <div className="App">
      <Navbar/>
      <Search tracks={tracks}/>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
