import { useHistory } from 'react-router-dom'

function About(){
    let history = useHistory();
    function handleClick(){
        history.push('/home')
    }
    return(
        <div>
            <h2>Welcome to</h2>
            <h1>Detailify</h1>
            <p>Login to add favorites!</p>
        <button onClick={handleClick}> Start </button>
        </div>
    )
}

export default About;