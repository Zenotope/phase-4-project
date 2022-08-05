import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
        toast(<div style={{ height: "100%", borderLeft: "5px solid green" }}>
        <span style={{ fontWeight: "bold", color: "limegreen" }}>Success</span>{" "}
        Added {name} to Favorites
        </div>);
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
            <div className="btn-container">
              <button className="card-btn" onClick={(e)=> onMoreInfoClick(e, track, id, artists, album, albumArt)} >More Info</button>
              {favState ? (<button className="card-btn" onClick={handleRemoveFavorite}>Remove From Favorites</button>)
              :(<div style={{backgroundColor: "#313439"}}>
              <button className="card-btn"onClick={handleAddFavorite}>Add To Favorites</button>
              <ToastContainer
              position="top-right"
              autoClose={3000}
              theme="dark"
              hideProgressBar={true}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover={false}
              closeButton={false}
              style={{backgroundColor: 'transparent'}}
              />
              </div>)}
          </div>
            
        </div>
    )
}

export default SongCard