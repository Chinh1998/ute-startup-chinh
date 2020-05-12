import React, { Component } from 'react';
import './homepage.css';
import '../bootstrap.min.css';
import Header from '../component/header/Header';
import Footer from '../component/footer/Footer';
import Vertical from '../component/aside/Vertical';
import MajorNews from '../component/news/MajorNews';
import Aside from '../component/aside/Aside';


class MajorNewsPage extends Component {
    render() {
      const majorId = this.props.match.params.majorId;
       return (
        <div className="App">
        <Header history={this.props.history}/>
        <div className="section">
            <div>
                <Aside/>
            </div>
            <div className="Container">
                <MajorNews majorId={majorId}/>
            </div>
            <div>
                  <Vertical/>
            </div>
        </div>
        <div className="footer" >
            <Footer/>
        </div>
    </div>
  );
}
}

export default MajorNewsPage;
