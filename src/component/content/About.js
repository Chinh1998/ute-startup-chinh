import React, { Component } from "react";
import './about.css'
import image from './image.jpg'
class About extends Component{

    render(){
        return(
            <div class="about">
                <div className="about_content">
                    <h4>1. Khởi nghiệp là gì?</h4>
                    <img src={image} alt=""/>
                    <p style={{textAlign:"justify"}}>
                   
                    Khởi nghiệp tức là bạn đã ấp ủ một công việc kinh doanh riêng, thường thì bạn sẽ thành lập một doanh nghiệp mà tại đó bạn là người quản lý, là người sáng lập hoặc đồng sáng lập. Việc cung cấp những sản phẩm mới, dịch vụ mới hay thậm chí kinh doanh những mặt hàng đã có mặt trên thị trường nhưng theo ý tưởng có riêng mình... đều được gọi là khởi nghiệp.

Khởi nghiệp có thể là quá trình tạo ra một lĩnh vực hoạt động mới cho riêng mình. Qua đó bạn có thể thuê các nhân viên về làm việc cho bạn và bạn là người quản lý công ty, doanh nghiệp của mình. Khởi nghiệp mang lại rất nhiều giá trị cho bản thân cũng như nhiều lợi ích cho xã hội, cho người lao động.

Đối với cá nhân theo đuổi việc khởi nghiệp, hoạt động này giúp họ tạo ra công việc, thu nhập cho chính mình mà không phải bắt đầu từ việc đi làm thuê. Họ được tự do trong công việc, và nếu công ty của họ phát triển tốt thì nguồn thu nhập của họ có thể cao gấp nhiều lần so với thu nhập do đi làm thuê mang lại.

Đối với xã hội và nền kinh tế thì các công ty khởi nghiệp tạo ra thêm nhiều công ăn việc làm. Điều này giúp đất nước giải quyết tình trạng thất nghiệp, tạo ra nguồn thu nhập cho người lao động nuôi sống bản thân và gia đình.

Bằng việc tạo ra lượng lớn công ăn việc làm cho người lao động, giữ tỉ lệ thất nghiệp của nền kinh tế ở mức an toàn, khởi nghiệp thành công gián tiếp góp phần ổn định xã hội, giảm thiểu các tệ nạn xã hội do thất nghiệp gây ra như trộm cắp, bài bạc, đua xe, ma túy... Khởi nghiệp cũng góp phần giảm áp lực lên nền kinh tế, trợ cấp xã hội, đưa đất nước ngày càng phát triển.

                    </p>
                </div>
         </div>
        );
    }
}
export default About;