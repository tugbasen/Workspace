import React from 'react';

const userCard = (props) => {
    return(
        <div className="ui card">
            <div className="content">
                <div className="header">
                    alex tancredi
                </div>
                <div className="description">
                    {props.children}
                </div>
            </div>
            <div className="ui bottom button">
                <i className="add icon"></i>
                add friend
            </div>
        </div>
    )
}
export default userCard;


