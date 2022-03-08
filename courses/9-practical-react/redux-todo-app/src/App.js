import React,{Component} from 'react';
import {connect} from 'react-redux';
import {addTodo} from './actions/action';
import AddTodo from './AddTodo';
import TodoList from './TodoList';

class App extends Component{
  render(){
    const {dispatch,eklenmisTodos}=this.props
    return (
      <div className="App container">
        <AddTodo onAddClick={text=>dispatch(addTodo(text))}/>
        <TodoList todos={eklenmisTodos}/>
      </div>
    );
  }
}

function select(state){
  return{
    eklenmisTodo:state.todos
  }
}

export default connect(select) (App);
