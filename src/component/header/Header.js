import React, {Component} from 'react';
import './header.css'
import Menu from './menu/Menu';
import logo from './logo.png';
import Signup from './register/Signup';
import { Link } from 'react-router-dom';

class Header extends Component{
    render(){
        return(
            <div className="header">
                <div className="logo_app">
                    <Link to="/"><img alt="logo" to="/"  src={logo}/></Link>
                </div>
                <div className="nav">
                    <Menu/>
                </div>
                <div className="signup">
                    <Signup history={this.props.history}/>
                </div>
            </div>
        );
    }
}

export default Header;