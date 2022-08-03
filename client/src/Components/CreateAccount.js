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
            }
        })
    }
    return(
        <div className="login-box">
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <small>Username:</small>
                    <input type="text" name="username" value={username} onChange={e => setUsername(e.target.value)} />
                </div>
                <div className="form-group">
                    <small>Password:</small>
                    <input type="password" name="password" value={password} onChange={e => setPassword(e.target.value)} />
                </div>
                <div className="form-group">
                    <small>Confirm Password:</small>
                    <input type="password" name="password confirmation" value={passwordConfirmation} onChange={e => setPasswordConfirmation(e.target.value)} />
                </div>
                  {errors.length > 0 && (
                    <ul style={{ color: "red" }}>
                        {errors.map((error) => (
                            <ul key={error}>{error}</ul>
                        ))}
                    </ul>
                  )}
                <div className="form-group">
                    <button type="submit">Create Account</button>
                </div>
            </form>
        </div>
    )
}

export default CreateAccount;