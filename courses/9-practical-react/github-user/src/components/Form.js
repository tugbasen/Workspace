import React,{Component} from "react";
import axios from "axios";

class Form extends Component{
    state={
        userName:'',
        name:'',
        public_repos:'',
        login:'',
        url:'',
        created_at:''
    }

    handleChange=(e)=>{
        this.setState({
            userName:e.target.value
        })
    }

    handleSubmit=(e)=>{
        e.preventDefault();
        //console.log(this.state);
        axios.get(`https://api.github.com/users/${this.state.userName}`)
        .then((res)=>{
            //console.log(res.data);
            this.setState({
                name:res.data.name,
                public_repos:res.data.public_repos,
                login:res.data.login,
                url:res.data.url,
                created_at:res.data.created_at
            })
            //console.log(this.state);
            this.props.bilgiler(this.state)
        }).catch((err)=>{

            console.log(err);
        })
    }

    render(){
        return(
            <div className="row">
                <form onSubmit={this.handleSubmit} className="col s12">
                    <div className="row">
                        <div className="input-field col s6">
                            <input onChange={this.handleChange} placeholder="github kullanıcı adınızı giriniz" id="github_user" type="text" />
                            <label htmlFor="github_user">github user</label>
                        </div>
                        <div className="input-field col s6">
                            <button className="waves-effect waves-light btn">getir</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default Form;



