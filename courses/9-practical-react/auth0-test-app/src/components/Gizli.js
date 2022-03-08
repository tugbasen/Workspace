import React,{Component} from "react";

export default class Gizli extends Component{
    render(){
        return(
            <div>
                gizli component
                <br/>
                <button className="btn grey" onClick={this.props.auth.logout}>logout</button>
            </div>
        )
    }
}

