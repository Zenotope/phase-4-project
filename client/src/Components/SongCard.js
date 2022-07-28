function SongCard({name, artists, id, album, albumArt}){
    return(
        <div className="songCard">
            <img src={albumArt}/>
            <h3>{name}</h3>
            <h3>{artists}</h3>
            <h3>{album}</h3>
            <button>More Info</button>
            <button>Add To Favorites</button>
        </div>
    )
}

export default SongCard