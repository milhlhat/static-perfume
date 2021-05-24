import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { addToCart, toggleWishlist } from '../../../../../actions';

import { quantityInputs, isIEBrowser, isEdgeBrowser, findIndex, getMinMaxPrice } from '../../../../../utils';

function ProductDetailOne(props) {
	const { product, addToCart } = props;
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

	// const wishlistHandler = () => {
	// 	if (isWishlist) {
	// 		window.location = process.env.PUBLIC_URL + '/shop/wishlist';
	// 	} else {
	// 		toggleWishlist(product, isWishlist);
	// 	}
	// };

	// console.log(price);
	// function isDiscount() {
	// 	let variantsArray = [...product.variants];
	// 	variantsArray.forEach(function (value) {
	// 		let newValue = Number(value.oldPrice);

	// 		if (newValue > 0) {
	// 			console.log('dung');
	// 			return true;
	// 		}
	// 	});
	// 	console.log('sai');
	// 	return false;
	// }

	function handleChangePrice(e) {
		setPrice({ ...price, minPrice: product.variants[e.target.value].price, maxPrice: null });
	}

	function splitScent(str) {
		if (
			str
				.trim()
				.toLowerCase()
				.includes('hương chính')
		) {
			return (
				<>
					<b>Hương chính: </b>
					{str.trim().substr(12, str.length)}
				</>
			);
		} else if (
			str
				.trim()
				.toLowerCase()
				.includes('hương đầu')
		) {
			let start_middle_scent = str
				.trim()
				.toLowerCase()
				.indexOf('hương giữa');
			let start_last_scent = str
				.trim()
				.toLowerCase()
				.indexOf('hương cuối');
			let first_scent = str.trim().substring(11, start_middle_scent);
			let middle_scent = str.trim().substring(Number(start_middle_scent) + 11, start_last_scent);
			let last_scent = str.trim().substring(Number(start_last_scent) + 11, str.length);
			return (
				<>
					<b>Hương đầu: </b>
					{first_scent} <br />
					<b>Hương giữa: </b>
					{middle_scent} <br />
					<b>Hương cuối: </b>
					{last_scent}
				</>
			);
		} else {
			return <>{str}</>;
		}
	}

	// console.log('min:' + isDiscount(product.variants));
	return (
		<div className={'product-details'}>
			<h1 className="product-title mb-0">{product.name}</h1>
			<span>{product.brand}</span>
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
								maximumFractionDigits: 2,
							})}
						-&nbsp;
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
					&nbsp;
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
					{splitScent(product.mui_huong)}
					{/* <pre className="">{product.mui_huong}</pre> */}
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
						<option value={0}>Chọn size</option>
						{product.variants.map((v, index) => (
							<option key={index} value={index}>
								{v.name + ' ' + v.size + ' ml'}
							</option>
						))}
					</select>
				</div>
				{/* 
				{'default' === type ? (
					<Link to="#" className="size-guide">
						<i className="icon-th-list"></i>size guide
					</Link>
				) : (
					''
				)} */}
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
						<span>Thêm vào giỏ hàng</span>
					</button>
				) : (
					<button className="btn-product btn-cart" onClick={addToCartHandler}>
						<span>Thêm vào giỏ hàng</span>
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
