import './App.css';
import { useState, useEffect } from "react";
import { Route, Switch } from 'react-router-dom'
import NavBar from './Components/NavBar'
import About from './Components/About';
import Favorites from './Components/Favorites';
import Search from './Components/Search';
import SongDetail from './Components/SongDetail';
import SearchBar from './Components/SearchBar';
import Login from './Components/Login';
import { useHistory } from 'react-router-dom';
import CreateAccount from './Components/CreateAccount';

function App() {
  const [tracks, setTracks] = useState([])
  const [detailView, setDetailView] = useState(false)
  const [songSelection, setSongSelection] = useState([])
  const [user, setUser] = useState({id: 0, username: "Guest"})
  const [isLogOn, setIsLogOn] = useState(false)
  const [details, setDetails] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  const [searchInput, setSearchInput] = useState("")
  const [trackId, setTrackId] = useState("")
  const [favorites, setFavorites] = useState([])
  const [userId, setUserId] = useState("")

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
        .then(setIsLogOn(true))
      }
    })
  }, [])

  function loginToggle(){
    {isLogOn === true ? setIsLogOn(true) : setIsLogOn(false)}
    window.sessionStorage.setItem('MY_APP_STATE', isLogOn)
    window.sessionStorage.getItem('MY_APP_STATE')
  }

  useEffect(()=> {
    fetch(`http://localhost:3000/details/${trackId}`)
    .then(res => res.json())
    .then((details)=> setDetails(details))
  }, [trackId])
  
  // const userId = user.id
  // console.log(userId)
  // console.log(user.id) 
 
  useEffect(()=>{
    fetch('http://localhost:3000/favorites')
    .then(res => res.json())
    .then((favorites)=> setFavorites(favorites.filter((favorite) => favorite.user_id === user.id)))
  }, [user])

// console.log(favorites)

  function handleChange(input){
   setSearchInput(input)
  }

  const searchClick = (e) =>{
    e.preventDefault()
    setSearchTerm(searchInput) 
  }

  const history = useHistory(); 
  const [artist, setArtists] = useState("")
  const [album, setAlbum] = useState("")
  const [albumArt, setAlbumArt] = useState("")

  function onMoreInfoClick(e, track, id, artists,  album, albumArt){
    setArtists(artists)
    setAlbum(album)
    setAlbumArt(albumArt)
    setDetailView(true)
    setSongSelection(track)
    setTrackId(id)
    history.push(`/details/${id}`)
  }

  function goBack(){
    setDetailView(false)
    history.push("/home")
  }

function onRemoveFavorite(id){
   const updatedFavorties =
  favorites.filter((favorite) => favorite.id !== id)
  setFavorites(updatedFavorties)
}

  return (
    <div className="App">
      <NavBar loginToggle={loginToggle} isLogOn={isLogOn} setIsLogOn={setIsLogOn} />
      <Switch>
        <Route exact path="/">
          <About />
        </Route>
        <Route path="/home">
            <SearchBar searchClick={searchClick} handleChange={handleChange} user={user} />
            <Search tracks={tracks} onMoreInfoClick={onMoreInfoClick} goBack={goBack} user={user} />
            </Route>
          <Route path='/details/:id'>
            <SongDetail 
              goBack={goBack}
              details ={details}
              track={songSelection}
              artists={artist}
              album={album}
              albumArt={albumArt}
            />
          </Route>
        <Route path='/favorites'>

          <Favorites 
            favorites={favorites}
            onMoreInfoClick={onMoreInfoClick} 
            onRemoveFavorite={onRemoveFavorite}
            track={songSelection}
            isLogOn={isLogOn} 
            artists={artist}
            />

        </Route>
        <Route path="/login">
          <Login onLogin={setUser} loginToggle={loginToggle} isLogOn={isLogOn} setIsLogOn={setIsLogOn} />
        </Route>
        <Route path="/new_user">
          <CreateAccount onLogin={setUser} setIsLogOn={setIsLogOn} />
        </Route>
      </Switch>
    </div>
  );
}
export default App;


{/* <Route exact path="/">
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
          </Route>  */}