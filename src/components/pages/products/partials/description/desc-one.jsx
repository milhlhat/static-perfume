import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import { isIEBrowser } from '../../../../../utils';


function DescOne(props) {
	const { product } = props;
console.log(product);
	return (
		<Tabs selectedTabClassName="show" selectedTabPanelClassName="active show">
			<div className="product-details-tab">
				<TabList className="nav nav-pills justify-content-center">
					<Tab className="nav-item">
						<span className="nav-link">Đánh giá tổng quan</span>
					</Tab>

					<Tab className="nav-item">
						<span className="nav-link"> Thông tin thêm</span>
					</Tab>

					<Tab className="nav-item">
						<span className="nav-link">Giao hàng & Đổi trả</span>
					</Tab>

					{/* <Tab className="nav-item">
                        <span className="nav-link" >Reviews ({ product.reviews })</span>
                    </Tab> */}
				</TabList>

				<div className="tab-content">
					<TabPanel className="tab-pane">
						<div className="product-desc-content">
							<h3>Thông tin sản phẩm</h3>

							<p>{product.perfumista_review && product.perfumista_review.replace("Perfumista.vn", "22 Store")}</p>
							{product.diem_tot && <p>
								<b>Điểm tốt: </b>
								{product.diem_tot}
							</p>}
							<p>
								<b>Điểm chưa tốt: </b>
								{product.diem_chua_tot}
							</p>
						</div>
					</TabPanel>

					<TabPanel className="tab-pane">
						<div className="product-desc-content">
							<h3>Thông tin</h3>
							<p>
								Hiện tại tất cả các sản phẩm bên mình thường có size chiết 10ml và full size. Các bạn cần order thêm sản phẩm chưa có trên website có thể inbox trực tiếp qua <a href="https://fb.com/22perfumery" target="_blank" rel="noreferrer">Fan page</a> với chúng mình nhé. 
							</p>

							<h3>Đóng gói sản phẩm</h3>
							<ul>
								<li>Sản phẩm bạn đặt kèm logo 22 store.</li>
								<li>Hộp carton.</li>
								<li>Thư cảm ơn</li>
								<li>Giấy bọc chống sốc.</li>
							</ul>

						 
						</div>
					</TabPanel>

					<TabPanel className="tab-pane">
						<div className="product-desc-content">
							<h3>Vận chuyển & Đổi trả</h3>
							<p>
								22 Store hỗ trợ free shipping vớt tất cả các đơn hàng thanh toán trước qua ví điện tử, ngân hàng, smartbanking. Đối với thanh toán bằng tiền mặt khi nhận hàng chúng mình tính cước thu hộ
								<br />
								We hope you’ll love every purchase, but if you ever need to return an item you can do so
								within a month of receipt. For full details of how to make a return, please view our{' '}
								<Link to="#">Returns information</Link>
							</p>
						</div>
					</TabPanel>

					{/* <TabPanel className="tab-pane">
                        <div className="reviews">
                            <h3>Reviews (2)</h3>
                            <div className="review">
                                <div className="row no-gutters" style={ isIEBrowser() ? { flexDirection: 'row' } : {} }>
                                    <div className="col-auto">
                                        <h4><Link to="#">Samanta J.</Link></h4>

                                        <div className="ratings-container">
                                            <div className="ratings">
                                                <div className="ratings-val" style={ { width: "80%" } }></div>
                                            </div>
                                        </div>
                                        <span className="review-date">6 days ago</span>
                                    </div>
                                    <div className="col">
                                        <h4>Good, perfect size</h4>

                                        <div className="review-content">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus cum dolores assumenda asperiores facilis porro reprehenderit animi culpa atque blanditiis commodi perspiciatis doloremque, possimus, explicabo, autem fugit beatae quae voluptas!</p>
                                        </div>

                                        <div className="review-action">
                                            <Link to="#"><i className="icon-thumbs-up"></i>Helpful (2)</Link>
                                            <Link to="#"><i className="icon-thumbs-down"></i>Unhelpful (0)</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="review" >
                                <div className="row no-gutters" style={ isIEBrowser() ? { flexDirection: 'row' } : {} }>
                                    <div className="col-auto">
                                        <h4><Link to="#">John Doe</Link></h4>

                                        <div className="ratings-container">
                                            <div className="ratings">
                                                <div className="ratings-val" style={ { width: "100%" } }></div>
                                            </div>
                                        </div>

                                        <span className="review-date">5 days ago</span>
                                    </div>

                                    <div className="col">
                                        <h4>Very good</h4>

                                        <div className="review-content">
                                            <p>Sed, molestias, tempore? Ex dolor esse iure hic veniam laborum blanditiis laudantium iste amet. Cum non voluptate eos enim, ab cumque nam, modi, quas iure illum repellendus, blanditiis perspiciatis beatae!</p>
                                        </div>

                                        <div className="review-action">
                                            <Link to="#"><i className="icon-thumbs-up"></i>Helpful (0)</Link>
                                            <Link to="#"><i className="icon-thumbs-down"></i>Unhelpful (0)</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </TabPanel> */}
				</div>
			</div>
		</Tabs>
	);
}
function getProductById(productList, id) {
	for (var i in productList) {
		var item = productList[i];

		if (item.id == id) {
			return item;
		}
	}
	return '';
}
function mapStateToProps(state, props) {
	return {
		product: getProductById(state.data.products, props.id)

	};
}

export default connect(mapStateToProps)(DescOne);
