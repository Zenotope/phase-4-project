function SongCard({name, artists, id, album, albumArt, onMoreInfoClick}){
    return(
        <div className="songCard">
            <img src={albumArt}/>
            <h3>{name}</h3>
            <h3>{artists}</h3>
            <h3>{album}</h3>
            <button onClick={onMoreInfoClick}>More Info</button>
            <button>Add To Favorites</button>
        </div>
    )
}

export default SongCard