import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { getCartCount } from '../../../services';
import { removeFromCart } from '../../../actions';
import { safeContent } from '../../../utils';

function CartMenu(props) {
	const { cartlist, removeFromCart, productList } = props;
	const [cartDetail, setCartDetail] = useState([]);
	// const [isDeleteItem, setIsDeleteItem] = useState(0);

	useEffect(() => {
		initCartData();
		return () => {
			setCartDetail([]);
		};
	}, [cartlist]);

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
		setCartDetail([]);
		let listTemp = [...cartDetail];
		for (let i in cartlist) {
			let item = cartlist[i];
			for (let j in productList) {
				let product = productList[j];
				if (item.id === product.id) {
					let variant = getProductBySize(product, item.size);
					listTemp.push({ product: product, price: variant.price, qty: item.qty, size: item.size });
				}
			}
		}
		setCartDetail(listTemp);
	}

	function removeFromCartDetail(id, size) {
		let listTemp = [...cartDetail].filter((item) => item.product.id !== id || item.size !== size);
		console.log(listTemp);
		setCartDetail(listTemp);
		console.log(cartDetail);
	}

	function findProductById(id) {
		for (let i = 0; i < productList.length; i++) {
			let item = productList[i];
			if (item.id === id) {
				return item;
			}
		}
		return null;
	}

	return (
		// <div className="dropdown cart-dropdown">
		// <Link
		// 			to={`${process.env.PUBLIC_URL}/shop/cart`}
		// 			className="dropdown-toggle"
		// 			role="button"
		// 			data-toggle="dropdown"
		// 			aria-haspopup="true"
		// 			aria-expanded="false"
		// 			data-display="static"
		// 		>
		// 			<i className="icon-shopping-cart"></i>
		// 			<span className="cart-count">{getCartCount(cartlist)}</span>
		// 		</Link>
		//         </div>
		<div className="dropdown cart-dropdown">
			<Link
				to={`${process.env.PUBLIC_URL}/shop/cart`}
				className="dropdown-toggle"
				role="button"
				data-toggle="dropdown"
				aria-haspopup="true"
				aria-expanded="false"
				data-display="static"
			>
				<i className="icon-shopping-cart"></i>
				<span className="cart-count">{getCartCount(cartlist)}</span>
			</Link>

			<div className={`dropdown-menu dropdown-menu-right ${cartlist.length === 0 ? 'text-center' : ''}`}>
				{0 === cartlist.length ? (
					<p>No products in the cart.</p>
				) : (
					<>
						<div className="dropdown-cart-products">
							{cartlist.map((item, index) => (
								<div className="product" key={index}>
									<div className="product-cart-details">
										<h4 className="product-title">
											<Link
												to={`${process.env.PUBLIC_URL}/product/default/` + item.id}
												dangerouslySetInnerHTML={safeContent(findProductById(item.id).name)}
											></Link>
										</h4>

										<span className="cart-product-info">
											<span className="cart-product-qty">{item.qty}</span>x{' '}
											{item.price &&
												item.price.toLocaleString(undefined, {
													minimumFractionDigits: 2,
													maximumFractionDigits: 2,
												})}
										</span>
									</div>

									<figure className="product-image-container">
										<Link
											to={`${process.env.PUBLIC_URL}/product/default/${item.id}`}
											className="product-image"
										>
											<img
												src={process.env.PUBLIC_URL + '/' + findProductById(item.id).pictures[0]}
												data-oi={process.env.PUBLIC_URL + '/' + findProductById(item.id).pictures[0]}
												alt="product"
											/>
										</Link>
									</figure>
									<button
										className="btn-remove"
										title="Remove Product"
										onClick={() => {
											removeFromCart(item.id, item.size);
											removeFromCartDetail(item.id, item.size);
										}}
									>
										<i className="icon-close"></i>
									</button>
								</div>
							))}
						</div>
						{/* <div className="dropdown-cart-total">
							<span>Total</span>

							<span className="cart-total-price">
								$
								{total.value.toLocaleString(undefined, {
									minimumFractionDigits: 2,
									maximumFractionDigits: 2,
								})}
							</span>
						</div> */}

						<div className="dropdown-cart-action">
							<Link to={`${process.env.PUBLIC_URL}/shop/cart`} className="btn btn-primary w-100">
								View Cart
							</Link>
							{/* <Link to={`${process.env.PUBLIC_URL}/shop/checkout`} className="btn btn-outline-primary-2">
								<span>Checkout</span>
								<i className="icon-long-arrow-right"></i>
							</Link> */}
						</div>
					</>
				)}
			</div>
		</div>
	);
}

function mapStateToProps(state) {
	return {
		cartlist: state.cartlist.cart ? state.cartlist.cart : [],
		productList: state.data.products,
	};
}

export default connect(mapStateToProps, { removeFromCart })(CartMenu);
