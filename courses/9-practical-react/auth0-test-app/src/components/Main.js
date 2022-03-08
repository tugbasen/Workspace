import React,{Component} from "react";

export default class Main extends Component{
    render(){
        return(
            <div>
                merhaba {this.props.isim}
                <hr/>
                Gizli sayfaya yönelmke için <a href="/gizli">tıkla</a>
                <hr/>
                {!this.props.auth.isAuthenticated() &&
                <div>
                    login ol 
                    <br/>
                    <button className="btn red" onClick={this.props.auth.login}>login</button>
                </div>
                }
                
            </div>
        )
    }
}

