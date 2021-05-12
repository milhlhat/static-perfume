import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import { findIndex, getMinMaxPrice } from '../../../utils';

function ProductTwo(props) {
	const { product, onAddToCart, showQuickView, isWishlist, onToggleWishlist } = props;
	const [price, setPrice] = useState({});
	useEffect(() => {
		setPrice(getMinMaxPrice(product.variants));
	}, [product.variants]);

	const addToCartHandler = () => {
		if (0 !== product.stock) onAddToCart(product, 1, product.variants[0].size);
	};

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

	return product ? (
		<div className="product">
			<figure className="product-media">
				{product.new ? <span className="product-label label-new">New</span> : ''}
				{product.top ? <span className="product-label label-top">Top</span> : ''}
				{product.discount ? <span className="product-label label-sale">Giảm {product.discount}%</span> : ''}
				{0 === product.stock ? <span className="product-label label-out">Hết hàng</span> : ''}

				<Link to={`${process.env.PUBLIC_URL}/product/default/${product.id}`}>
					<LazyLoadImage
						alt="product"
						src={`${process.env.PUBLIC_URL}/${product.pictures[0]}`}
						threshold={400}
					/>

					{product.pictures[1] ? (
						<LazyLoadImage
							alt="product"
							src={`${process.env.PUBLIC_URL}/${product.pictures[1]}`}
							wrapperClassName="product-image-hover product-image"
							threshold={400}
						/>
					) : (
						''
					)}
				</Link>

				<div className="product-action action-icon-top">
					<button className="btn-product btn-cart" onClick={addToCartHandler}>
						<span>Thêm vào giỏ hàng</span>
					</button>

					<button className="btn-product btn-quickview" title="Quick view" onClick={quickViewHandler}>
						<span>Xem nhanh</span>
					</button>
				</div>
			</figure>

			<div className="product-body product-action-inner">
				{/* <button
                        className={ `btn-product btn-wishlist ${isWishlist ? 'added-to-wishlist' : 'remove-from-wishlist'}` }
                        onClick={ wishlistHandler }
                        title={ isWishlist ? "Go to wishlist" : "Add to wishlist" }
                    >
                        <span>{ isWishlist ? "go to wishlist" : "add to wishlist" }</span>
                    </button> */}

				<div className="product-cat">
					<span className="mr-0">
						<Link to="#">{product.brand}</Link>
					</span>
				</div>

				<h3 className="product-title">
					<Link to={`${process.env.PUBLIC_URL}/product/default/${product.id}`}>{product.name}</Link>
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

				{/* <div className="ratings-container">
                        <div className="ratings">
                            <div className="ratings-val" style={ { width: product.ratings * 20 + '%' } }></div>
                        </div>
                        <span className="ratings-text">({ product.reviews } Reviews )</span>
                    </div> */}

				{/* {
                        product.variants ?
                            product.variants[ 0 ].model ?
                                <div className="product-nav product-nav-thumbs">
                                    { product.variants.map( ( vari, i ) =>
                                        <Link to="#" key={ i } className={ 0 === i ? 'active' : '' }>
                                            <img src={ process.env.PUBLIC_URL + '/' + vari.model } alt="product desc" />
                                        </Link>
                                    ) }
                                </div>
                                :
                                <div className="product-nav product-nav-dots">
                                    { product.variants.map( ( vari, i ) =>
                                        <Link to="#" key={ i } className={ 0 === i ? 'active' : '' } style={ { background: vari.color } }>
                                        </Link>
                                    ) }
                                </div>
                            : ''
                    } */}
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

export default connect(mapStateToProps)(ProductTwo);
