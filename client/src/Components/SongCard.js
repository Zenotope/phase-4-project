function SongCard({name, artists, preview, id, album, albumArt, onMoreInfoClick, track, onRemoveFavorite, favId, favState}){
    
    function handleAddFavorite(){
        const favoriteData = {
            songId: id,
            name,
            artists,
            album,
            albumArt
        }
        fetch('/favorites',{
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(favoriteData),
           
          }) 
    }

    function handleRemoveFavorite(){
        fetch(`/favorites/${favId}`, {
          method: "DELETE",
        })
        .then(()=> onRemoveFavorite(favId))
      }

      
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
            <button onClick={(e)=> onMoreInfoClick(e, track, id, artists, album, albumArt)} >More Info</button>
            {favState ? (<button onClick={handleRemoveFavorite}>Remove From Favorites</button>)
            :(<button onClick={handleAddFavorite}>Add To Favorites</button>)
    }
            
        </div>
    )
}

export default SongCard