import React, { useState } from "react"
import Form from "./components/Form"
import SwitchPageButton from "./components/SwitchPageButton"
import SearchBar from "./components/SearchBar"
import { userCard } from "./components/Table"

interface appProps {
    props: {
        error: string | undefined, 
        form: boolean 
        documents: userCard[]
    }
}

export default function App({props}: appProps): JSX.Element {
    const [form, setForm] = useState(props.form)

    if (form) {
        return (
            <div>
                <Form error={props.error}></Form>
                <SwitchPageButton form={true} onClick={() => {setForm(false)}}></SwitchPageButton>
            </div>
        )
    } else {
        return (
            <div>
                <SearchBar docs={props.documents}></SearchBar>
                <SwitchPageButton form={false} onClick={() => {setForm(true)}}></SwitchPageButton>
            </div>
        )
    }
}