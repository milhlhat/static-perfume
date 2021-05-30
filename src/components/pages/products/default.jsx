import React, { useEffect } from 'react';
import imagesLoaded from 'imagesloaded';
import { Helmet } from 'react-helmet';

import MediaOne from './partials/media/media-one';
import ProductDetailOne from './partials/details/detail-one';
import DescOne from './partials/description/desc-one';
import RelatedProducts from './partials/related-products';
// import StickyBar from './partials/sticky-bar';

import Breadcrumb from '../../common/breadcrumb';
import QuickView from '../../features/product/common/quickview';

import { getProductById, productGallery, scrollTop } from '../../../utils';
import { connect } from 'react-redux';

function SingleProduct(props) {
	let productId = props.match.params.id;
	const { product } = props;
	useEffect(() => {
        window.scrollTo(0, 0);

		productGallery();

		document.querySelector('.skel-pro-single').classList.remove('loaded');

		let imgLoad = imagesLoaded('.product-main-image', { background: true });

		imgLoad.on('done', function(instance, image) {
			document.querySelector('.skel-pro-single').classList.add('loaded');
		});
		 
	}, [productId]);

	return (
		<>
			<Helmet>
				<title>{product ? product.name : 'Sản Phẩm'} | 22 Store</title>
			</Helmet>
			<div className="main">
				<Breadcrumb
					title="Chi tiết "
					type="product"
					slug="default"
					adClass="breadcrumb-nav border-0 mb-0"
					productId={productId}
					parent1={['Sản phẩm', 'shop']}
				/>

				<div className="page-content">
					<div className="container">
						<div className="product-details-top skeleton-body">
							<div className="row skel-pro-single">
								<div className="col-md-6">
									<div className="skel-product-gallery"></div>

									<MediaOne id={productId} />
								</div>

								<div className="col-md-6">
									<div className="entry-summary row">
										<div className="col-md-12">
											<div className="entry-summary1"></div>
										</div>

										<div className="col-md-12">
											<div className="entry-summary2"></div>
										</div>
									</div>

									<ProductDetailOne id={productId} />
								</div>
							</div>
						</div>

						<DescOne id={productId} />

						<h2 className="title text-center mb-4">Bạn có thể thích</h2>

						<RelatedProducts />
					</div>
				</div>

				{/* <StickyBar id={ productId } /> */}

				<QuickView />
			</div>
		</>
	);
}
function mapStateToProps(state, props) {
	return {
		product: getProductById(state.data.products, props.match.params.id),
	};
}

export default connect(mapStateToProps)(SingleProduct);
