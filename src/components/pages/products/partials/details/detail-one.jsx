import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { addToCart, toggleWishlist } from '../../../../../actions';

import { quantityInputs, isIEBrowser, isEdgeBrowser, findIndex } from '../../../../../utils';

function ProductDetailOne(props) {
	const { product, isWishlist, type, addToCart, toggleWishlist } = props;
	const [price, setPrice] = useState({});
	useEffect(() => {
		quantityInputs();
		setPrice(getMinMaxPrice(product.variants));
	}, [product.variants]);

	const addToCartHandler = () => {
		addToCart(
			product,
			document.querySelector('#qty').value,
			product.variants[document.querySelector('#size').value].size
		);
	};

	const wishlistHandler = () => {
		if (isWishlist) {
			window.location = process.env.PUBLIC_URL + '/shop/wishlist';
		} else {
			toggleWishlist(product, isWishlist);
		}
	};

	function getMinMaxPrice(variantsArray) {
		let min = Number(variantsArray[0].price);
		let max = 0;
		let minOld = Number(variantsArray[0].oldPrice);
		let maxOld = 0;

		variantsArray.forEach(function(value) {
			let newValue = Number(value.price);
			if (newValue < min) {
				min = newValue;
				minOld = value.oldPrice;
			}
		});

		variantsArray.forEach(function(value) {
			let newValue = Number(value.price);
			if (newValue > max && newValue > min) {
				max = newValue;
				maxOld = value.oldPrice;
			}
		});
		return { minPrice: min, maxPrice: max, minOld: minOld, maxOld: maxOld };
	}
	// console.log(price);
	function isDiscount() {
		let variantsArray = [...product.variants];
		variantsArray.forEach(function(value) {
			let newValue = Number(value.oldPrice);

			if (newValue > 0) {
				console.log('dung');
				return true;
			}
		});
		console.log('sai');
		return false;
	}

	function handleChangePrice(e) {
		console.log(product.variants[e.target.value]);
		setPrice({ ...price, minPrice: product.variants[e.target.value].price, maxPrice: null });
	}

	// console.log('min:' + isDiscount(product.variants));
	return (
		<div className={'product-details'}>
			<h1 className="product-title">{product.name}</h1>
			{/* 
            <div className="ratings-container">
                <div className="ratings">
                    <div className="ratings-val" style={ { width: product.ratings * 20 + '%' } }></div>
                </div>
                <Link className="ratings-text" to="#product-review-link" id="review-link">( { product.reviews } Reviews )</Link>
            </div> */}

			{0 === product.stock ? (
				<div className="product-price">
					<span className="out-price">
						{price.minPrice &&
							price.minPrice.toLocaleString(undefined, {
								minimumFractionDigits: 0,
								maximumFractionDigits: 3,
							})}
						{price.maxPrice && '-'}
						{price.maxPrice &&
							price.maxPrice.toLocaleString(undefined, {
								minimumFractionDigits: 0,
								maximumFractionDigits: 3,
							})}
						đ
					</span>
				</div>
			) : (
				//  : isDiscount ? (
				// 	<div className="product-price">
				// 		<span className="new-price">
				// 			{price.minPrice &&
				// 				price.minPrice.toLocaleString(undefined, {
				// 					minimumFractionDigits: 0,
				// 					maximumFractionDigits: 3,
				// 				})}
				// 			{' - '}
				// 			{price.maxPrice &&
				// 				price.maxPrice.toLocaleString(undefined, {
				// 					minimumFractionDigits: 0,
				// 					maximumFractionDigits: 3,
				// 				})}
				// 			đ
				// 		</span>
				// 		<span className="old-price">
				// 			{price.minPrice && price.minOld.toLocaleString(undefined, {
				// 				minimumFractionDigits: 0,
				// 				maximumFractionDigits: 3,
				// 			})}
				// 			{' - '}
				// 			{(price.maxOld && 0 < price.maxOld)
				// 				? price.maxOld.toLocaleString(undefined, {
				// 						minimumFractionDigits: 0,
				// 						maximumFractionDigits: 3,
				// 				  })
				// 				: price.maxPrice.toLocaleString(undefined, {
				// 						minimumFractionDigits: 0,
				// 						maximumFractionDigits: 3,
				// 				  })}
				// 			đ
				// 		</span>
				// 	</div>
				// )
				<div className="product-price">
					{price.minPrice &&
						price.minPrice.toLocaleString(undefined, {
							minimumFractionDigits: 0,
							maximumFractionDigits: 3,
						})}
					{price.maxPrice && '-'}
					{price.maxPrice &&
						price.maxPrice.toLocaleString(undefined, {
							minimumFractionDigits: 0,
							maximumFractionDigits: 3,
						})}
					đ
				</div>
			)}

			<div className="product-content">
				<p className="p-0 m-0">
					{' '}
					<b>Nhóm nước hoa:</b>
					{product.nhom_nuoc_hoa}
				</p>
				<p className="p-0 m-0">
					{' '}
					<b>Giới tính: </b>
					{product.gender}
				</p>
				<p className="p-0 m-0">
					{' '}
					<b>Nồng độ:</b>
					{product.nong_do}
				</p>
				<p className="p-0 m-0">
					{' '}
					<b>Nhà pha chế:</b>
					{product.nha_pha_che}
				</p>
				<p className="p-0 m-0">
					{' '}
					<b>Độ lưu hương:</b>
					{product.do_luu_huong}
				</p>
				<p className="p-0 m-0">
					{' '}
					<b>Độ tỏa hương:</b>
					{product.do_toa_huong}
				</p>
				<p className="p-0 m-0">
					{' '}
					<b>Thời điểm khuyên dùng:</b>
					{product.thoi_diem_khuyen_dung}
				</p>

				<p className="p-0 m-0">
					<pre className="">{product.mui_huong}</pre>
				</p>
			</div>

			<div className="details-filter-row details-row-size">
				<label htmlFor="size">Size:</label>
				<div className="select-custom">
					<select
						name="size"
						id="size"
						className="form-control"
						defaultValue="#"
						onChange={(e) => {
							handleChangePrice(e);
						}}
					>
						{/* <option value="#">Chọn size</option> */}
						{product.variants.map((v, index) => (
							<option key={index} value={index}>
								{v.name + ' ' + v.size + ' ml'}
							</option>
						))}
					</select>
				</div>

				{'default' === type ? (
					<Link to="#" className="size-guide">
						<i className="icon-th-list"></i>size guide
					</Link>
				) : (
					''
				)}
			</div>

			<div className="details-filter-row details-row-size">
				<label htmlFor="qty">Số Lượng:</label>
				<div className="product-details-quantity">
					<input
						type="number"
						id="qty"
						className="form-control"
						defaultValue="1"
						min="1"
						max={product.stock}
						step="1"
						data-decimals="0"
						required
					/>
				</div>
			</div>

			<div className="product-details-action">
				{isIEBrowser() || isEdgeBrowser() ? (
					<button className="btn-product btn-cart" onClick={addToCartHandler} style={{ minHeight: '4rem' }}>
						<span>add to cart</span>
					</button>
				) : (
					<button className="btn-product btn-cart" onClick={addToCartHandler}>
						<span>add to cart</span>
					</button>
				)}
				{/* { isIEBrowser() || isEdgeBrowser() ?
                    <div className="details-action-wrapper IE-detail-action-wrapper">
                        <button
                            className={ `btn-product btn-wishlist pl-0 pr-0 ${isWishlist ? 'added-to-wishlist' : 'remove-from-wishlist'}` }
                            onClick={ wishlistHandler }
                            title={ isWishlist ? "Go to wishlist" : "Add to wishlist" }
                        >
                            <span>{ isWishlist ? "go to wishlist" : "add to wishlist" }</span>
                        </button>
                    </div> :

                    <div className="details-action-wrapper">
                        <button
                            className={ `btn-product btn-wishlist pl-0 pr-0 ${isWishlist ? 'added-to-wishlist' : 'remove-from-wishlist'}` }
                            onClick={ wishlistHandler }
                            title={ isWishlist ? "Go to wishlist" : "Add to wishlist" }
                        >
                            <span>{ isWishlist ? "Go to Wishlist" : "Add to Wishlist" }</span>
                        </button>
                    </div>
                } */}
			</div>

			<div className="product-details-footer">
				<div className="product-cat">
					<span>Category: </span>
					{product.category.map((cat, index) => (
						<span key={index} className="mr-0">
							<Link to="#">{cat}</Link>
							{index < product.category.length - 1 ? ', ' : ''}
						</span>
					))}
				</div>

				<div className="social-icons social-icons-sm">
					<span className="social-label">Share:</span>
					<Link to="#" className="social-icon" title="Facebook" target="_blank">
						<i className="icon-facebook-f"></i>
					</Link>
					<Link to="#" className="social-icon" title="Twitter" target="_blank">
						<i className="icon-twitter"></i>
					</Link>
					<Link to="#" className="social-icon" title="Instagram" target="_blank">
						<i className="icon-instagram"></i>
					</Link>
					<Link to="#" className="social-icon" title="Pinterest" target="_blank">
						<i className="icon-pinterest"></i>
					</Link>
				</div>
			</div>

			{props.children}
		</div>
	);
}

function mapStateToProps(state, props) {
	return {
		product: state.data.products.filter((product) => product.id === parseInt(props.id))[0],
		isWishlist: findIndex(state.wishlist.list, (item) => item.id === parseInt(props.id)) !== -1 ? true : false,
	};
}

export default connect(mapStateToProps, { addToCart, toggleWishlist })(ProductDetailOne);
