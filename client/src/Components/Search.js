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
        onMoreInfoClick = {onMoreInfoClick}
        track= {track}
        />
    ))
     
    return(
        <div id="search">
            <div>
                {trackCollection}
            </div>
        </div>
    )
}

export default Search