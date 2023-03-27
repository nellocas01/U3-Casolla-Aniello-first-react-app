import { Component } from "react"

class Foto extends Component{
    render(){
        return <img src={this.props.url} alt={this.props.name} />
    }
}

export default Foto;