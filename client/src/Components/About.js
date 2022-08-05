import './about.css'
import { useHistory } from 'react-router-dom'

function About(){
    let history = useHistory();
    function handleClick(){
        history.push('/login')
    }
    return(
        <div>
            <h2 id="small-title">Welcome to</h2>
            <h1 id="title">Detailify</h1>
            <p>Did you ever want to know more information about your favorite songs?
                <br/> 
                <strong>Well now you can!</strong> 
                <br/>
                Search for any song on Spotify and you can find out lots of interesting information 
                <br/>
                that Spotify hides from you such as tempo, key, danceability, and so much more! 
             </p>
        <button id="about-btn" onClick={handleClick}>Get Started</button>
        </div>
    )
}

export default About;