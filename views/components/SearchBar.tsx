import { userCard } from "./Table"
import Table from "./Table"
import React from "react"

interface SearchProps {
    docs: userCard[]
}
  
interface SearchState {
    search: string
}

export default class SearchBar extends React.Component<SearchProps, SearchState> {
    constructor(props: {docs: userCard[]}){
        super(props);
        this.state = {
            search:""
        };
    }

    searchSpace=(event: React.SyntheticEvent): void=>{
        const keyword = event.target as HTMLInputElement
        this.setState({search:keyword.value})
    }

    render(): JSX.Element {
        const items = this.props.docs.filter((data) => {
            if (this.state.search === "") {
                return data
            }
            else if(data.username.includes(this.state.search) || data.password.includes(this.state.search) || data.email.includes(this.state.search) || data.url.includes(this.state.search)){
                return data
            }
            return
        }
        ).map(data => {
            return <Table usercard={data}></Table>
        })

        return (
            <div>
            <input type="text" placeholder="Enter item to be searched"  onChange={(e)=>this.searchSpace(e)} />
            {items}
            </div>
        )
    }
}