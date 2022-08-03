import SongCard from "./SongCard"


function Search({tracks, onMoreInfoClick}){

    const trackCollection = tracks.map((track) =>(
        <SongCard
        key = {track.id}
        id= {track.id}
        name ={track.name}
        artists ={track.artists[0].name}
        album = {track.album.name}
        albumArt = {track.album.images[1].url}
        preview = {track.preview_url}
        onMoreInfoClick = {onMoreInfoClick}
        track= {track}
        />
    ))
     
    return(
        <div id="search" >
            <p>Login to add favorites!</p>
            <div className="grid-container">
                {trackCollection}
            </div>
        </div>
    )
}

export default Search