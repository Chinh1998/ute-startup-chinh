import React, {Component} from  "react";
import ls from 'local-storage'

class Position extends Component{
    constructor(props){
        super(props);
        this.state = {
            name:"",
            positions: [],
        };
        this.onChange = this.onChange.bind(this)
        this.createPosition=this.createPosition.bind(this)
    }
    onChange(e) {
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    async componentDidMount() {
        const response = await fetch('/positions');
        const body = await response.json();
        this.setState({ positions: body });
      }
    render(){
        const {positions} = this.state
        return(
            <div className="position">
                <div className="header_approve"><h2 className="btn btn-secondary">
                    Danh Sách Chức Vụ</h2></div>
                {positions.map(position => <p key={position.id}>
                    <label className="badge-primary">Tên chức vụ</label><label className="alert alert-primary">{position.name}</label></p>
                    )
                }
                <div className="form_createmajor">
                <li className="menu-li">
                <label className="btn btn-info">Thêm Chức Vụ</label>
                <ul className="sub-createmajor">
                <form onSubmit={this.createPosition}>
                    <fieldset>
                        <label >Tên Chức Vụ</label>
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
    async createPosition(event){
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
     const reponse= await fetch('/positions',requestOptions);
     if(reponse.ok){
         alert("Tạo thành công");
         const results = await fetch('/positions');
         const body = await results.json();
         this.setState({ positions: body });
     }
    }

}
export default Position;