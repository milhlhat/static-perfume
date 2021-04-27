import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { search } from '../../../services';
// import Custom Components
import SideBar from '../../features/sidebar/shop-filter';
import ProductListTwo from '../../features/product/list/product-list-two';
import PageHeader from '../../common/page-header';
import Breadcrumb from '../../common/breadcrumb';

function NoSideBar(props) {
	const type = props.match.params.grid;
	const title = { boxed: 'VIEW', fullwidth: 'Fullwidth No Sidebar' };
	let products = props.products;
	const [searchList, setSearchList] = useState([]);

	useEffect(() => {
		getSearchList();

		if (type !== 'boxed' && type !== 'fullwidth') {
			window.location = process.env.PUBLIC_URL + '/pages/404';
		}
	}, [type]);

	function getSearchList() {
		let listTemp = [...searchList];
		let params = new URLSearchParams(props.location.search);
		let keyword = params.get('q') == null ? '' : params.get('q');

		listTemp = search(products, keyword);
		setSearchList(listTemp);
	}

	function hideSideBar() {
		if (document.querySelector('body').classList.contains('sidebar-filter-active'))
			document.querySelector('body').classList.remove('sidebar-filter-active');
	}

	return (
		<>
			<Helmet>
				<title>Sản phẩm | 22</title>
			</Helmet>

			<div className="main">
				<PageHeader title={title[type]} subTitle="Shop" />
				<Breadcrumb
					title={title[type]}
					parent1={['Shop', 'shop/nosidebar']}
					adClass="mb-2"
					container={type === 'boxed' ? 'container' : 'container-fluid'}
				/>

				<div className="page-content">
					<div className={type === 'boxed' ? 'container' : 'container-fluid'}>
						<ProductListTwo type={type} searchList={searchList} />

						<div className="sidebar-filter-overlay" onClick={hideSideBar}></div>

						<SideBar numbers={50} />
					</div>
				</div>
			</div>
		</>
	);
}

export const mapStateToProps = (state) => {
	return {
		products: state.data.products ? state.data.products : [],
	};
};
export default connect(mapStateToProps)(NoSideBar);
// export default React.memo( NoSideBar );
