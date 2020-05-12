import React,{Component} from 'react';
import './footer.css'
import facebook from './fb-logo.png';
import ute from './logo-truong-250.png'

class Footer extends Component{
    
    render(){
        return(
			<div>
            	<div className="infor">
					<h5 className="mb-4 font-weight-bold">UTE KHỞI NGHIỆP</h5>
					<h6 className="font-weight-bold mb-0">Địa Chỉ</h6>
					<p>48 Cao Thắng - Thanh Bình - Hải Châu - Đà Nẵng</p>
					<h6 className="font-weight-bold mb-0">Have any questions?</h6>
					<p>Support@userthemes.com</p>
					<h6 className="font-weight-bold mb-0">Điện thoại:</h6>
					<p>(0236) 3822571</p>
				</div>
				<div className="purpose">
					<h5 className="mb-4 font-weight-bold">PURPOSE</h5>
					<p className="mb-0">@userthemesrel HTML Version Out Now</p>
					<label>10 Mins Ago</label>
					<p className="mb-0">@userthemesrel HTML Version Out Now</p>
					<label>10 Mins Ago</label>
					<p className="mb-0">@userthemesrel HTML Version Out Now</p>
					<label>10 Mins Ago</label>
				</div>
				<div className="connect">
					<h5 className="mb-4 font-weight-bold">CONNECT WITH US</h5>
					<input className="form-control mr-sm-2" type="email" placeholder="Put your Email"/>
					<ul >
						<li className= "icon_connect"><a href="http://ute.udn.vn" title="ute"><img src={ute} alt=""/>DHSP Kỹ Thuật Đà Nẵng</a></li>
						<li className= "icon_connect"><a href="https://www.facebook.com/groups/UTECNTT/" title="facebook"><img src={facebook} alt=""/>GroupIT-UTE</a></li>
					</ul>
				</div>

				<div className="copyright">
					<div className="container">
						<div className="row">
							<div className="col-md-12 ">
								<div className="text-center text-white">
									&copy; Copyright 2019 Website University of Technology and Education - The University of Danang. All Rights Reserved.
								</div>
							</div>
						</div>
					</div>
				</div>
				</div>
      
        );
    }
}

export default Footer;