import React from "react";
import {Typography, Paper, Avatar, Button, makeStyles} from '@material-ui/core';
import VerifiedUserOutlined from '@material-ui/icons/VerifiedUserOutlined';
import withStyles from "@material-ui/core/styles/withStyles";
import {Link} from 'react-router-dom';

const styles=makeStyles(theme=>({
    main:{
        width:'auto',
        display:'block',
        mmarginLeft:theme.spacing.unit*3,
        marginRight:theme.spacing.unit*3,
        [theme.breakpoint.up(400+theme.spacing.unit*3*2)]:{
            width:400,
            mmarginLeft:'auto',
            marginRight:'auto'
        },
    },
    paper:{
        marginTop:theme.spacing.unit*10,
        display:'flex',
        flexDirection:'column',
        alignItmes:'center',
        padding:`${theme.spacing.unit*2}px ${theme.spacing.unit*3}px ${theme.spacing.unit*4}px`
    },
    avatar:{
        margin:theme.spacing.unit,
        backgroundColor:theme.palette.secondary.main,

    },
    submit:{
        marginTop:theme.spacing.unit,
    }
}))

function HomePage(props){

    const {classes}=props;
    return(
        <main className={classes.main}>
            <Paper className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <VerifiedUserOutlined/>
                </Avatar>
            </Paper>
        </main>
    )
}

export default withStyles(styles)(HomePage);
