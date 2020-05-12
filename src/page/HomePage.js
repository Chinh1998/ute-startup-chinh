import React, { Component } from 'react';
import './homepage.css';
import '../bootstrap.min.css';
import Aside from '../component/aside/Aside';
import Content from '../component/content/Content';
import Header from '../component/header/Header';
import Footer from '../component/footer/Footer';
import Vertical from '../component/aside/Vertical';


class HomePage extends Component {
    render() {
       return (
        <div className="App">
          <Header history={this.props.history}/>
          <div className="section">
          <div>
              <Aside/>
          </div>
              <div className="Container">
                  <Content/>
              </div>
          </div>
          
          <div>
                  <Vertical/>
            </div>
          <div className="footer">
              <Footer/>
          </div>
      </div>
  );
}
}

export default HomePage;
