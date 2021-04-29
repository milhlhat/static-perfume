import React from 'react';
import { Link } from 'react-router-dom';

function Footer ( props ) {
    const { logoFooter = "/assets/images/home/logo-ngang-4.svg" } = props;
    const { container = "container" } = props;

    return (
        <footer className="footer footer-2">
            <div className={ container }>
                <hr className="mb-7" />
                <div className="row">
                    <div className="col-md-4">
                        <div className="widget widget-about">
                            <img src={ `${process.env.PUBLIC_URL}${logoFooter}` } className="footer-logo" alt="Footer Logo" width="100" height="25" />
                            <p className="pr-5">22tuoi.com là một trang web được tạo ra từ 2 chàng sinh viên nghèo trường FPT chuyên bán nước hoa chiết các loại. trang web nhằm mục đích mang lại cho các bạn cơ hội được sử dụng nước mà không tốn quá nhiều chi phí. mong các bạn ủng hộ shop và đóng góp ý kiến nếu có thắc mắc.  </p>

                            <div className="widget-about-info">
                                <div className="row">
                                    <div className="col-sm-6 col-md-4 phoneNum">
                                        <span className="widget-about-title">Mọi thắc mắc xin liên hệ:</span>
                                        <a href="tel:0819287888" target="_blank">0819287888</a>
                                    </div>
                                    <div className="col-sm-6 col-md-8 payment">
                                        <span className="widget-about-title">Phương thức thanh toán</span>
                                        <figure className="footer-payments d-flex">
                                            <img src={ `${process.env.PUBLIC_URL}/assets/images/pay/momo_logo.png` } alt="Payment methods" width="25" height="20" />
                                            <img src={ `${process.env.PUBLIC_URL}/assets/images/pay/viettelpay.jpg` } alt="Payment methods" width="25" height="20" />
                                            <img src={ `${process.env.PUBLIC_URL}/assets/images/pay/bank.jpg` } alt="Payment methods" width="25" height="20" />
                                        
                                        </figure>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className=" col-sm-4 col-md-4">
                        <div className="widget  ">
                            <h4 className="widget-title">Thông tin</h4>

                            <ul className="widget-list">
                                <li><Link to={ `${process.env.PUBLIC_URL}/about` }>About 22tuoi.com</Link></li>
                                <li><Link to={ `${process.env.PUBLIC_URL}/pages/about` }>Làm sao để mua hàng?</Link></li>
                                <li><Link to={ `${process.env.PUBLIC_URL}/pages/faq` }>Đặt câu hỏi</Link></li>
                                <li><Link to={ `${process.env.PUBLIC_URL}/pages/contact` }>Liên hệ qua messenger</Link></li>
                            </ul>
                        </div>
                    </div>

                    <div className=" col-sm-4 col-md-4">
                        <div className="widget  ">
                            <h4 className="widget-title">Dịch vụ khách hàng</h4>

                            <ul className="widget-list">
                                <li><Link to="#">Miễn phí vận chuyển</Link></li>
                                <li><Link to="#">Hoàn tiền khi phát hiện hàng giả</Link></li>
                                <li><Link to="#">Đổi trả trong 7 ngày</Link></li>
                            </ul>
                        </div>
                    </div>

                    {/* <div className="col-xl-5col col-sm-4 col-md-4">
                        <div className="widget">
                            <h4 className="widget-title">My Account</h4>

                            <ul className="widget-list">
                                <li><Link to="#">Sign In</Link></li>
                                <li><Link to={ `${process.env.PUBLIC_URL}/shop/cart` }>View Cart</Link></li>
                                <li><Link to={ `${process.env.PUBLIC_URL}/shop/wishlist` }>My Wishlist</Link></li>
                                <li><Link to="#">Track My Order</Link></li>
                                <li><Link to="#">Help</Link></li>
                            </ul>
                        </div>
                    </div> */}
                </div>
            </div>

            <div className="footer-bottom">
                <div className={ container }>
                    <p className="footer-copyright">Copyright © { ( new Date() ).getFullYear() } 22 Store. All Rights Reserved.</p>
                    {/* <ul className="footer-menu">
                        <li><Link to="#">Terms Of Use</Link></li>
                        <li><Link to="#">Privacy Policy</Link></li>
                    </ul> */}

                    <div className="social-icons social-icons-color">
                        <span className="social-label">Mạng xã hội</span>
                        <Link to="#" className="social-icon social-facebook" title="Facebook" target="_blank"><i className="icon-facebook-f"></i></Link>
                        <Link to="#" className="social-icon social-twitter" title="Twitter" target="_blank"><i className="icon-twitter"></i></Link>
                        <Link to="#" className="social-icon social-instagram" title="Instagram" target="_blank"><i className="icon-instagram"></i></Link>
                        <Link to="#" className="social-icon social-youtube" title="Youtube" target="_blank"><i className="icon-youtube"></i></Link>
                        <Link to="#" className="social-icon social-pinterest" title="Pinterest" target="_blank"><i className="icon-pinterest"></i></Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default React.memo( Footer );