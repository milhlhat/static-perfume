import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';

// import Custom Components
import PageHeader from '../../common/page-header';
import Breadcrumb from '../../common/breadcrumb';

import { getCartTotal } from '../../../services';
import { quantityInputs, isIEBrowser } from '../../../utils';
import { changeQty, removeFromCart, changeShipping } from '../../../actions';

function Cart(props) {
	const { cartlist, total, removeFromCart, prevShip, productList } = props;
	const [shipping, setShipping] = useState(prevShip);
	const [cartDetail, setCartDetail] = useState([]);
	const shippingPrice = { free: 0, standard: 10, express: 20 };

	useEffect(() => {
		quantityInputs();
		initCartData();
	}, []);

	function onChangeShipping(val) {
		setShipping(val);
	}

	function onChangeQty(e, productId) {
		props.changeQty(productId, e.currentTarget.querySelector('input[type="number"]').value);
	}

	function goToCheckout() {
		props.changeShipping(shipping);
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
		let listTemp = [...cartDetail];
		for (var i in cartlist) {
			var item = cartlist[i];
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

	function removeFromCartDetail(id, size) {
		let listTemp = [...cartDetail].filter((item) => item.product.id !== id || item.size !== size);
		setCartDetail(listTemp);
	}

	return (
		<>
			<Helmet>
				<title>Giỏ hàng | 22</title>
			</Helmet>

			<div className="main">
				<PageHeader title="Giỏ hàng" subTitle="Shop" />
				<Breadcrumb title="Shopping Cart" parent1={['Shop', 'shop/nosidebar/boxed']} />

				<div className="page-content">
					<div className="cart">
						<div className="container">
							<div className="row">
								<div className="col-lg-9">
									<table className="table table-cart table-mobile">
										<thead>
											<tr>
												<th>Product</th>
												<th>Price</th>
												<th>Size</th>
												<th>Quantity</th>
												<th>Total</th>
												<th></th>
											</tr>
										</thead>

										<tbody>
											{cartDetail.length > 0 &&
												cartDetail.map((item, index) => (
													<tr key={index}>
														<td className="product-col">
															<div className="product">
																<figure className="product-media">
																	<Link
																		to={`${process.env.PUBLIC_URL}/product/default/${item.product.id}`}
																	>
																		<img
																			src={
																				process.env.PUBLIC_URL +
																				'/' +
																				item.product.pictures[0]
																			}
																			alt="Product"
																		/>
																	</Link>
																</figure>

																<h3 className="product-title">
																	<Link
																		to={`${process.env.PUBLIC_URL}/product/default/${item.product.id}`}
																	>
																		{item.product.brand + ' ' + item.product.name}
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
																onClick={(e) => onChangeQty(e, item.id)}
															>
																<input
																	type="number"
																	className="form-control"
																	defaultValue={item.qty}
																	min="1"
																	max={item.stock}
																	step="1"
																	data-decimals="0"
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
											// : (
											// 	<tr>
											// 		<td>
											// 			<p className="pl-2 pt-1 pb-1"> No Products in Cart </p>
											// 		</td>
											// 	</tr>
											// )
											}
										</tbody>
									</table>

									<div className="cart-bottom">
										<div
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
										</div>

										<button className="btn btn-outline-dark-2">
											<span>UPDATE CART</span>
											<i className="icon-refresh"></i>
										</button>
									</div>
								</div>
								<aside className="col-lg-3">
									<div className="summary summary-cart">
										<h3 className="summary-title">Cart Total</h3>

										<table className="table table-summary">
											<tbody>
												<tr className="summary-subtotal">
													<td>Subtotal:</td>
													<td>
														$
														{total.toLocaleString(undefined, {
															minimumFractionDigits: 2,
															maximumFractionDigits: 2,
														})}
													</td>
												</tr>
												<tr className="summary-shipping">
													<td>Shipping:</td>
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
																defaultChecked={'free' === prevShip ? true : false}
															/>
															<label
																className="custom-control-label"
																htmlFor="free-shipping"
															>
																Free Shipping
															</label>
														</div>
													</td>
													<td>$0.00</td>
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
																defaultChecked={'standard' === prevShip ? true : false}
															/>
															<label
																className="custom-control-label"
																htmlFor="standard-shipping"
															>
																Standard:
															</label>
														</div>
													</td>
													<td>$10.00</td>
												</tr>

												<tr className="summary-shipping-row">
													<td>
														<div className="custom-control custom-radio">
															<input
																type="radio"
																id="express-shipping"
																name="shipping"
																className="custom-control-input"
																onChange={(e) => onChangeShipping('express')}
																defaultChecked={'express' === prevShip ? true : false}
															/>
															<label
																className="custom-control-label"
																htmlFor="express-shipping"
															>
																Express:
															</label>
														</div>
													</td>
													<td>$20.00</td>
												</tr>

												<tr className="summary-shipping-estimate">
													<td>
														Estimate for Your Country
														<br />{' '}
														<a href={`${process.env.PUBLIC_URL}/shop/dashboard`}>
															Change address
														</a>
													</td>
													<td>&nbsp;</td>
												</tr>

												<tr className="summary-total">
													<td>Total:</td>
													<td>
														$
														{(total + shippingPrice[shipping]).toLocaleString(undefined, {
															minimumFractionDigits: 2,
															maximumFractionDigits: 2,
														})}
													</td>
												</tr>
											</tbody>
										</table>

										<button
											className="btn btn-outline-primary-2 btn-order btn-block"
											onClick={goToCheckout}
										>
											PROCEED TO CHECKOUT
										</button>
									</div>

									<Link
										to={`${process.env.PUBLIC_URL}/shop/sidebar/list`}
										className="btn btn-outline-dark-2 btn-block mb-3"
									>
										<span>CONTINUE SHOPPING</span>
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
	total: getCartTotal(state.cartlist.cart),
	prevShip: state.cartlist.shipping,
	productList: state.data.products,
});

export default connect(mapStateToProps, { changeQty, removeFromCart, changeShipping })(Cart);
