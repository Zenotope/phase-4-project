import {useState} from "react";

function Login({onLogin, loginToggle, setIsLogOn}) {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

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
                    <button type="submit" onClick={loginToggle}>Login</button>
                    {/* <button type="submit" onClick={loginToggle}>Login</button> */}
                </div>
            </form>
        </div>
    )
}
export default Login