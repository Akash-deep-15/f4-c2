import React, { useState } from "react"
import Profile from "./Profile"

const Login = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const [id, setId] = useState("")

    function handleUsernameChange(e) {
        setUsername(e.target.value)
    }
    function handlePasswordChange(e) {
        setPassword(e.target.value)
    }

    async function clickHandler(e) {
        e.preventDefault()
        try {
            const response = await fetch("https://dummyjson.com/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    username: username,
                    password: password,
                }),
            })
            const data = await response.json()
            if (response.ok) {
                localStorage.setItem("token", data.token)
                localStorage.setItem("id", data.id)
                setId(data.id)
                window.scrollTo(0, window.innerHeight / 2)
            } else {
                setError(data.message)
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <form action="">
                <h1>Login Page</h1>
                <div>
                    <label htmlFor="username">Enter Username: </label>
                    <input
                        type="text"
                        name=""
                        id="username"
                        required
                        autoComplete="off"
                        value={username}
                        onChange={handleUsernameChange}
                    />
                </div>
                <div>
                    <label htmlFor="password">Enter Password: </label>
                    <input
                        type="password"
                        name=""
                        id="password"
                        required
                        value={password}
                        onChange={handlePasswordChange}
                    />
                </div>
                <button onClick={clickHandler}>Login</button>
            </form>
            {id && <Profile id={id} error={error} />}
        </div>
    )
}

export default Login