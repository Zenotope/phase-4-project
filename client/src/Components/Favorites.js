import { useEffect, useState } from 'react'
import './favorites.css'
import SongCard from "./SongCard"


function Favorites({favorites, onMoreInfoClick, onRemoveFavorite, track, isLogOn, artists, userId}){
    let favoriteState = true

    const favoriteCollection = favorites.map((favorite) =>(
        <SongCard
        key = {favorite.id}
        id= {favorite.songId}
        name ={favorite.name}
        artists ={favorite.artists}
        album = {favorite.album}
        albumArt = {favorite.albumArt}
        // preview = {track.preview_url}
        onMoreInfoClick = {onMoreInfoClick}
        onRemoveFavorite={onRemoveFavorite}
        track= {track}
        favId = {favorite.id}
        favState = {favoriteState}
        />
    ))

    const [displayLogin, setDisplayLogin] = useState(false)

    useEffect(()=>{
        const timer = setTimeout(()=>{
            console.log("test")
            setDisplayLogin(true)
        }, 300)
        return () => clearTimeout(timer)
    }, [])

    // <h1 id="error">You must login to view favorites!</h1>
    // 


    return(
        <div>
            {displayLogin && !isLogOn ? <h1 id="error">You must login to view favorites!</h1>
            : 
        
        <div className="grid-container">    
            {favoriteCollection}
        </div> }
        </div>
    )
}

export default Favorites