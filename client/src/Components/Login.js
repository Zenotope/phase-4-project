import './login.css'
import {useState} from "react";
import { NavLink, useHistory } from 'react-router-dom';

function Login({onLogin, loginToggle, isLogOn, setIsLogOn}) {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [errors, setErrors] = useState([])


    let history = useHistory();
    function handleSubmit(e){
        e.preventDefault()
        fetch('/login', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                username: username,
                password: password
            }),
        })
        .then(res => {
            if (res.ok) {
              res.json()
              .then(data => onLogin(data))
              .then(setIsLogOn(true))
              history.push('/home')
            } else {
              res.json()
              .then((errorData) => setErrors(errorData.error));
              setPassword("")
            }
        })
    }

    const nav = () => {
        history.push('/new_user')
    }

    return(
        <div className="login-box">
            <form id="login" onSubmit={handleSubmit}>
            <h2 id="login-header">Login to Your Account</h2>
                <div className="form-group">
                    <input type="text" className="login-input" name="username" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} />
                </div>
                <div className="form-group">
                    <input type="password" className="login-input" name="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
                </div>
                <ul style={{color: 'red'}}>{errors}</ul>
                <div id="login-btns">
                    <button type="submit" id="login-btn" onClick={ isLogOn ? loginToggle : undefined } >Login</button>
                    <button type="button" id="signup-btn" onClick={nav} >Sign Up</button>
                </div>
            </form>
        </div>
    )
}
export default Login