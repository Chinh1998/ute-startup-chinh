import React, {Component} from  "react";
import ls from 'local-storage';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import "./createpost.css";

class CreatePost extends Component{
    constructor(props){
        super(props);
        this.state = {
            majors: [],
            value:{},
            contents:"",
            isCreating: false
        };
        
         this.createPost=this.createPost.bind(this);
         this.handleOnChange = this.handleOnChange.bind(this);
        }
        onChange(ev) {
            this.setState({value: ev.target.value});
           }
        
        handleOnChange(ev,editor){
            this.setState({
                contents: editor.getData()
            })
        }

        async createPost(event) {
            this.setState({
                isCreating: true
            });
            const token = ls.get('jwtToken');
            event.preventDefault();
            const data= {
                "title": this.title.value,
                "image": this.image.value,
                "content": this.state.contents,
                "majors_id": this.state.value, 
            }
            const requestOptions = {
                method: "POST",
                headers: {
                    "Content-Type":"application/json",
                    'Authorization': "Bearer " + token
                },
                body: JSON.stringify(data)
            };
           const response= await fetch('/news/create', requestOptions);
           if(response.ok){
              alert("tạo thành công");
              this.props.history.push('/my_pendingnews');
           } else {
               console.log(response);
                this.setState({
                    isCreating: false
                });
           }
        }
    async componentDidMount() {
        const response = await fetch('/major');
        const body = await response.json();
        this.setState({ majors: body });
      }
    render(){
        const {majors, isCreating} = this.state
        return(
            <div>
                <div className="createpost_form">
                    <form onSubmit={this.createPost}>
                    <fieldset>
                        <legend>TẠO BÀI VIẾT</legend>
                        <label>Tiêu đề</label>
                        <input ref={(ref)=> {this.title = ref}} type="text" name="title" className="form-control"/>
                        <br></br>
                        <label>Chuyên Ngành</label>
                        <select value={this.state.value} onChange={this.onChange.bind(this) } className="form-control">
                            <option value="" selected hidden>Chọn Ngành</option>
                            {majors.map(major =>
                            <option value={major.id} key={major.id}>{major.name}</option>)}

                        </select>
                        <br></br>
                        <label>Link hình ảnh</label>
                        <input ref={(ref)=> {this.image = ref}} type="text" name="image" className="form-control"/>
                        <br></br>
                        <label>Nội dung</label>
                        <CKEditor editor={ ClassicEditor } onChange={this.handleOnChange}>
                        </CKEditor>
                        <br></br>
                        <button type="submit" className="btn btn-danger"
                            style={{float: "right",width: "20%"}}
                            disabled={isCreating}>Create</button>
                    </fieldset>
                    </form>
                </div>
            </div>
        );
    }

}
export default CreatePost;