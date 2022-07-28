import './App.css';
import { useState, useEffect } from "react";
import Navbar from './Components/Navbar'
import Favorites from './Components/Favorites';
import Search from './Components/Search';
import SongDetail from './Components/SongDetail';
import SearchBar from './Components/SearchBar';

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
      <SearchBar />
      {detailView ? (
        <Search tracks={tracks} onMoreInfoClick={onMoreInfoClick} goBack={goBack}/>
      ): (
        <SongDetail goBack={goBack}/>
      )
    }
      
    </div>
  );
}

export default App;
