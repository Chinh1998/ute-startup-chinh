import React, { Component } from "react";
import Header from "../component/header/Header";
import Register from "../component/header/register/Register";
import Footer from "../component/footer/Footer";
class RegisterPage extends Component{

    render(){
        return(
          <div className="App">
          <Header history={this.props.history}/>
          <div className="section">
              <div className="Container">
              <Register history={this.props.history}/>
              </div>
          </div>
          <div className="footer" >
              <Footer/>
          </div>
      </div>
        );
    }
}
export default RegisterPage;