import React, {Component} from  "react";
import "./major.css"

class Majors extends Component{
    constructor(props){
        super(props);
        this.state = {
            maNganh:"",
            name:"",
            majors: [],
        };
        this.onChange = this.onChange.bind(this)
        this.createMajors=this.createMajors.bind(this)
    }
    onChange(e) {
        this.setState({
            [e.target.name]:e.target.value
        })
       }
    async componentDidMount() {
        const response = await fetch('/major');
        const body = await response.json();
        this.setState({ majors: body });
      }
    render(){
        const {majors} = this.state
        return(
            <div className="majors">
                <div className="header_approve"><h2 className="btn btn-secondary">
                    Danh Sách Chuyên Ngành</h2></div>
                {majors.map(major => <p key={major.id}>
                    <label className="badge-primary">{major.maNganh}</label>
                    <label className="alert alert-primary">{major.name}</label></p>
                    )
                }
                <div className="form_createmajor">
                <li className="menu-li">
                <label className="btn btn-info">Thêm Chuyên Ngành</label>
                <ul className="sub-createmajor">
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
    async createMajors(event){
        event.preventDefault();
         const requestOptions = {
             method: "POST",
             headers: {"Content-Type":"application/json"},
             body: JSON.stringify(this.state)
           };
     const reponse= await fetch('/major',requestOptions);
     if(reponse.ok){
         alert("Tạo thành công");
         const results = await fetch('/major');
         const body = await results.json();
         this.setState({ majors: body });
     }
    }

}
export default Majors;