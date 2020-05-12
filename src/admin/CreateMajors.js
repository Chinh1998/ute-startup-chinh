import React, {Component} from 'react';
import ls from 'local-storage'
import './admin.css'
class CreateMajors extends Component{
    constructor(props){
        super(props);
        this.state = {
            maNganh:"",
            name:"",
           };
        this.onChange = this.onChange.bind(this)
        this.createMajors=this.createMajors.bind(this)
     }
     onChange(e) {
        this.setState({
            [e.target.name]:e.target.value
        })
       }
    async createMajors(event){
        const jwtToken = ls.get('jwtToken');
       event.preventDefault();
        const requestOptions = {
            method: "POST",
            headers: {
                "Content-Type":"application/json",
                'Authorization': "Bearer" + jwtToken
        },
            body: JSON.stringify(this.state)
          };
    const reponse= await fetch('/major',requestOptions);
    if(reponse.ok){
        alert("Tạo thành công");
        window.location.reload(true);
    }
        }
    render(){
        return(
            <div>
                <div className="form_createmajor">
                <li className="menu-li"><label className="btn btn-info">Thêm Chuyên Ngành</label>
                <ul className="sub-changepass">
                <form onSubmit={this.createMajors}>
                    <fieldset>
                        <label >Mã Chuyên Ngành</label>
                        <input className="form-control" name="maNganh" onChange={this.onChange} />
                        <label >Tên Chuyên Ngành</label>
                        <input className="form-control" name="name" onChange={this.onChange} />
                        <button type="submit" className="btn btn-danger">Thêm</button><br></br>
                    </fieldset>
                </form>
                </ul>
            </li>
            </div>
        </div>
        );
    }
}

export default CreateMajors