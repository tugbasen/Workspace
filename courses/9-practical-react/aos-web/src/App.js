import React,{Component} from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Home from './components/Home';
import Hakkimizda from './components/About';
import Iletisim from './components/Contact';

class App extends Component {
  render(){
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar/>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<Hakkimizda />} />
            <Route path="/contact" element={<Iletisim />} />
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
