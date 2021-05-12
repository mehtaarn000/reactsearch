import { useState } from "react"

interface propVals {
    form: boolean
    onClick: () => void
}

export default function SwitchPageButton(props: propVals): JSX.Element {
    const [form, setForm] = useState(props.form) // true is form

    if (!form) {
        return (
            <div>
                <button onClick={() => {setForm(true); props.onClick()}}>{"< Add document"}</button>
            </div>
        )
    } else {
        return (
            <div>
                <button onClick={() => {setForm(false); props.onClick()}}> {"> View documents"}</button>
            </div>
        )
    }
}

