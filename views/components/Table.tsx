export interface userCard {
    username: string,
    password: string,
    email: string,
    url: string
}

export interface tableProps {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    arr: any
}

export default function Table(props: tableProps): JSX.Element {
    const tableArr = props.arr.map((usercard: userCard) => {
        return (
            <div>
                <table>
                    <tr>
                        <td>
                            username
                        </td>
                        <td>
                            {usercard.username}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            password
                        </td>
                        <td>
                            {usercard.password}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            email
                        </td>
                        <td>
                            {usercard.email}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            url
                        </td>
                        <td>
                            {usercard.url}
                        </td>
                    </tr>
                </table>
            </div>
        )
    })

    return <div>{tableArr}</div>
}