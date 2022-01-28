import React from "react";
import { ThemeContext } from "../contexts.js/ThemeContext";
import { AuthContext } from "../contexts.js/AuthContext";

class Navbar extends React.Component{
    render(){
        return(
            <AuthContext.Consumer>{(authContext)=>(
                <ThemeContext.Consumer>{(themeContext)=>{
                    const {isDarkTheme, darkTheme, lightTheme}= context;
                    const {isLoggedIn, changeAuthStatus} = authContext;
                    const theme= isDarkTheme? darkTheme : lightTheme;
                    return(
                        <nav style={{background:theme.background, color: theme.text, height:'120px'}}>
                            <h2 style={{textAlign: 'center'}}>
                                Oak Academy
                            </h2>
                            <p 
                                style={{textAlign: 'center'}}
                                onClick={changeAuthStatus}
                            >
                                {isLoggedIn? 'logged in' : 'logged out'}
                            </p>
                            <div className="ui three buttons">
                                <button className="ui button">overwiev</button>
                                <button className="ui button">contact</button>
                                <button className="ui button">support</button>
                            </div>
                        </nav>
                    )
                }}
                </ThemeContext.Consumer>
            )}
            </AuthContext.Consumer>
        )
    }
}

export default Navbar;

