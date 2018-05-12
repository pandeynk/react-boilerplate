import React, {Component} from "react";

export default class Heading extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
                <div><h1>
                    {this.props.name || "Hola World"}
                </h1></div>
            )
    }
}
