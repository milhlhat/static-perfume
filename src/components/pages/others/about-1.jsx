import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

// import Custom Components
import Breadcrumb from '../../common/breadcrumb';
import ProfileOne from '../../features/profile/profile-one';
import OwlCarousels from '../../features/owl-carousel';
import Testimonial from '../../features/testimonial';

// import Utils
import { mainSlider5 } from '../../settings';

import _data from '../../../mock_data/data.json';

function AboutOne() {
	useEffect(() => {
		document.querySelector('.footer-middle') && document.querySelector('.footer-middle').classList.add('border-0');
	});

	return (
		<div className="main">
			<Helmet>
				<title>Giới thiệu | 22 Store</title>
			</Helmet>

			<h1 className="d-none">22store facebook</h1>

			<Breadcrumb title="About Us" parent1={['Pages', 'pages/about']} adClass="border-0 mb-0" />

			<div className="container">
				<div
					className="page-header page-header-big text-center"
					style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/about-header-bg.jpg)` }}
				>
					<h1 className="page-title text-white">
						About us<span className="text-white">Who we are</span>
					</h1>
				</div>
			</div>

			<div className="page-content pb-0">
				<div className="container">
					<div className="row">
						<div className="col-lg-6 mb-3 mb-lg-0">
							<h2 className="title">Tầm nhìn</h2>
							<p>
								Nước hoa không còn là sản phẩm xa xỉ nữa, đó là thứ mà mọi người có thể tiếp cận. 22
								Store là 1 dự án nhỏ được lập bởi 2 sinh viên ĐH FPT với mong muốn đưa nước
								hoa đến với mọi người, giúp mọi người tiếp cận đến nước hoa một cách dễ dàng.
							</p>
						</div>

						<div className="col-lg-6">
							<h2 className="title">Thông tin liên hệ</h2>
							<p>
								Chúng mình đã đặt thông tin{' '}
								<a href="https://fb.com/22perfumery" target="_blank" rel="noreferrer">
									<b> fanpage</b>
								</a>
								,{' '}
								<a href="https://instagram.com/22perfumery" rel="noreferrer">
									<b> instagram</b>{' '}
								</a>{' '}
								và{' '}
								<a href="tel:0819287888" rel="noreferrer">
									<b>hotline</b>
								</a>{' '}
								khắp mọi nơi trên website để quý khách hàng có thể liên lạc bất cứ lúc nào.{' '}
							</p>
						</div>
					</div>

					<div className="mb-5"></div>
				</div>

				{/* <div className="bg-light-2 pt-6 pb-5 mb-6 mb-lg-8">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-5 mb-3 mb-lg-0">
                                <h2 className="title">Who We Are</h2>
                                <p className="lead text-primary mb-3">Pellentesque odio nisi, euismod pharetra a ultricies <br />in diam. Sed arcu. Cras consequat</p>
                                <p className="mb-2">Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, uctus metus libero eu augue. </p>

                                <Link to={ `${process.env.PUBLIC_URL}/blog/classic` } className="btn btn-sm btn-minwidth btn-outline-primary-2">
                                    <span>VIEW OUR NEWS</span>
                                    <i className="icon-long-arrow-right"></i>
                                </Link>
                            </div>

                            <div className="col-lg-6 offset-lg-1">
                                <div className="about-images">
                                    <img src={ `${process.env.PUBLIC_URL}/assets/images/about/img-1.jpg` } alt="" className="about-img-front" />
                                    <img src={ `${process.env.PUBLIC_URL}/assets/images/about/img-2.jpg` } alt="" className="about-img-back" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}

				<div className="container">
					<div className="row">
						<div className="col-lg-5">
							<div className="brands-text">
								<h2 className="title">The world's premium design brands in one destination.</h2>
								{/* <p>
									Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel,
									dapibus id, mattis vel, nis
								</p> */}
							</div>
						</div>
						<div className="col-lg-7">
							<div className="brands-display">
								<div className="row justify-content-center">
									{_data.brands.default.map((brand, index) => (
										<div className="col-6 col-sm-4" key={index}>
											<Link to="#" className="brand">
												<img
													src={process.env.PUBLIC_URL + '/' + brand.image}
													alt="Brand Name"
												/>
											</Link>
										</div>
									))}
								</div>
							</div>
						</div>
					</div>

					<hr className="mt-4 mb-6" />

					<h2 className="title text-center mb-4">Meet Our Team</h2>

					<div className="row">
						<div className="col-md-6">
							<ProfileOne
								image={`https://scontent.fhph1-2.fna.fbcdn.net/v/t1.6435-9/173736615_3564534123770685_4974400378565027938_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=PLX05w26KCUAX_H9BQZ&_nc_ht=scontent.fhph1-2.fna&oh=c0d1ffd80a32dffbb43bb8729124381d&oe=60BEB1C6`}
								name="Nguyễn Minh Nhật"
								title="Founder & CEO"
								content=""
								facebook="https://www.facebook.com/milhlhat"
							/>
						</div>
						<div className="col-md-6">
							<ProfileOne
								image={`https://scontent.fhph1-1.fna.fbcdn.net/v/t1.6435-9/127264464_229200945290609_8484432226153336988_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=ZRMUzFK4JUAAX_45cU4&_nc_ht=scontent.fhph1-1.fna&oh=d817562a11143445ca457c68c9ccf5fd&oe=60BC12EE`}
								name="Ngô Minh Thắng"
								title="Co-Founder & Product Manager"
								content=""
								facebook="https://www.facebook.com/thangnm99"
							/>
						</div>
						{/* <div className="col-md-4">
							<ProfileOne
								image={`assets/images/team/member-2.jpg`}
								name="Bruce Sutton"
								title="Sales & Marketing Manager"
								content="Sed pretium, ligula sollicitudin viverra, tortor libero sodales leo, eget blandit nunc."
							/>
						</div> */}
					</div>
				</div>

				<div className="mb-2"></div>

				{/* <div className="about-testimonials bg-light-2 pt-6 pb-6">
					<div className="container">
						<h2 className="title text-center mb-3">What Customer Say About Us</h2>

						<OwlCarousels adClass="owl-simple owl-testimonials-photo" carouselOptions={mainSlider5}>
							<Testimonial
								image={`assets/images/testimonials/user-1.jpg`}
								content="“ Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Pellentesque aliquet nibh nec urna. <br/>In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. ”"
								name="Jenson Gregory"
								job="Customer"
							/>

							<Testimonial
								image={`assets/images/testimonials/user-2.jpg`}
								content="“ Impedit, ratione sequi, sunt incidunt magnam et. Delectus obcaecati optio eius error libero perferendis nesciunt atque dolores magni recusandae! Doloremque quidem error eum quis similique doloribus natus qui ut ipsum.Velit quos ipsa exercitationem, vel unde obcaecati impedit eveniet non. ”"
								name="Victoria Ventura"
								job="Customer"
							/>
						</OwlCarousels>
					</div>
				</div> */}
			</div>
		</div>
	);
}

export default React.memo(AboutOne);
