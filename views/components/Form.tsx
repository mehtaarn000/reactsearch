import { useState } from "react"


export default function Form(props: {error?: string}): JSX.Element {

    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

    function handleSubmit() {
        if (password.length < 8) {
            setError("Password length too short!")
        }
    }

    return (
        <div>
            <div>{props.error}</div>
            <div><h1>{error}</h1></div>
            <div>
                <form action="/" method="post" onSubmit={() => handleSubmit()}>
                    <input name="username" type="username"></input>
                    <input name="password" type="password" onChange={(e) => setPassword(e.target?.value)}></input>
                    <input name="email" type="email"></input>
                    <input name="url" type="url"></input>
                    <input type="submit"></input>
                </form>
            </div>
        </div>
    )
}