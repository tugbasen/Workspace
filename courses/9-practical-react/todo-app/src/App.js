import React, {Component} from 'react';
import Todos from './Todos';
import AddTodo from './AddForm';

class App extends Component{
  state={
    todos:[
      {id:1, icerik:"ekmek al"},
      {id:2, icerik:"kod yaz"},
      {id:3, icerik:"spora git"}
    ]
  }

  deleteTodo=(id)=>{
    //console.log(id);
    const todos=this.state.todos.filter(todo=>{
      return todo.id!==id
    })

    this.setState({
      todos:todos
    })
  }

  addTodo=(todo)=>{
    todo.id=Math.random();
    let todos=[...this.state.todos,todo];
    this.setState({
      todos:todos
    })
  }

  render(){
    return(
      <div className="App container">
        <h1 className="center blue-text">Yapılacaklar</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}/>
        <AddTodo addTodo={this.addTodo}/>
      </div>
    )
  }
}

export default App;
