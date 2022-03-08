import React from "react";
import {Link,NavLink} from 'react-router-dom';
import {withRouter} from '../common/withRouter';


const Navbar=(props)=>{
    //console.log(props)
    setTimeout(()=>{
        props.history("/contact");
    },2000);

    return(
        <nav className="nav-wrapper red darken-2">
            <div className="container">
                <a href="#" className="brand-logo">AOS</a>
                <ul className="right">
                    <li><NavLink to="/">Anasayfa</NavLink></li>
                    <li><Link to="/about">Hakkımızda</Link></li>
                    <li><Link to="/contact">İletişim</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default withRouter(Navbar);



