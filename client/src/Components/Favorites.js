import SongCard from "./SongCard"

function Favorites({favorites, onMoreInfoClick, onRemoveFavorite, track}){

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
        // favId = {track.id}
        />
    ))

    return(
        <div className="grid-container">
            {favoriteCollection}
        </div>
    )
}

export default Favorites