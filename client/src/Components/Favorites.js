import SongCard from "./SongCard"

function Favorites({favorites, onMoreInfoClick, onRemoveFavorite}){

 
    
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

    return(
        <div className="grid-container">
            {favoriteCollection}
        </div>
    )
}

export default Favorites