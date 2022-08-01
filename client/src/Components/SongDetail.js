function SongDetail({goBack, details, track}){
    return(
        <div>
            <button onClick={goBack}>Go Back</button>
            <div></div>
            <img src={track.album.images[1].url}/>
            <h3>{track.artists[0].name}</h3>
            <h3>{track.name}</h3>
            <h3>{track.album.name}</h3>
            <b>Acousticness:</b><p>{details.acousticness}</p>
            <b>Energy:</b><p>{details.energy}</p>
            <b>Danceability:</b><p>{details.danceability}</p>
            <b>Instrumentalness:</b><p>{details.instrumentalness}</p>
            <b>Loudness:</b><p>{details.loudness}</p>
            <b>Tempo:</b><p>{details.tempo}</p>
            <b>Time Signature:</b><p>{details.time_signature}</p>
            <b>Mode:</b><p>{details.mode}</p>
            <b>Key:</b><p>{details.key}</p>
            <b>Valence:</b><p>{details.valence}</p>
            
        </div>
    )
}

export default SongDetail