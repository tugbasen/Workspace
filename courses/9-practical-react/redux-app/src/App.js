import React, {Component} from "react";
import './App.css';
import {connect} from 'react-redux';

class App extends Component{
  constructor(props){
    super(props)
    this.state={}
    this.handleIsimUpdate=this.handleIsimUpdate.bind(this);
  }

  handleIsimUpdate(){
    const updateIsimVerileri=(item)=>{
      return {
        type:"ISIM_GUNCELLE",
        payload:item
      }
    }
    this.props.dispatch(updateIsimVerileri('tufan'));
  }

  render(){
    return (
      <div className="App">
        <button onClick={this.handleIsimUpdate}>ismi güncelle</button>
      </div>
    );
  }
}

const mapStateToProps=state=>{
  console.log(state);
  return state
}

export default connect(mapStateToProps) (App);
