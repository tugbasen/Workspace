import React from 'react';
import ReactDOM from 'react-dom';
import SingleComment from './singleComment';
import profile1 from './image/pic-1.jpg';
import profile2 from './image/pic-2.jpg';
import profile3 from './image/pic-3.jpg';
import userCard from './userCard'


const App = () => {
    return(
        <div className="ui comments">
            <userCard>
            <SingleComment name="alex" date="today at 5:00pm" text="it is amazing" picture={profile1}/>
            </userCard>
            <SingleComment name="jack" date="today at 9:00pm" text="great job" picture={profile2}/>
            <SingleComment name="sarah" date="today at 7:00pm" text="thanks" picture={profile3}/>
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)

