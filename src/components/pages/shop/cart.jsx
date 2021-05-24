import React, { useState, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';

// import Custom Components
import PageHeader from '../../common/page-header';
import Breadcrumb from '../../common/breadcrumb';

import { getCartTotal } from '../../../services';
import { quantityInputs, isIEBrowser } from '../../../utils';
import { changeQty, removeFromCart, changeShipping } from '../../../actions';

function Cart(props) {
	const { cartlist, removeFromCart, prevShip, productList } = props;
	const [shipping, setShipping] = useState(prevShip);
	const [cartDetail, setCartDetail] = useState([]);

	const shippingPrice = { free: 0, standard: 25000 };

	useEffect(() => {
		quantityInputs();
		initCartData();
	}, []);

	function onChangeShipping(val) {
		setShipping(val);
	}

	function onChangeQty(e, productId, size) {
		let qty = Math.abs(e.currentTarget.querySelector('input[type="number"]').value);
		props.changeQty(productId, qty, size);
		let listTemp = [...cartDetail];

		for (var i in listTemp) {
			var item = listTemp[i];
			if (item.product.id === productId && item.size === size) {
				listTemp[i].qty = qty;
			}
		}
		setCartDetail(listTemp);
	}

	function getProductBySize(product, size) {
		var vari = -1;
		for (var i in product.variants) {
			var variant = product.variants[i];

			if (variant.size == size) {
				vari = variant;
				break;
			}
		}
		return vari;
	}

	function initCartData() {
		//  init from list product(id,qty & size)
		let servicesList = [...cartlist];
		let listTemp = [...cartDetail];
		for (var i in servicesList) {
			var item = servicesList[i];
			for (var j in productList) {
				var product = productList[j];
				if (item.id === product.id) {
					var variant = getProductBySize(product, item.size);
					listTemp.push({ product: product, price: variant.price, qty: item.qty, size: item.size });
				}
			}
		}
		setCartDetail(listTemp);
	}

	function getTotal() {
		let totalTemp = 0;
		let listTemp = [...cartDetail];

		for (var i in listTemp) {
			var item = listTemp[i];
			totalTemp += item.price * item.qty;
		}

		return totalTemp + shippingPrice[shipping];
	}

	function removeFromCartDetail(id, size) {
		let listTemp = [...cartDetail].filter((item) => item.product.id !== id || item.size !== size);
		setCartDetail(listTemp);
	}

	return (
		<>
			<Helmet>
				<title>Giỏ hàng | 22 Store</title>
			</Helmet>

			<div className="main">
				<PageHeader title="Giỏ hàng" subTitle="Shop" />
				<Breadcrumb title="Giỏ hàng" parent1={['Shop', 'shop/nosidebar/boxed']} />

				<div className="page-content">
					<div className="cart">
						<div className="container">
							<div className="row">
								<div className="col-lg-9">
									<table className="table table-cart table-mobile">
										<thead>
											<tr>
												<th></th>
												<th>Tên sản phẩm</th>
												<th>Giá</th>
												<th>Size</th>
												<th>Số lượng</th>
												<th>Tổng</th>
												<th></th>
											</tr>
										</thead>

										<tbody>
											{cartDetail.length > 0 ? (
												cartDetail.map((item, index) => (
													<tr key={index} className="pb-1">
														<td>
															<Link
																to={`${process.env.PUBLIC_URL}/product/default/${item.product.id}`}
																className="product-image"
															>
																<img
																	src={`${process.env.PUBLIC_URL}/${item.product.pictures[0]}`}
																	data-oi={`${process.env.PUBLIC_URL}/${item.product.pictures[0]}`}
																	alt={item.product.brand + ' ' + item.product.name}
																	width={50}
																	className="  m-auto"
																/>
															</Link>
														</td>

														<td className="product-col pt-2 pb-2">
															<div className="product">
																<h3 className="product-title">
																	<Link
																		to={`${process.env.PUBLIC_URL}/product/default/${item.product.id}`}
																	>
																		{item.product.name}
																	</Link>
																</h3>
															</div>
														</td>

														<td className="price-col">
															{item.price &&
																item.price.toLocaleString(undefined, {
																	minimumFractionDigits: 0,
																	maximumFractionDigits: 2,
																})}
														</td>
														<td className="price-col">{item.size}</td>
														<td className="quantity-col">
															<div
																className="cart-product-quantity"
																onChange={(e) =>
																	onChangeQty(e, item.product.id, item.size)
																}
															>
																<input
																	type="number"
																	className="form-control"
																	defaultValue={item.qty}
																	min="1"
																	max={item.stock}
																	step="1"
																	required
																/>
															</div>
														</td>

														<td className="total-col">
															{(item.price * item.qty).toLocaleString(undefined, {
																minimumFractionDigits: 0,
																maximumFractionDigits: 2,
															})}
															đ
														</td>

														<td className="remove-col">
															<button
																className="btn-remove"
																onClick={(e) => {
																	removeFromCart(item.product.id, item.size);
																	removeFromCartDetail(item.product.id, item.size);
																}}
															>
																<i className="icon-close"></i>
															</button>
														</td>
													</tr>
												))
											) : (
												<tr>
													<td>
														<p className="pl-2 pt-1 pb-1"> Giỏ hàng trống </p>
													</td>
												</tr>
											)}
										</tbody>
									</table>

									<div className="cart-bottom">
										{/* <div
											className="cart-discount"
											style={{ minHeight: isIEBrowser() ? '40px' : 'auto' }}
										>
											<form action="#">
												<div className="input-group">
													<input
														type="text"
														className="form-control"
														required=""
														placeholder="coupon code"
													/>
													<div className="input-group-append">
														<button className="btn btn-outline-primary-2" type="submit">
															<i className="icon-long-arrow-right"></i>
														</button>
													</div>
												</div>
											</form>
										</div> */}

										<button className="btn btn-outline-dark-2">
											<span>
												<a href={`${process.env.PUBLIC_URL}/shop/cart`}>UPDATE CART</a>
											</span>
											<i className="icon-refresh"></i>
										</button>
									</div>
								</div>
								<aside className="col-lg-3">
									<div className="summary summary-cart">
										<h3 className="summary-title">Tổng</h3>

										<table className="table table-summary">
											<tbody>
												{/* <tr className="summary-subtotal">
													<td>Subtotal:</td>
													<td>
														$
														{total.toLocaleString(undefined, {
															minimumFractionDigits: 2,
															maximumFractionDigits: 2,
														})}
													</td>
												</tr> */}
												<tr className="summary-shipping">
													<td>Phí vận chuyện & thanh toán:</td>
													<td>&nbsp;</td>
												</tr>

												<tr className="summary-shipping-row">
													<td>
														<div className="custom-control custom-radio">
															<input
																type="radio"
																id="free-shipping"
																name="shipping"
																className="custom-control-input"
																onChange={(e) => onChangeShipping('free')}
																defaultChecked={false}
															/>
															<label
																className="custom-control-label"
																htmlFor="free-shipping"
															>
																Ví điện tử
															</label>
														</div>
													</td>
													<td>{shippingPrice['free']}</td>
												</tr>

												<tr className="summary-shipping-row">
													<td>
														<div className="custom-control custom-radio">
															<input
																type="radio"
																id="standard-shipping"
																name="shipping"
																className="custom-control-input"
																onChange={(e) => onChangeShipping('standard')}
																defaultChecked={false}
															/>
															<label
																className="custom-control-label"
																htmlFor="standard-shipping"
															>
																Tiền mặt:
															</label>
														</div>
													</td>
													<td>{shippingPrice['standard']}</td>
												</tr>
												<hr className="m-0" />
												<tr className="summary-total">
													<td>Tổng:</td>
													<td>
														{(getTotal() ? getTotal() : '').toLocaleString(undefined, {
															minimumFractionDigits: 0,
															maximumFractionDigits: 2,
														})}
													</td>
												</tr>
											</tbody>
										</table>

										<a
											href="https://m.me/100398532142202"
											target="_blank"
											className=" btn btn-outline-primary-2 btn-order btn-block mb-2"
										>
											<span className="btn-order">ĐẶT HÀNG QUA MESSENGER NGAY</span>
											<i className="icon-facebook-messenger"></i>
										</a>
									</div>

									<Link
										to={`${process.env.PUBLIC_URL}/shop/nosidebar/boxed`}
										className="btn btn-outline-dark-2 btn-block mb-3"
									>
										<span>XEM SẢN PHẨM KHÁC</span>
										<i className="icon-refresh"></i>
									</Link>
								</aside>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export const mapStateToProps = (state) => ({
	cartlist: state.cartlist.cart,

	prevShip: state.cartlist.shipping,
	productList: state.data.products,
});

export default connect(mapStateToProps, { changeQty, removeFromCart, changeShipping })(Cart);
