function SongDetail({goBack, details, track, artists, album, albumArt}){

   
    const keys = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"]
    let key = keys.at(details.key)
    
    const modes = ["Minor", "Major"]
    let mode = modes.at(details.mode)

    // let acousticness = ""
    // if(details.acousticness >= .6){acousticness = "Yes"}
    // else {acousticness = "No"};

    // console.log(details)
    // console.log(track)
    // console.log(acousticness)
    console.log(artists)

    return(
        <div>
            {/* <button onClick={backToFavs}>Favorites</button> */}
            <button onClick={goBack}>Search</button>
            <div></div>
            <img src={albumArt}/>
            <h3>{artists}</h3>
            <h3>{track.name}</h3>
            <h3>{album}</h3>
            
            <div className="details-container">
                <div className="card-details">
                    <b>Mode:</b><p>{mode}</p>
                </div>
                <div className="card-details">
                    <b>Key:</b><p>{key}</p>
                </div>
                <div className="card-details">
                    <b>Tempo:</b><p>{details.tempo}</p>
                </div>
                <div className="card-details">
                     <b>Time Signature:</b><p>{details.time_signature}/4</p>
                </div>
                <div className="card-details">
                    <b>Acousticness:</b><p>{details.acousticness}</p>
                </div>
                <div className="card-details">
                    <b>Energy:</b><p>{details.energy}</p>
                </div>      
                <div className="card-details">
                    <b>Danceability:</b><p>{details.danceability}</p>
                </div>
                <div className="card-details">
                    <b>Instrumentalness:</b><p>{details.instrumentalness}</p>
                </div>
                <div className="card-details">
                    <b>Loudness:</b><p>{details.loudness}</p>
                </div>
                <div className="card-details">
                    <b>Liveness:</b><p>{details.liveness}</p>
                </div>
                <div className="card-details">
                    <b>Speechiness:</b><p>{details.speechiness}</p>
                </div>
                <div className="card-details">
                    <b>Valence:</b><p>{details.valence}</p>
                </div>
            </div>
            
        </div>
    )
}

export default SongDetail