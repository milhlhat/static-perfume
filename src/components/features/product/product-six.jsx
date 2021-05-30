import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Countdown from 'react-countdown';

import { rendererOne } from '../count-down';

import { findIndex, getMinMaxPrice } from '../../../utils';

function ProductSix(props) {
	const {
		product,
		type = 'product',
		onAddToCart,
		showQuickView,
	} = props;
	// const {
	// 	isWishlist,
	// 	onToggleWishlist,
	// 	onAddToCompare,
	// } = props;
	const [price, setPrice] = useState({});
	useEffect(() => {
		setPrice(getMinMaxPrice(product.variants));
	}, [product.variants]);
	const addToCartHandler = () => {
		if (0 !== product.stock) onAddToCart(product, 1, product.variants[0].size);
	};

	// const addToCompareHandler = () => {
	// 	onAddToCompare(product);
	// };

	const quickViewHandler = () => {
		showQuickView(product.id);
	};

	// const wishlistHandler = () => {
	// 	if (isWishlist) {
	// 		window.location = process.env.PUBLIC_URL + '/shop/wishlist';
	// 	} else {
	// 		onToggleWishlist(product, isWishlist);
	// 	}
	// };

	function toTop() {
		window.scroll({
			top: 0,
		});
	}

	return product ? (
		<div className={`product product-5 text-center ${0 === product.stock ? 'product-disabled' : ''}`}>
			<figure className="product-media">
				{product.new ? <span className="product-label label-new">New</span> : ''}
				{product.top ? <span className="product-label label-top">Top</span> : ''}
				{product.discount ? <span className="product-label label-sale">Sale</span> : ''}
				{0 === product.stock ? <span className="product-label label-out">Out Of Stock</span> : ''}

				<Link to={`${process.env.PUBLIC_URL}/product/view/${product.id}`} onClick={toTop}>
					<img alt="product" src={`${process.env.PUBLIC_URL}/${product.pictures[0]}`} />

					{product.pictures[1] ? (
						<span className="product-image-hover product-image">
							<img alt="product" src={`${process.env.PUBLIC_URL}/${product.pictures[1]}`} />
						</span>
					) : (
						''
					)}
				</Link>

				{type !== 'sidebar' && 0 < product.discount ? (
					<div className="product-countdown countdown-primary">
						<Countdown date={`2021-02-01T01:02:03`} renderer={rendererOne} />
					</div>
				) : (
					''
				)}

				<div className="product-action-vertical">
					{/* <button
						className={`btn-product-icon btn-wishlist ${
							isWishlist ? 'added-to-wishlist' : 'remove-from-wishlist'
						}`}
						onClick={wishlistHandler}
						title={isWishlist ? 'Go to wishlist' : 'Add to wishlist'}
					>
						<span>{isWishlist ? 'go to wishlist' : 'add to wishlist'}</span>
					</button> */}

					<button className="btn-product-icon btn-quickview" title="Quick view" onClick={quickViewHandler}>
						<span>Xem nhanh</span>
					</button>

					{/* <button className="btn-product-icon btn-compare" title="Compare" onClick={addToCompareHandler}>
						<span>Compare</span>
					</button> */}
				</div>

				<div className="product-action">
					<button className="btn-product btn-cart" onClick={addToCartHandler}>
						<span>Thêm vào giỏ hàng</span>
					</button>
				</div>
			</figure>

			<div className="product-body product-action-inner">
				<h3 className="product-title">
					<Link to={`${process.env.PUBLIC_URL}/product/view/${product.id}`}>{product.name}</Link>
				</h3>

				{0 === product.stock ? (
					<div className="product-price">
						<span className="out-price">
							{price.minPrice &&
								price.minPrice.toLocaleString(undefined, {
									minimumFractionDigits: 0,
									maximumFractionDigits: 2,
								})}
							&nbsp;-&nbsp;
							{price.maxPrice &&
								price.maxPrice.toLocaleString(undefined, {
									minimumFractionDigits: 0,
									maximumFractionDigits: 2,
								})}
							đ
						</span>
					</div>
				) : 0 < product.discount ? (
					<div className="product-price">
						<span className="new-price">
							{price.minPrice &&
								price.minPrice.toLocaleString(undefined, {
									minimumFractionDigits: 0,
									maximumFractionDigits: 2,
								})}
							{price.maxPrice
								? ' - ' +
								  price.maxPrice.toLocaleString(undefined, {
										minimumFractionDigits: 0,
										maximumFractionDigits: 2,
								  })
								: ''}
							đ
						</span>
						<span className="old-price">
							{price.minOld &&
								price.minOld.toLocaleString(undefined, {
									minimumFractionDigits: 0,
									maximumFractionDigits: 2,
								})}
							&nbsp;
							{price.maxOld &&
								price.maxOld.toLocaleString(undefined, {
									minimumFractionDigits: 0,
									maximumFractionDigits: 2,
								})}
							đ
						</span>
					</div>
				) : (
					<div className="product-price">
						<span className="new-price">
							{price.minPrice &&
								price.minPrice.toLocaleString(undefined, {
									minimumFractionDigits: 0,
									maximumFractionDigits: 2,
								})}
							{price.maxPrice
								? ' - ' +
								  price.maxPrice.toLocaleString(undefined, {
										minimumFractionDigits: 0,
										maximumFractionDigits: 2,
								  })
								: ''}
							đ
						</span>
					</div>
				)}
			</div>
		</div>
	) : (
		''
	);
}

export const mapStateToProps = (state, ownprops) => {
	return {
		isWishlist: findIndex(state.wishlist.list, (item) => item.id === ownprops.product.id) !== -1 ? true : false,
	};
};

export default connect(mapStateToProps)(ProductSix);
