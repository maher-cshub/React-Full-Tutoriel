import { Component } from "react";

export default class HellWorld2 extends Component{
    render(){
        
        return <h2>"I am a class Component" {this.props.lastname} is a prop from my parent</h2>
    }
}