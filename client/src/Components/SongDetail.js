function SongDetail({goBack, details, track, artists, album, albumArt}){

   
    const keys = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"]
    let key = keys.at(details.key)
    
    const modes = ["Minor", "Major"]
    let mode = modes.at(details.mode)

    const energy =(details.energy * 100).toFixed(2) 
    const danceability = (details.danceability * 100).toFixed(2)
    const valence =(details.valence * 100).toFixed(2)
    const acousticness = (details.acousticness * 100).toFixed(2)

    // let acousticness = ""
    // if(details.acousticness >= .6){acousticness = "Yes"}
    // else {acousticness = "No"};

    // console.log(details)
    // console.log(track)
    // console.log(acousticness)
    

    return(
        <div>
            {/* <button onClick={backToFavs}>Favorites</button> */}
            <button className="back-btn" onClick={goBack}>Back To Search</button>
            <div></div>
            <img style={{margin: "15px"}} src={albumArt}/>
            <h3>{artists}</h3>
            <h3>{track.name}</h3>
            <h3>{album}</h3>
            
            <div className="details-container">
                <div className="card-details">
                    <b>Mode:</b><p className="stat">{mode}</p>
                </div>
                <div className="card-details">
                    <b>Key:</b><p className="stat">{key}</p>
                </div>
                <div className="card-details">
                    <b>Tempo:</b><p className="stat">{details.tempo}</p>
                </div>
                <div className="card-details">
                     <b>Time Signature:</b><p className="stat">{details.time_signature}/4</p>
                </div>
                <div className="card-details">
                    <b>Acousticness:</b><p className="stat">{acousticness}%</p>
                </div>
                <div className="card-details">
                    <b>Energy:</b><p className="stat">{energy}%</p>
                </div>      
                <div className="card-details">
                    <b>Danceability:</b><p className="stat">{danceability}%</p>
                </div>
                <div className="card-details">
                    <b>Happiness:</b><p className="stat">{valence}%</p>
                </div>
                <div className="card-details">
                    <b>Loudness:</b><p className="stat">{details.loudness}</p>
                </div>
                <div className="card-details">
                    <b>Instrumentalness:</b><p className="stat">{details.instrumentalness}</p>
                </div>
                
                <div className="card-details">
                    <b>Liveness:</b><p className="stat">{details.liveness}</p>
                </div>
                <div className="card-details">
                    <b>Speechiness:</b><p className="stat">{details.speechiness}</p>
                </div>
                
            </div>
            
        </div>
    )
}

export default SongDetail