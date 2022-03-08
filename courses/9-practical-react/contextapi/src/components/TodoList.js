import React,{useContext} from "react";
import { useState } from "react/cjs/react.development";
import { ThemeContext } from "../contexts/ThemeContext";
import {TodoListContext} from "../contexts/TodoListContext";

// class TodoList extends React.Component{
//     static contextType = ThemeContext;
//     render(){
//         const {isDarkTheme, darkTheme, lightTheme, changeTheme} = this.context;
//         const theme = isDarkTheme ? darkTheme : lightTheme;
//         return(
//             <div style={{background: theme.background, color: theme.text, height: '140px', textAlign:'center'}}>
//                 <p className="item">Plan the family trip</p>
//                 <p className="item">Go shopping for dinner</p>
//                 <p className="item">Go for a walk</p>
//                 <button className="ui button primary" onClick={changeTheme}>change the theme</button>
//             </div>
//         )
//     }
// }

const TodoList=()=>{
    const [todo, setTodo] = useState('');
    const {isDarkTheme, darkTheme, lightTheme, changeTheme} =useContext(ThemeContext);
    const {todos, dispatch} = useContext(TodoListContext);
    const theme = isDarkTheme ? darkTheme : lightTheme;
    
    const handleChange = e =>{
        setTodo(e.target.value);
    };

    const handleFormSubmit = e =>{
        e.preventDefault();
        dispatch({type: 'ADD_TODO', text: todo})
    };

    const handleRemoveTodo = e =>{
        const id = e.target.id;
        dispatch({type:'REMOVE_TODO', id})
    }

    return(
        <div style={{background: theme.background, color: theme.text, textAlign:'center'}}>
            {
                todos.length ? (
                    todos.map(todo =>{
                        return <p key={todo.id} id={todo.id} onClick={handleRemoveTodo} className="item">{todo.text}</p>
                    })
                ) : (
                    <div>you have no todos</div>
                )
            }
            <form onSubmit={handleFormSubmit}>
                <label htmlFor="todo">Add todo: </label>
                <input type="text" id="todo" onChange={handleChange} />
                <input className="ui button primary" type="submit" value="Add new todo" style={{marginRight:'4px'}} />
                <button className="ui button primary" onClick={changeTheme}>change the theme</button>
            </form>
        </div>
    );
}

export default TodoList;


