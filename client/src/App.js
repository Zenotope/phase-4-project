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
  const [details, setDetails] = useState([])

  useEffect(() =>{
    fetch('http://localhost:3000/tracks')
    .then(res => res.json())
    .then((tracks) => setTracks(tracks))
  }, [])

  useEffect(()=> {
    fetch('http://localhost:3000/details')
    .then(res => res.json())
    .then((details)=> setDetails(details))
  }, [])

  function onMoreInfoClick(e, track){
    setDetailView(true)
    console.log(track.id)
    
    // fetch("http://localhost:3000/songid",{
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //    },
    //    body: JSON.stringify(track.id)
    // })
    // .then((r) => r.json())
    // .then((newParty) => console.log(track.id))
  
    setSongSelection(track)
   

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
            <SongDetail 
              goBack={goBack}
              details ={details}
              track={songSelection}
            />
          ): (<div>
            <SearchBar />
            <Search tracks={tracks} onMoreInfoClick={onMoreInfoClick} goBack={goBack}/>
            </div>
            
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
