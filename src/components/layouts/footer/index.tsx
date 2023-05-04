import './styles.scss';
import { PageImages } from '../../../assets/images';

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-image">
        <img src={PageImages.azlogo} alt='logo'/>
      </div>
      <div className="border-top">
        <div>
          <h3>
            Công ty TNHH AZ Design
          </h3>
        </div>
        <div className="footer-content">
          <p>
            Thiết kế nội ngoại thất các công trình dân dụng, 
            Thiết kế nhà hàng, quán cf, spa, homestay, bungalo…. 
            <br/>
            Xây trọn gói công, cải tạo nhà ở
            <br/>
            Thi công nội thất nhà ở, nhà hàng, quán cà phê
          </p>
          <p>
            Đơn vị tin cậy:
          </p>
          <p>
            Cửa ABS Chi nhánh thái bình nam định
          </p>
          <p>
            Sơn Jotun chi nhánh thái bình
          </p>
          <p>
            Sàn gỗ xanh Inovar
          </p>
        </div>
      </div>
      <div className="border-top">
        <div>
          <h3>
            LIÊN HỆ
          </h3>
        </div>
        <div className="footer-content">
          <p>0981 332 223</p>
          <p>Địa chỉ 243 Đường Lý Thường Kiệt, TP Thái Bình</p>
          <p>Email: azdesigntb@gmail.com</p>
          <p>Mã Số thuế: 1001261020</p>
        </div>
      </div>
      <div className="border-top-dichvu">
        <div>
          <h3>
            DỊCH VỤ
          </h3>
        </div>
        <div>
        <ul className="footer-content">
          <li><a href="##">Nội thất</a></li>
          <li><a href="##">Nhà hàng</a></li>
          <li><a href="##">Homestay</a></li>
          <li><a href="##">Cafe</a></li>
        </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
