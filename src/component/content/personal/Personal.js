import React, {Component} from 'react';
import ls from 'local-storage';
import './personal.css'


class Personal extends Component{
    constructor(){
      super();
      this.state = {
        users: []
       };
    }
    async componentDidMount() {
      const token = ls.get('jwtToken');
      const requestOptions = {
        method: "GET",
        headers: {
            "Content-Type":"application/json",
            'Authorization': "Bearer " + token
        },
       };
      const user = ls.get('user');
      console.log(user);
      const response = await fetch('/users/'+user.id, requestOptions);
      const body = await response.json();
      this.setState({ users: body });
  }
render(){
    const { users} = this.state;
    return(
        <div class="personal">
          <h4>Thông Tin Cá Nhân</h4>
            <label className="badge">Tên đăng nhập:</label> {users.username}<br></br>
            <label className="badge">Số Điện Thoại:</label> {users.phone}<br></br>
            <label className="badge">Chức Danh:</label> {users.functionuser}<br></br>
            <li className="menu-li"><label className="btn btn-info">Đổi mật khẩu</label>
              <ul className="sub-changepass">
                  <li> Mật khẩu cũ:<input type="password" name="password" className="form-control"  placeholder="Password"/></li>
                  <li> Mật khẩu mới:<input type="password" name="password" className="form-control"  placeholder="Password"/></li>
              </ul>
            
            </li>
        </div>
    );
}
}
export default Personal;