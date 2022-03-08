import React,{Component} from 'react';
import Main from './components/Main';
import Gizli from './components/Gizli';
import NotFound from './components/NotFound';
import Callback from './components/Callback';

class App extends Component{
  render(){

    let mainComonent="";

    switch (this.props.location){
      case "":
        mainComonent=<Main {...this.props}/>;
        break;
      case "gizli":
        mainComonent=this.props.auth.isAuthenticated()?<Gizli {...this.props}/>:<NotFound/>;
        break;
      case "callback":
        mainComonent=<Callback/>;
        break;
      default:
        mainComonent=<NotFound/>;
    }

    return (
      <div className="App container">
        {this.props.isim}
        {mainComonent}
      </div>
    );
  }
}

export default App;
