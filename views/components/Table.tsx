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
                    <tr>
                        <td>
                            username
                        </td>
                        <td>
                            {props.usercard.username}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            password
                        </td>
                        <td>
                            {props.usercard.password}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            email
                        </td>
                        <td>
                            {props.usercard.email}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            url
                        </td>
                        <td>
                            {props.usercard.url}
                        </td>
                    </tr>
                </table>
            </div>
        )
}