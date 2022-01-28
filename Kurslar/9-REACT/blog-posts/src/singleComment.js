import React from 'react';
import ReactDOM from 'react-dom';

const singleComment=(props)=>{
    return(
        <div className="comment">
        <a href="#" className="avatar">
            <img src={props.picture} alt="profile " />
        </a>
        <div className="conntent">
            <a href="#" className="author">
                {props.name}
            </a>
            <div className="metadata">
                <span className="date">
                    {props.date}
                </span>
            </div>
            <div className="text">
                {props.text}
            </div>
        </div>
    </div>
    )
}

export default singleComment;
