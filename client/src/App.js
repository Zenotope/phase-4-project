import './App.css';
import { useState, useEffect } from "react";
import { Route, Switch } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Favorites from './Components/Favorites';
import Search from './Components/Search';
import SongDetail from './Components/SongDetail';
import SearchBar from './Components/SearchBar';
import Login from './Components/Login';

function App() {
  const [tracks, setTracks] = useState([])
  const [detailView, setDetailView] = useState(false)
  const [songSelection, setSongSelection] = useState({})

  useEffect(() =>{
    fetch('http://localhost:3000/tracks')
    .then(res => res.json())
    .then((tracks) => setTracks(tracks))
  }, [])



  function onMoreInfoClick(e, song){
    setDetailView(true)
    setSongSelection(song)
  }
  function goBack(){
    setDetailView(false)
  }


  return (
    <div className="App">
      <Navbar/>     
      <Switch>
        <Route exact patch="/">
          {detailView ? (
            <SearchBar />
            <Search tracks={tracks} onMoreInfoClick={onMoreInfoClick} goBack={goBack}/>
          ): (
            <SongDetail goBack={goBack}/>
          )
        }
        </Route>
        <Route path="/login">
          <Login />
        </Route>
      </Switch>

    </div>
  );
}

export default App;
