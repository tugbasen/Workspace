import React, {Component} from 'react';
import { render } from 'react-dom';
import './App.css';

class App extends Component {

  state={
    turn:"X",
    oyunSonu:false,
    board:Array(9).fill(''),
    toplamHareket:0,
    kazanan:''
  }

  handleClick=(e)=>{
    if(this.state.oyunSonu==true) return;

    if(this.state.board[e.target.dataset.kare]=='')
    {
      this.state.board[e.target.dataset.kare]=this.state.turn;

      e.target.innerText=this.state.turn;
      this.setState({
        turn:this.state.turn=="X"?"O":"X",
        board:this.state.board,
        toplamHareket:++this.state.toplamHareket
      })

    }

    var sonuc=this.kazananKontrol();
    if(sonuc=='X'){
      this.setState({
        oyunSonu:true,
        kazanan:'X'
      })

    }else if(sonuc=='O'){
      this.setState({
        oyunSonu:true,
        kazanan:'O'
      })

    }else if(sonuc=='beraberlik'){
      this.setState({
        oyunSonuc:true,
        kazanan:'beraberlik'
      })
    }
  }

  kazananKontrol=()=>{
    var board=this.state.board;
    var kazanmaHareketleri=[[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6],[0,1,2],[3,4,5],[6,7,8]];

    for(let i=0; i<kazanmaHareketleri.length;i++){
      if(board[kazanmaHareketleri[i][0]]==board[kazanmaHareketleri[i][1]] && board[kazanmaHareketleri[i][1]]==board[kazanmaHareketleri[i][2]] ){
        return board[kazanmaHareketleri[i][0]];
      }
    }

    if(this.state.toplamHareket==9){
      return 'beraberlik';
    }

  }

  render(){
    return (
      <div className="App">
        <div id="game">
        <div id="durum">
          {this.state.kazanan}
        </div>
          <div id="head">
            Tic-Tac-Toe Game
          </div>
          <div id="board" onClick={(e)=>this.handleClick(e)}> 
            <div className="kare" data-kare="0"></div>
            <div className="kare" data-kare="1"></div>
            <div className="kare" data-kare="2"></div>
            <div className="kare" data-kare="3"></div>
            <div className="kare" data-kare="4"></div>
            <div className="kare" data-kare="5"></div>
            <div className="kare" data-kare="6"></div>
            <div className="kare" data-kare="7"></div>
            <div className="kare" data-kare="8"></div>
          </div>
        </div>

      </div>
    );
  }
}

export default App;
