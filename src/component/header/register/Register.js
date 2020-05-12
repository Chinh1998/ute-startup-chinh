import React, {Component} from 'react';
import './register.css'
import register from './register.jpg' 
class Register extends Component{
    constructor(props){
        super(props);
        this.state = {
           username:"",
           password:"",
           email:"",
           phone:"",
           positionId:"",
           positions:[],
            };
        this.onChange = this.onChange.bind(this)
        this.register=this.register.bind(this)
     }
     onChange(e) {
        this.setState({
            [e.target.name]:e.target.value
        })
       }

    onhanleChange(ev) {
        this.setState({value: ev.target.value});
       }

       async componentDidMount() {
        const response = await fetch('/positions');
        const body = await response.json();
        this.setState({ positions: body });
      }
    async register(event){

       event.preventDefault();
        const requestOptions = {
            method: "POST",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(this.state)
          };
    const reponse= await fetch('/users/register',requestOptions);
    if(reponse.ok){
        alert("Đăng kí thành công");
        this.props.history.push('/login');
    }
        }
    render(){
        const {positions} = this.state
        return(
            <div className="register">
                    <p className="btn btn-primary">Tài Khoản Mới</p>
                <div >
                    <form onSubmit={this.register} className="regis_form">
                            <label htmlFor="myEmail">Tên Đăng Nhập</label>
                            <input className="form-control" name="username" placeholder="User Name" onChange={this.onChange} />
                            <label htmlFor="myEmail">Email</label>
                            <input type="email" name="email" className="form-control"  placeholder="Email" onChange={this.onChange}/>
                            <label htmlFor="myPassword">Mật Khẩu</label>
                            <input type="password" name="password" className="form-control"  placeholder="Password" onChange={this.onChange}/>
                            <label htmlFor="inputNumberphone">Số Điện Thoại</label>
                            <input type="number" name="phone" className="form-control"  placeholder="0321123321" onChange={this.onChange}/>
                            <label htmlFor="myState">Chức Danh</label>
                            <select name="positionId" onChange={this.onChange} value={this.state.value} onhanleChange={this.onhanleChange.bind(this) } className="form-control">
                                    <option value="" selected hidden>Chọn Chức Danh</option>
                                    {positions.map(position =>
                                    <option  value={position.id} key={position.id}>{position.name}</option>)}

                                </select><br></br>
                            <button type="submit" className="btn btn-danger">Đăng Kí</button><br></br>
                    </form>
                </div>
            <img src={register} alt=""/>
        </div>
    
        );
    }
}

export default Register