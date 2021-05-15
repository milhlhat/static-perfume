import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

// Common Header Components
import MainMenu from './partials/main-menu';
import CartMenu from './partials/cart-menu';
import SearchForm from './partials/search-form';
import LoginModal from '../features/modal/login-modal';

import { showModal } from '../../actions';

function Header(props) {
	const { container = 'container' } = props;

	// function openLoginModal ( e ) {
	//     showModal( 'login' );
	//     e.preventDefault();
	// }

	function hideNotificationHandler(e) {
		document.querySelector('.notification').style.display = 'none';
		e.preventDefault();
	}

	return (
		<>
			<div
				className="notification"
				style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/home/notification-back.jpg)` }}
			>
				<div className="notify-content d-flex justify-content-center align-items-center">
					<h3>HIỆN TẠI WEBSITE ĐANG THỬ NGHIỆM, GIÁ SẢN PHẨM CHƯA PHẢI LÀ CHÍNH THỨC</h3>
					<i className="icon-close text-white ml-1" onClick={hideNotificationHandler}></i>
				</div>
				 
			</div>
			<header className="header">
				{/* <div className="header-top">
					<div className={container}>
						<div className="header-left">
							  <div className="header-dropdown">
                                <Link to="#">Usd</Link>
                                <div className="header-menu">
                                    <ul>
                                        <li><Link to="#">Eur</Link></li>
                                        <li><Link to="#">Usd</Link></li>
                                    </ul>
                                </div>
                            </div>  
							<div className="pt-2 pb-2"></div>
						</div>

					  <div className="header-right">
							<a href="tel:0819287888">
								<i className="icon-phone"></i>Call: 0819287888
							</a>
						  <ul className="top-menu">
                                <li>
                                    <Link to="#">Hỗ Trợ</Link>
                                    <ul>
                                        <li><a href="tel:0819287888"><i className="icon-phone"></i>Call: 0819287888</a></li>
                                        <li><Link to={ `${process.env.PUBLIC_URL}/pages/about` }>Giới thiệu</Link></li>
                                        <li><Link to={ `${process.env.PUBLIC_URL}/pages/contact` }>Liên hệ</Link></li>
                                    </ul>
                                </li>
                            </ul>  
						</div> 
					</div>
				</div> */}

				<div className="header-middle sticky-header">
					<div className={container}>
						<div className="header-left">
							<button className="mobile-menu-toggler">
								<span className="sr-only">Toggle mobile menu</span>
								<i className="icon-bars"></i>
							</button>

							<Link to={`${process.env.PUBLIC_URL}`} className="logo">
								<img
									src={`${process.env.PUBLIC_URL}/assets/images/home/logo-ngang-4.svg`}
									alt="Molla Logo"
									width="100"
									height="25"
								/>
							</Link>

							<MainMenu />
						</div>

						<div className="header-right">
							<SearchForm />
							{/* <div className="wishlist">
								<Link to={`${process.env.PUBLIC_URL}/shop/wishlist`} title="Wishlist">
									<i className="icon-heart-o"></i>
									<span className="wishlist-count">{isWishlist.length}</span>
								</Link>
							</div> */}

							<CartMenu />
						</div>
					</div>
				</div>
				<LoginModal />
			</header>
		</>
	);
}

function mapStateToProps(state) {
	return {
		isWishlist: state.wishlist.list,
	};
}

export default connect(mapStateToProps, { showModal })(Header);
