import React, {Component} from 'react';
import ls from 'local-storage'
import login from './login.jpg'
import './login.css'

class Login extends Component{
    constructor(props){
        super(props);
        this.login = this.login.bind(this)
        this.onChange = this.onChange.bind(this)
        this.state ={
            username:"",
            password:"",
           isLoginFail: false,
           loading: false
        }
    }
    onChange(e){
        this.setState({
            [e.target.name]:e.target.value
        })
       }
    async login(event){
        event.preventDefault();
        this.setState({loading: true})
        const requestOptions = {
            method: "POST",
            headers: {
                "Content-Type":"application/json",
            },
            body: JSON.stringify(this.state)
          };
            const response = await fetch('/users/login',requestOptions);

            if (response.ok) {
                const result = await response.json();
                ls.set('jwtToken', result.token);
                ls.set('user',result.user)
                this.setState({isLoginFail: false})
                this.props.history.push('/');
                window.location.reload(false);
            } else if (response.status === 401) {
                console.log("login failed");
                this.setState({isLoginFail: true, loading: false})
            } else if (response.status === 500) {
                console.log("500");
                // Something went wrong
                this.setState({isLoginFail: true})
            }
    }
    render(){
        return(
            <div className="login_page">
                <img src={login} alt=""/>
                <div className="login_form">
                    {this.state.isLoginFail && <p className="faillogin">Tên đăng nhập hoặc mật khẩu sai !</p>}
                <form onSubmit={this.login}>
                    <fieldset>
                        <input className="form-control inputlogin"  placeholder="Tên đăng nhập" name="username" onChange={this.onChange}/>
                        <input className="form-control inputlogin" type="password" placeholder="Mật khẩu"  name="password" onChange={this.onChange} />
                        {!this.state.loading && 
                        <button type="submit" className="btn btn-info actionlogin">LOGIN</button>
                        }
                        {this.state.loading && 
                            <div>
                                <div class="spinner-border text-primary" role="status">
                                <span class="sr-only">Loading...</span>
                                </div>
                                <div class="spinner-border text-secondary" role="status">
                                <span class="sr-only">Loading...</span>
                                </div>
                                <div class="spinner-border text-success" role="status">
                                <span class="sr-only">Loading...</span>
                                </div>
                                <div class="spinner-border text-danger" role="status">
                                <span class="sr-only">Loading...</span>
                                </div>
                                <div class="spinner-border text-warning" role="status">
                                <span class="sr-only">Loading...</span>
                                </div>
                                <div class="spinner-border text-info" role="status">
                                <span class="sr-only">Loading...</span>
                                </div>
                                <div class="spinner-border text-light" role="status">
                                <span class="sr-only">Loading...</span>
                                </div>
                                <div class="spinner-border text-dark" role="status">
                                <span class="sr-only">Loading...</span>
                                </div>
                            </div>
                        }
                    </fieldset>
                </form>
                </div>
            </div>
    
        );
    }
}

export default Login