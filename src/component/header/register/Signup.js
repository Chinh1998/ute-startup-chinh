import React,{Component} from 'react';
import {Link} from'react-router-dom';
import people from "./microsoft-img.png"
import ls from 'local-storage'
import  './signup.css'

class Signup extends Component{
    constructor(props){
        super(props);
        this.onClick = this.onClick.bind(this);
    }
    isLoggedIn() {
        const token = ls.get("jwtToken");
        return token !== undefined && token !== null;
    }
    isAdmin(){
        const { roles } = ls.get('user');
        return roles.some(role => role.name === "ADMIN");
    }
    
    onClick(){
        ls.remove('jwtToken');
        ls.remove('user'); 
        this.props.history.push('/login');
        window.location.reload(true);
    }
    
    render() {
        if (this.isLoggedIn()) {
            const user=JSON.parse(localStorage.getItem('user'));
            return (
                <div>
                    <img className="people" src={people} alt=""></img>
                    <li className="menu-li"><Link to={"/users/"+user.id} className="showName" > User: {user.username}</Link>
                    <ul className="sub-menu">
                          <li><Link to="/logout" className="btn btn-success" onClick={this.onClick}>Đăng Xuất</Link></li>
                          <li><Link to="/news/post" className="btn btn-success">Tạo Bài Viết</Link></li>
                          <li><Link to="/my_profile" className="btn btn-success" >Bài Viết Của Tôi</Link></li>
                          {!this.isAdmin() && 
                          <li><Link to="/my_pendingnews" className="btn btn-success" >Bài Chờ Xét Duyệt</Link></li>
                          }
                          {this.isAdmin() && 
                          <li><Link to="/admin" className="btn btn-success" >Trang Quản Trị</Link></li>
                          }
                      </ul>
                    </li>
                </div>
                );
            } else {
                return(
                    <div>
                        <li className='register'><Link to="/register" className="btn btn-danger">ĐĂNG KÝ</Link></li>
                        <li className='login'><Link to="/login" className="btn btn-danger">ĐĂNG NHẬP</Link></li> 
                    </div>
                );
            }
        }
    }

export default Signup;