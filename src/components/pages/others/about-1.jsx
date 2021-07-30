import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

// import Custom Components
import Breadcrumb from '../../common/breadcrumb';
import ProfileOne from '../../features/profile/profile-one';
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
								hoa chính hãng đến với mọi người, giúp mọi người tiếp cận đến nước hoa một cách dễ dàng.
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

					{/* <h2 className="title text-center mb-4">Meet Our Team</h2>

					<div className="row">
						<div className="col-md-6">
							<ProfileOne
								image={``}
								name="Nguyễn Minh Nhật"
								title="Founder"
								content=""
								facebook="https://www.facebook.com/milhlhat"
							/>
						</div>
						<div className="col-md-6">
							<ProfileOne
								image={``}
								name="Ngọc Yến"
								title="Co-Founder"
								content=""
								facebook=""
							/>
						</div>
					
					</div> */}
				</div>

				<div className="mb-2"></div>

			
			</div>
		</div>
	);
}

export default React.memo(AboutOne);
