import React from "react";
import {connect} from 'react-redux';

const Contact = (props) => {
    console.log(props.cards);
    setTimeout(() => {
     props.history.push('./about')   
    },2000)

    return(
        <div 
        className="ui raised very padded text container segment"
        style={{marginTop:'80px'}}
        >
            <h3 className="ui header">Contact</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo nulla atque ipsa, id enim quas qui autem! Cupiditate, iure aspernatur blanditiis suscipit quidem esse fugit magni dolore iste at quam</p>
        </div>
    )
}

const mapStateToProps=(state)=>{
    const {cards} = state.cards;
    return {
        cards: cards
    }
}

export default connect(mapStateToProps)(Contact);