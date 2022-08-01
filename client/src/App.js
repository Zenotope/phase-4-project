import './App.css';
import { useState, useEffect } from "react";
import { Route, Switch } from 'react-router-dom'
import NavBar from './Components/NavBar'
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
  const [user, setUser] = useState(null)
  const [isLogOn, setIsLogOn] = useState(false)
  const [details, setDetails] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  const[searchInput, setSearchInput] = useState("")
  const [trackId, setTrackId] = useState("")

  //note: can use 'helper functions'
  useEffect(() =>{
    fetch(`http://localhost:3000/tracks/${searchTerm}`)
    .then(res => res.json())
    .then((tracks) => setTracks(tracks))
  }, [searchTerm])

  //keeps user logged in after page refresh
  useEffect(() =>{
    fetch('/me')
    .then(res => {
      if (res.ok) {
        res.json()
        .then(user => setUser(user))
      }
    })
  }, [])

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

  function loginToggle(){
    {user ? setIsLogOn(true) : setIsLogOn(false)}
  }

  useEffect(() => {
    const data = window.sessionStorage.getItem('MY_APP_STATE');
    if (data !== null) setIsLogOn(JSON.parse(data));
  }, []);

  useEffect(() => {
    window.sessionStorage.setItem('MY_APP_STATE', JSON.stringify(isLogOn))
  }, [isLogOn]);

  console.log(isLogOn)

  return (
    <div className="App">
      <NavBar loginToggle={loginToggle} isLogOn={isLogOn} />
      <Switch>
        <Route exact path="/">
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
          <Login onLogin={setUser} loginToggle={loginToggle} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
