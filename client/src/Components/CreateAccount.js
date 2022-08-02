import { useState } from 'react'
import { Link } from 'react-router-dom';

function CreateAccount({onLogin, setIsLogOn}){
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConfirm, setPasswordConfirm] = useState("")

    function handleSubmit(e){
        e.preventDefault()
        fetch('/signup', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                username: username,
                password: password,
                password_confimation: passwordConfirm
            }),
        })
        .then(res => res.json())
        .then(data => onLogin(data))
        .then(setIsLogOn(true))
    }

    return(
        <div className="login-box">
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <small>Username</small>
                    <input type="text" name="username" value={username} onChange={e => setUsername(e.target.value)} />
                </div>
                <div className="form-group">
                    <small>Password</small>
                    <input type="password" name="password" value={password} onChange={e => setPassword(e.target.value)} />
                </div>
                <div className="form-group">
                    <small>Confirm Password</small>
                    <input type="password" name="password confirmation" value={passwordConfirm} onChange={e => setPasswordConfirm(e.target.value)} />
                </div>
                <div className="form-group">
                    <button type="submit">Create Account</button>
                </div>
            </form>
        </div>
    )
}

export default CreateAccount;