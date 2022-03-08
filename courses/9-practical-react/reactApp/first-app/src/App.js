// import React, { Component} from 'react';
// import {FirstComponent} from './first';
// import {Form} from './form';


// class App extends Component{

//   constructor(){
//     super();
//     this.state={liste:[
//       'listenin ilk elemannı',
//       'listenin ikinci elemannı',
//       'listenin üçüncü elemannı',
//       'listenin dördüncü elemannı'
//       ]};

//       this.listeyeEkle=this.listeyeEkle.bind(this);
//   }

//   listeyeEkle(val){
//     let geciciListe=this.state.liste;
//     geciciListe.push(val);
//     this.setState({liste:geciciListe});
//   }

//   render(){

//     return(
//       <div >
//         ilk kodlar
//         <hr/>
//         <FirstComponent myListe={this.state.liste}></FirstComponent>
//         <hr/>
//         <Form yeniliste={this.listeyeEkle}/>
//       </div>
//     );
//   }
// }

// export default App;

import React from "react";
import { Component } from "react";

class App extends Component{
    render(){
        return (
            <div>Merhaba</div>
        )
    }
}
