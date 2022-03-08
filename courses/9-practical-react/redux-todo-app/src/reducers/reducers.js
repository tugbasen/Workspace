
import { act } from "react-dom/test-utils";
import { combineReducers } from "redux";
import { ADD_TODO } from "../actions/action";

function todo(state,action){
    switch (action.type){
        case ADD_TODO:
            return{
                id:action.id,
                text:action.text
            }
            default:
                return state
    }
}

function todos(state=[],action)
{
    switch (action.type){
        case ADD_TODO:
            return [...state,todo(undefined,action)]
            default:
                return state
    }
}

const todoApp=combineReducers({
    todos 
})

export default todoApp;


