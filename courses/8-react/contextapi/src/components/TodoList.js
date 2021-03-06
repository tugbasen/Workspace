import React from "react";
import { ThemeContext } from "../contexts.js/ThemeContext";

class TodoList extends React.Component{
    static contextType=ThemeContext;
    render(){
        const {isDarkTheme, lightTheme, darkTheme, changeTheme} = this.context;
        const theme=isDarkTheme? darkTheme : lightTheme;
        return(
            <div style={{background: theme.background, color: theme.text, height:'140px', textAlign:'center'}}>
                <p className="item">plan the family trip</p>
                <p className="item">go for shopping for dinner</p>
                <p className="item">go for a walk</p>
                <button className="ui button primary" onClick={changeTheme}>change theme</button>
            </div>
        )
    }
    
}

export default TodoList;

