import React, { Component } from "react";
import Aos from "./Aos";



class App extends Component {
  state={
    personeller:[
        {id:1,ad:"ali",soyad:"hazır"},
        {id:2,ad:"osman",soyad:"hazır"},
        {id:3,ad:"tufan",soyad:"hazır"}
    ]
  }
  render() {
    
    return (
      <div className="App">
        
        <h1>AOS Software</h1>
        <Aos personeller={this.state.personeller}/>
          
      </div>
    )

  }

}

export default App;
