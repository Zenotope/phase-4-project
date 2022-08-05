function SongCard({name, artists, preview, id, album, albumArt, onMoreInfoClick, track, onRemoveFavorite, favId, favState, user_id}){
    
    function handleAddFavorite(){
        const favoriteData = {
            songId: id,
            name,
            artists,
            album,
            albumArt,
            user_id,
        }
        fetch('/favorites',{
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(favoriteData),
            
          })
          // .then((r)=> r.json) 
          // .then((favoriteData) => setFavorites(favoriteData))
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
            <div className="btn-container">
              <button className="card-btn" onClick={(e)=> onMoreInfoClick(e, track, id, artists, album, albumArt)} >More Info</button>
              {favState ? (<button className="card-btn" onClick={handleRemoveFavorite}>Remove From Favorites</button>)
              :(<button className="card-btn"onClick={handleAddFavorite}>Add To Favorites</button>)
               }
          </div>
            
        </div>
    )
}

export default SongCard