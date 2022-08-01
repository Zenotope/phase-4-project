function SongCard({name, artists, preview, id, album, albumArt, onMoreInfoClick, track}){
    
    return(
        <div className="songCard">
            <img src={albumArt}/>
            {/* <audio src={preview}></audio> */}
            <h3>{name}</h3>
            <h3>{artists}</h3>
            <h3>{album}</h3>
            <button onClick={(e)=> onMoreInfoClick(e, track)} >More Info</button>
            <button>Add To Favorites</button>
        </div>
    )
}

export default SongCard