import React from 'react';
import { connect } from 'react-redux';

const Home=()=>{
    return(
        <div className="container">
            <h4 className="center">Anasayfa</h4>
            <p>anasayfa yazıları</p>
        </div>
    )
}

const mapStateToProps=(state)=>{
    return{
        posts:state.posts
    }
}

export default connect(mapStateToProps)(Home);




