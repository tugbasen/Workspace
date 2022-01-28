import React from 'react';
import axios from 'axios';
import SearchInput from './searchInput';
import ImageList from './ImageList';

class App extends React.Component {

    state = { images: []}

    onSearchSubmit= async (entry) => {
       const response =  await  axios.get(`https://pixabay.com/api/?key=24212086-58bc9c3f9857d412f4d7467a4&q=${entry}&image_type=photo`)
        this.setState({images:response.data.hits})
    } 
    
    render(){
        return (
            <div className="ui container" style={{marginTop:'30px'}}>
                <SearchInput onSearchSubmit={(this.onSearchSubmit)} />
                <ImageList images={this.state.images} />
            </div>
        )
    }
}


export default App;




