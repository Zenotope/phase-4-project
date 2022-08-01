import './App.css';
import { useState, useEffect } from "react";
import { Route, Switch } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Favorites from './Components/Favorites';
import Search from './Components/Search';
import SongDetail from './Components/SongDetail';
import SearchBar from './Components/SearchBar';
import Login from './Components/Login';
import { useHistory } from 'react-router-dom';

function App() {
  const [tracks, setTracks] = useState([])
  const [detailView, setDetailView] = useState(false)
  const [songSelection, setSongSelection] = useState({})
  const [details, setDetails] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  const[searchInput, setSearchInput] = useState("")
  const [trackId, setTrackId] = useState("")

  useEffect(() =>{
    fetch(`http://localhost:3000/tracks/${searchTerm}`)
    .then(res => res.json())
    .then((tracks) => setTracks(tracks))
  }, [searchTerm])

  useEffect(()=> {
    fetch(`http://localhost:3000/details/${trackId}`)
    .then(res => res.json())
    .then((details)=> setDetails(details))
  }, [trackId])

  function handleChange(input){
   setSearchInput(input)
  }

  const searchClick = (e) =>{
    e.preventDefault()
    setSearchTerm(searchInput) 
  }

  const history = useHistory(); 
  function onMoreInfoClick(e, track){
    setDetailView(true)
    history.push(`/details/?id=${track.id}`)
    setTrackId(track.id)
    setSongSelection(track)
   
  }

  function goBack(){
    setDetailView(false)
    history.push("/")
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
            <SearchBar searchClick={searchClick} handleChange={handleChange}/>
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
