import SongCard from "./SongCard"

function Favorites({favorites, onMoreInfoClick, onRemoveFavorite, isLogOn}){

 
    
    const favoriteCollection = favorites.map((track) =>(
        <SongCard
        key = {track.id}
        id= {track.songId}
        name ={track.name}
        artists ={track.artists}
        album = {track.album}
        albumArt = {track.albumArt}
        // preview = {track.preview_url}
        onMoreInfoClick = {onMoreInfoClick}
        onRemoveFavorite={onRemoveFavorite}
        track= {track}
        />
    ))

    if(isLogOn === false) return <h1>You must login to view favorites!</h1>

    return(
        <div className="grid-container">
            {favoriteCollection}
        </div>
    )
}

export default Favorites