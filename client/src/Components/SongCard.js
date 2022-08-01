function SongCard({name, artists, preview, id, album, albumArt, onMoreInfoClick, track}){
    
    return(
        <div className="songCard">
            <img src={albumArt}/>
            {/* <audio src={preview}></audio> */}
            <div></div>
            <b>{name}</b>
            <div></div>
            <b>{artists}</b>
            <div></div>
            <b>{album}</b>
            <div></div>
            <button onClick={(e)=> onMoreInfoClick(e, track)} >More Info</button>
            <button>Add To Favorites</button>
        </div>
    )
}

export default SongCard