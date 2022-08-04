import './createAccount.css'
import { useState } from 'react'
import { useHistory } from 'react-router-dom';

function CreateAccount({onLogin, setIsLogOn}){
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const [errors, setErrors] = useState([])

    let history = useHistory();
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
                password_confirmation: passwordConfirmation
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
              .then((errorData) => setErrors(errorData.errors));
              setPassword("")
              setPasswordConfirmation("")
            }
        })
    }
    return(
        <div className="login-box">
            <form id="signup" onSubmit={handleSubmit}>
            <h2 id="signup-header">Create New Account</h2>
                <div className="form-group">
                    <input type="text" name="username" className="signup-input" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} />
                </div>
                <div className="form-group">
                    <input type="password" name="password" className="signup-input" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
                </div>
                <div className="form-group">
                    <input type="password" name="password confirmation" className="signup-input" placeholder="Confirm Password" value={passwordConfirmation} onChange={e => setPasswordConfirmation(e.target.value)} />
                </div>
                  {errors.length > 0 && (
                    <ul style={{ color: "red" }}>
                        {errors.map((error) => (
                            <ul key={error}>{error}</ul>
                        ))}
                    </ul>
                  )}
                <div className="form-group">
                    <button type="submit" id="create-acct-btn">Create Account</button>
                </div>
            </form>
        </div>
    )
}

export default CreateAccount;