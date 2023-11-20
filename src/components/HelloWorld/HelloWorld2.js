import { Component } from "react";

export default class HellWorld2 extends Component{
    render(){
        
        return ( 
                <>
                    <label>lastname</label>
                    <input type="text" name="lastname" placeholder={this.props.lastname}/>
                    {this.props.children}
                </>
        )
    }
}

