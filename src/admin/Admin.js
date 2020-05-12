import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import './admin.css'
import ls from 'local-storage'
import AdminApprove from './AdminApprove';
import logo from './logo.png'
import Majors from './Majors';
import Position from './Position';

class Admin extends Component{
    constructor(props){
        super(props);
        this.onClick = this.onClick.bind(this);
    }
    onClick(){
        ls.remove('jwtToken');
        ls.remove('user');
        this.props.history.push('/login');
        window.location.reload(true);
    }
    render() {
        const user=JSON.parse(localStorage.getItem('user'));
       return (
        <div>
            <div className="admin">
                <Link to="/"><img src={logo} alt=""/></Link> 
                <Link to={"/users/"+user.id} className="showName" >Admin:{user.username}</Link>
                            <li><Link to="/logout" className="btn btn-outline-light" onClick={this.onClick}>Đăng Xuất</Link></li>
                            <li><Link to="/news/post" className="btn btn-outline-light">Viết Bài</Link></li>
                            <li><Link to="/my_profile" className="btn btn-outline-light" >My File</Link></li>
                
            </div>
            <AdminApprove/>
            <div className="right">
                <Majors/>
                <Position/>
            </div>
        </div>
  );
}
}
export default Admin;