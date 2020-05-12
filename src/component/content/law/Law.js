import React, { Component } from "react";
import law1 from './law1.jpg'
import law2 from './law2.png'
import law3 from './lau3.jpg'
import { Link } from "react-router-dom";
import './law.css'

class Law extends Component{

    render(){
      return(
        <div>
        <div className="card" >
            <img className="card-img-top" src={law1} alt=""/>
            <div className="card-body">
            <Link to="/">Những trường hợp không cần đăng kí kinh doanh</Link>
            </div>
        </div>
        <div className="card" >
            <img className="card-img-top" src={law2} alt=""/>
            <div className="card-body">
            <Link to="/">Luật sư chia sẻ những vấn đề pháp lý Startup cần lưu ý khi khởi nghiệp</Link>
            </div>
        </div>
        <div className="card" >
            <img className="card-img-top" src={law3} alt=""/>
            <div className="card-body">
            <Link to="/">Những trường hợp không cần đăng kí kinh doanh</Link>
            </div>
        </div>
        </div>
        );
    }
}
export default Law;