import React,{Component} from "react";
import moment from 'moment'; 

class List extends Component{
    render(){
        const user=this.props.user;
        return(
            <div>
                {user.userName && <ul className="collection">
                    <li className="collection-item"><b>isim:</b> {user.name} </li>
                    <li className="collection-item"><b>repo sayısı:</b> {user.public_repos} </li>
                    <li className="collection-item"><b>login:</b> {user.login} </li>
                    <li className="collection-item"><b>url:</b> {user.url} </li>
                    <li className="collection-item"><b>oluşturulma tarihi:</b> {moment(user.created_at).calendar()} </li>
                </ul>}
            </div>
        )
    }
}

export default List;



