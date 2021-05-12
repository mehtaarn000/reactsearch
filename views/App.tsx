import React, { useState } from "react"
import Form from "./components/Form"
import SwitchPageButton from "./components/SwitchPageButton"
import  Table  from "./components/Table"
import { tableProps } from "./components/Table"

interface appProps {
    props: {
        error: string | undefined, 
        form: boolean 
        documents: tableProps
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
                <Table arr={props.documents}></Table>
                <SwitchPageButton form={false} onClick={() => {setForm(true)}}></SwitchPageButton>
            </div>
        )
    }
}