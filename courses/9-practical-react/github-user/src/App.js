import React,{Component} from 'react';
import './App.css';
import Baslik from './components/Header';
import Form from './components/Form';
import List from './components/List';

class App extends Component{
  state={
    user:'',

  }

  bilgiler=(user)=>{
    //console.log(user);
    this.setState({
      user:user
    })
  }

  render(){
    return (
      <div className="container">
        <Baslik/>
        <Form bilgiler={this.bilgiler}/>
        <List user={this.state.user} />
      </div>
    );
  }
}

export default App;
