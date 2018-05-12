import React, {Component} from "react";
import Heading from "./../components/Heading";

export default class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            name: "Hello World"
        }
    }
    render(){
        return (
                <Heading name={this.state.name} />
            );
    }
}
