import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function MainMenu(props) {
	const [path, setPath] = useState('');
	// const PUBLIC_URL = "/react/molla";

	useEffect(() => {
		setPath(window.location.href);
	});

	// function showAllDemos ( e ) {
	//     let demoItems = document.querySelectorAll( '.demo-item.hidden' );

	//     for ( let i = 0; i < demoItems.length; i++ ) {
	//         demoItems[ i ].classList.toggle( 'show' );
	//     }

	//     document.querySelector( '.view-all-demos' ).classList.toggle( 'disabled-hidden' );
	//     e.preventDefault();
	// }

	return (
		<nav className="main-nav">
			<ul className="menu">
				<li className="" id="menu-home">
					<Link to={`${process.env.PUBLIC_URL}`} className="sf-with-ul">
						Trang chủ
					</Link>
				</li>

				<li className={path.indexOf('shop') > -1 ? 'active' : ''}>
					<Link to={`${process.env.PUBLIC_URL}/shop/nosidebar/boxed`} className="sf-with-ul">
						Sản phẩm
					</Link>
					<ul>
						<li className={path.indexOf('product/default') > -1 ? 'active' : ''}>
							<Link to={`${process.env.PUBLIC_URL}/shop/nosidebar/boxed`} className="sf-with-ul">
								Tất cả sản phẩm
							</Link>
						</li>
						<li className={path.indexOf('product/centered') > -1 ? 'active' : ''}>
							<Link to={`${process.env.PUBLIC_URL}/shop/nosidebar/boxed`} className="sf-with-ul">
								Nam
							</Link>
						</li>
						<li className={path.indexOf('product/extended') > -1 ? 'active' : ''}>
							<Link to={`${process.env.PUBLIC_URL}/shop/nosidebar/boxed`}>
								<span>
									Nữ<span className="tip tip-new">New</span>
								</span>
							</Link>
						</li>
						<li className={path.indexOf('product/gallery') > -1 ? 'active' : ''}>
							<Link to={`${process.env.PUBLIC_URL}/shop/nosidebar/boxed`} className="sf-with-ul">
								Unisex
							</Link>
						</li>
					</ul>
				</li>
				<li className={path.indexOf('product/') > -1 ? 'active' : ''}>
					<Link to={`${process.env.PUBLIC_URL}/shop/nosidebar/boxed`} className="sf-with-ul">
						Thương Hiệu
					</Link>

					<div className="megamenu megamenu-sm">
						<div className="row no-gutters">
							<div className="col-md-6">
								<div className="menu-col">
									<div className="menu-title">Product Details</div>
									<ul>
										<li className={path.indexOf('product/default') > -1 ? 'active' : ''}>
											<Link to={`${process.env.PUBLIC_URL}/product/default/1`}>Default</Link>
										</li>
										<li className={path.indexOf('product/centered') > -1 ? 'active' : ''}>
											<Link to={`${process.env.PUBLIC_URL}/product/centered/9`}>Centered</Link>
										</li>
										<li className={path.indexOf('product/extended') > -1 ? 'active' : ''}>
											<Link to={`${process.env.PUBLIC_URL}/product/extended/8`}>
												<span>
													Extended Info<span className="tip tip-new">New</span>
												</span>
											</Link>
										</li>
										<li className={path.indexOf('product/gallery') > -1 ? 'active' : ''}>
											<Link to={`${process.env.PUBLIC_URL}/product/gallery/1`}>Gallery</Link>
										</li>
										<li className={path.indexOf('product/sticky') > -1 ? 'active' : ''}>
											<Link to={`${process.env.PUBLIC_URL}/product/sticky/6`}>Sticky Info</Link>
										</li>
										<li className={path.indexOf('product/sidebar') > -1 ? 'active' : ''}>
											<Link to={`${process.env.PUBLIC_URL}/product/sidebar/5`}>
												Boxed With Sidebar
											</Link>
										</li>
										<li className={path.indexOf('product/fullwidth') > -1 ? 'active' : ''}>
											<Link to={`${process.env.PUBLIC_URL}/product/fullwidth/2`}>Full Width</Link>
										</li>
										<li className={path.indexOf('product/masonry') > -1 ? 'active' : ''}>
											<Link to={`${process.env.PUBLIC_URL}/product/masonry/4`}>
												Masonry Sticky Info
											</Link>
										</li>
									</ul>
								</div>
							</div>

							<div className="col-md-6">
								<div className="banner banner-overlay">
									<Link to={`${process.env.PUBLIC_URL}/product/centered/27`}>
										<img
											src={`${process.env.PUBLIC_URL}/assets/images/menu/banner-2.jpg`}
											alt="Banner"
										/>

										<div className="banner-content banner-content-bottom">
											<div className="banner-title text-white">
												New Trends
												<br />
												<span>
													<strong>spring {new Date().getFullYear()}</strong>
												</span>
											</div>
										</div>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</li>
				{/* <li className={path.indexOf('pages') > -1 ? 'active' : ''}>
					<Link to={`${process.env.PUBLIC_URL}/shop/nosidebar/boxed`} className="sf-with-ul">
						Nam
					</Link> */}

				{/* <ul>
                        <li className={ path.indexOf( "pages/about" ) > -1 ? 'active' : '' }>
                            <Link to={ `${process.env.PUBLIC_URL}/pages/about` } className="sf-with-ul">About</Link>

                            <ul>
                                <li className={ path.indexOf( "pages/about" ) > -1 && path.indexOf( "pages/about-2" ) === -1 ? 'active' : '' }><Link to={ `${process.env.PUBLIC_URL}/pages/about` }>About 01</Link></li>
                                <li className={ path.indexOf( "pages/about-2" ) > -1 ? 'active' : '' }><Link to={ `${process.env.PUBLIC_URL}/pages/about-2` }>About 02</Link></li>
                            </ul>
                        </li>
                        <li className={ path.indexOf( "pages/contact" ) > -1 ? 'active' : '' }>
                            <Link to={ `${process.env.PUBLIC_URL}/pages/contact` } className="sf-with-ul">Contact</Link>

                            <ul>
                                <li className={ path.indexOf( "pages/contact" ) > -1 && path.indexOf( "pages/contact-2" ) === -1 ? 'active' : '' }><Link to={ `${process.env.PUBLIC_URL}/pages/contact` }>Contact 01</Link></li>
                                <li className={ path.indexOf( "pages/contact-2" ) > -1 ? 'active' : '' }><Link to={ `${process.env.PUBLIC_URL}/pages/contact-2` }>Contact 02</Link></li>
                            </ul>
                        </li>
                        <li className={ path.indexOf( "pages/login" ) > -1 ? 'active' : '' }><Link to={ `${process.env.PUBLIC_URL}/pages/login` }>Login</Link></li>
                        <li className={ path.indexOf( "pages/faq" ) > -1 ? 'active' : '' }><Link to={ `${process.env.PUBLIC_URL}/pages/faq` }>FAQs</Link></li>
                        <li className={ path.indexOf( "pages/404" ) > -1 ? 'active' : '' }><Link to={ `${process.env.PUBLIC_URL}/pages/404` }>Error 404</Link></li>
                        <li className={ path.indexOf( "pages/coming-soon" ) > -1 ? 'active' : '' }><Link to={ `${process.env.PUBLIC_URL}/pages/coming-soon` }>Coming Soon</Link></li>
                    </ul> */}
				{/* </li>
				<li className={path.indexOf('blog/') > -1 ? 'active' : ''}>
					<Link to={`${process.env.PUBLIC_URL}/blog/classic`} className="sf-with-ul">
						Nữ
					</Link> */}

				{/* <ul>
                        <li className={ path.indexOf( "blog/classic" ) > -1 ? 'active' : '' }><Link to={ `${process.env.PUBLIC_URL}/blog/classic` }>Classic</Link></li>
                        <li className={ path.indexOf( "blog/listing" ) > -1 ? 'active' : '' }><Link to={ `${process.env.PUBLIC_URL}/blog/listing` } >Listing</Link></li>
                        <li className={ path.indexOf( "blog/grid" ) > -1 ? 'active' : '' }>
                            <Link to={ `${process.env.PUBLIC_URL}/blog/grid/2cols` } className="sf-with-ul">Grid</Link>
                            <ul>
                                <li className={ path.indexOf( "blog/grid/2cols" ) > -1 ? 'active' : '' }><Link to={ `${process.env.PUBLIC_URL}/blog/grid/2cols` }>Grid 2 columns</Link></li>
                                <li className={ path.indexOf( "blog/grid/3cols" ) > -1 ? 'active' : '' }><Link to={ `${process.env.PUBLIC_URL}/blog/grid/3cols` }>Grid 3 columns</Link></li>
                                <li className={ path.indexOf( "blog/grid/4cols" ) > -1 ? 'active' : '' }><Link to={ `${process.env.PUBLIC_URL}/blog/grid/4cols` }>Grid 4 columns</Link></li>
                                <li className={ path.indexOf( "blog/grid/sidebar" ) > -1 ? 'active' : '' }><Link to={ `${process.env.PUBLIC_URL}/blog/grid/sidebar` }>Grid sidebar</Link></li>
                            </ul>
                        </li>
                        <li className={ path.indexOf( "blog/masonry" ) > -1 ? 'active' : '' }>
                            <Link to={ `${process.env.PUBLIC_URL}/blog/masonry/2cols` } className="sf-with-ul">Masonry</Link>
                            <ul>
                                <li className={ path.indexOf( "blog/masonry/2cols" ) > -1 ? 'active' : '' }><Link to={ `${process.env.PUBLIC_URL}/blog/masonry/2cols` }>Masonry 2 columns</Link></li>
                                <li className={ path.indexOf( "blog/masonry/3cols" ) > -1 ? 'active' : '' }><Link to={ `${process.env.PUBLIC_URL}/blog/masonry/3cols` }>Masonry 3 columns</Link></li>
                                <li className={ path.indexOf( "blog/masonry/4cols" ) > -1 ? 'active' : '' }><Link to={ `${process.env.PUBLIC_URL}/blog/masonry/4cols` }>Masonry 4 columns</Link></li>
                                <li className={ path.indexOf( "blog/masonry/sidebar" ) > -1 ? 'active' : '' }><Link to={ `${process.env.PUBLIC_URL}/blog/masonry/sidebar` }>Masonry sidebar</Link></li>
                            </ul>
                        </li>
                        <li className={ path.indexOf( "blog/mask" ) > -1 ? 'active' : '' }>
                            <Link to={ `${process.env.PUBLIC_URL}/blog/mask/grid` } className="sf-with-ul">Mask</Link>
                            <ul>
                                <li className={ path.indexOf( "blog/mask/grid" ) > -1 ? 'active' : '' }><Link to={ `${process.env.PUBLIC_URL}/blog/mask/grid` }>Blog mask grid</Link></li>
                                <li className={ path.indexOf( "blog/mask/masonry" ) > -1 ? 'active' : '' }><Link to={ `${process.env.PUBLIC_URL}/blog/mask/masonry` }>Blog mask masonry</Link></li>
                            </ul>
                        </li>
                        <li className={ path.indexOf( "blog/single" ) > -1 ? 'active' : '' }>
                            <Link to={ `${process.env.PUBLIC_URL}/blog/single/3` } className="sf-with-ul">Single Post</Link>
                            <ul>
                                <li className={ path.indexOf( "blog/single/" ) > -1 ? 'active' : '' }><Link to={ `${process.env.PUBLIC_URL}/blog/single/3` }>Default with sidebar</Link></li>
                                <li className={ path.indexOf( "blog/single-2" ) > -1 ? 'active' : '' }><Link to={ `${process.env.PUBLIC_URL}/blog/single-2/97` }>Fullwidth no sidebar</Link></li>
                                <li className={ path.indexOf( "blog/single-3" ) > -1 ? 'active' : '' }><Link to={ `${process.env.PUBLIC_URL}/blog/single-3/98` }>Fullwidth with sidebar</Link></li>
                            </ul>
                        </li>
                    </ul> 
				  </li>*/}
				<li className={path.indexOf('element') > -1 ? 'active' : ''}>
					<Link to={`${process.env.PUBLIC_URL}/pages/about`} className="sf-with-ul">
						Giới thiệu
					</Link>

					<ul>
						<li>
							<Link to={`${process.env.PUBLIC_URL}/pages/about`}>Giới thiệu</Link>
						</li>
						<li>
							<a href={`https://fb.com/22perfumery`} target="_blank" rel="noreferrer">
								Fan Page
							</a>
						</li>
						<li>
							<a href={`https://instagram.com/22perfumery`} target="_blank" rel="noreferrer">
								Instagram
							</a>
						</li>
						<li>
							<a href={`tel:0819287888`} >Đường dây nóng</a>
						</li>
						{/* <li className={ path.indexOf( "elements/categories" ) > -1 ? "active" : '' }><Link to={ `${process.env.PUBLIC_URL}/elements/categories` }>Product Category</Link></li>
                        <li className={ path.indexOf( "elements/video-banners" ) > -1 ? "active" : '' }><Link to={ `${process.env.PUBLIC_URL}/elements/video-banners` }>Video Banners</Link></li>
                        <li className={ path.indexOf( "elements/buttons" ) > -1 ? "active" : '' }><Link to={ `${process.env.PUBLIC_URL}/elements/buttons` }>Buttons</Link></li>
                        <li className={ path.indexOf( "elements/accordions" ) > -1 ? "active" : '' }><Link to={ `${process.env.PUBLIC_URL}/elements/accordions` }>Accordions</Link></li>
                        <li className={ path.indexOf( "elements/tabs" ) > -1 ? "active" : '' }><Link to={ `${process.env.PUBLIC_URL}/elements/tabs` }>Tabs</Link></li>
                        <li className={ path.indexOf( "elements/testimonials" ) > -1 ? "active" : '' }><Link to={ `${process.env.PUBLIC_URL}/elements/testimonials` }>Testimonials</Link></li>
                        <li className={ path.indexOf( "elements/blog-posts" ) > -1 ? "active" : '' }><Link to={ `${process.env.PUBLIC_URL}/elements/blog-posts` }>Blog Posts</Link></li>
                        <li className={ path.indexOf( "elements/portfolios" ) > -1 ? "active" : '' }><Link to={ `${process.env.PUBLIC_URL}/elements/portfolios` }>Portfolio</Link></li>
                        <li className={ path.indexOf( "elements/cta" ) > -1 ? "active" : '' }><Link to={ `${process.env.PUBLIC_URL}/elements/cta` }>Call to Action</Link></li>
                        <li className={ path.indexOf( "elements/icon-boxes" ) > -1 ? "active" : '' }><Link to={ `${process.env.PUBLIC_URL}/elements/icon-boxes` }>Icon Boxes</Link></li> */}
					</ul>
				</li>
			</ul>
		</nav>
	);
}
