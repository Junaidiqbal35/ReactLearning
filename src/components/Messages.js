import { Component } from "react";
class Message extends Component{
    render() {
        return <h1> Message: {this.props.messagecontent},  {this.props.name} </h1>
    }
}


export default Message;