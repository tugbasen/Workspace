import React, { useState, useEffect } from "react";
import AddNewTodo from "./AddNewTodo";

const TodoList=()=>{
    const [todos, setTodos] = useState([
        {text: 'pay bills', id: 1},
        {text: 'do you homework', id: 2},
        {text: 'feed the dog', id:3}
    ]);

    const [count,setCount] = useState(0);

    const addTodo=(text)=>{
        setTodos([
            ...todos,
            {text, id: Math.random()}
        ]);
    };

    useEffect(()=>{
        console.log('useEffect todos',todos);
    }, [todos]);

    useEffect(()=>{
        console.log('useEffect count',count);
    }, [todos]);

    useEffect(()=>{
        console.log('this hook runs aat initial render')
    }, []);

    return(
        <div>
            <ul>
                {
                  todos.map(todo=>{
                      return(<li key={todo.id}>{todo.text}</li>)
                  })
                }
            </ul>
            <AddNewTodo addTodo={addTodo} />
            <button onClick={()=> setCount(count + 1)}>score:{count}</button>
        </div>
    )
};

export default TodoList;






