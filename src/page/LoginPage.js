import React, { Component } from 'react';
import './homepage.css';
import '../bootstrap.min.css';
import Header from '../component/header/Header';
import Footer from '../component/footer/Footer';
import Login from '../component/header/register/Login';


class LoginPage extends Component {
    render() {
       return (
        <div className="App">
        <Header history={this.props.history}/>
        <div className="section">
            <div className="Container">
            <Login history={this.props.history}/>
            </div>
        </div>
        <div className="footer" >
            <Footer/>
        </div>
    </div>
  );
}
}

export default LoginPage;
