import React, { Component } from "react";
import {
  Link
} from "react-router-dom";
import './menu.css';
class Menu extends Component {
    constructor(props){
        super(props);
        this.state = {
            majors: []
           };
    }
   
    async componentDidMount() {
        const response = await fetch('/major');
        const body = await response.json();
        this.setState({ majors: body });
      }
    render() {
        const {majors} = this.state
        return (
        <div className="navbar">
            <div className="menu">
                  <li className="menu_li"><Link to="/" className="btn btn-info">TRANG CHỦ</Link></li> 
                  <li className="menu_li"><Link to="/about" className="btn btn-info">KHỞI NGHIỆP</Link></li> 
                  <li className="menu_li"><Link to="/allnews" className="btn btn-info">NGÀNH KHỞI NGHIỆP</Link>
                    <ul className="sub-menu">
                        {majors.map(major => <li key={major.id}>
                            <Link  to={"/major/"+major.id} className="btn btn-primary"  >{major.name}</Link></li>)}
                    </ul>
                  </li> 
                  <li className="menu_li"><Link to="/law" className="btn btn-info">PHÁP LÝ</Link></li> 
                  <li className="menu_li"><a href="http://ute.udn.vn/default.aspx" className="btn btn-info">UTE.UDN.VN </a> </li>
                  <li className="menu_li formsearch">
                      <form className="form-inline">
                          <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                          <button className="btn btn-success " type="submit">Search</button>
                      </form>
                  </li>
              </div>
          </div>
          
        );
    }
}

export default Menu;
