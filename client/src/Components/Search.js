import SongCard from "./SongCard"


function Search({tracks}){

    const trackCollection = tracks.map((track) =>(
        <SongCard
        key = {track.id}
        id= {track.id}
        name ={track.name}
        artists ={track.artists[0].name}
        album = {track.album.name}
        albumArt = {track.album.images[1].url}
        />
    ))
     
    return(
        <div id="search">
                    <form action="/" method="get">
                <label htmlFor="header-search">
                    <span className="visually-hidden"></span>
                </label>
                <input
                    type="text"
                    id="header-search"
                    placeholder="Search Songs"
                    name="s" 
                />
                <button type="submit">Search</button>
            </form>
            <div>
                {trackCollection}
            </div>
        </div>
    )
}

export default Search