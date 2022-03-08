import React from "react";
import HomePage from '../HomePage';
import Dashboard from '../Dashbord';
import Login from '../Login';
import Register from '../Register';
import {MuiThemeProvider,createTheme} from '@material-ui/core/styles';
import {CssBaseline} from '@material-ui/core';
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";

const tema=createTheme();

export default function App(){
    return(
        <MuiThemeProvider theme={tema}>
            <CssBaseline/>
            <Router>
                <Routes>
                    <Route exact path='/' component={HomePage}/>
                    <Route exact path='/login' component={Login}/>
                    <Route exact path='/register' component={Register}/>
                    <Route exact path='/dashboard' component={Dashboard}/>
                </Routes>
            </Router>
        </MuiThemeProvider>
    )
}

