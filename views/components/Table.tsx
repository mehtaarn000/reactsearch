export interface userCard {
    username: string,
    password: string,
    email: string,
    url: string
}

export default function Table(props: {usercard: userCard}): JSX.Element {
        return (
            <div>
                <table>
                    <tr style={{outline: "thin solid"}}>
                        <td>
                            username
                        </td>
                        <td>
                            {props.usercard.username}
                        </td>
                    </tr>
                    <tr style={{outline: "thin solid"}}>
                        <td>
                            password
                        </td>
                        <td>
                            {props.usercard.password}
                        </td>
                    </tr>
                    <tr style={{outline: "thin solid"}}>
                        <td>
                            email
                        </td>
                        <td>
                            {props.usercard.email}
                        </td>
                    </tr>
                    <tr style={{outline: "thin solid"}}>
                        <td>
                            url
                        </td>
                        <td>
                            {props.usercard.url}
                        </td>
                    </tr>
                </table>
                <br></br>
            </div>
        )
}