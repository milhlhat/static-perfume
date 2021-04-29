import React, { useState } from 'react';
import { connect } from 'react-redux';

function SearchForm(props) {
	const [keyword, setKeyword] = useState('');
	// useEffect(() => {
	// 	document.querySelector('.search-toggle').addEventListener('click', onSearchToggleHandler);
	// 	document.querySelector('.header-search').addEventListener('click', function(e) {
	// 		e.stopPropagation();
	// 	});

	// 	document.querySelector('body').addEventListener('click', onSearchToggleHandler1);

	// 	return () => {
	// 		document.querySelector('.search-toggle').removeEventListener('click', onSearchToggleHandler);
	// 		document.querySelector('.header-search').addEventListener('click', function(e) {
	// 			e.stopPropagation();
	// 		});
	// 		document.querySelector('body').addEventListener('click', onSearchToggleHandler1);
	// 	};
	// });

	function onSearchToggleHandler1(e) {
		if (
			document.querySelector('.header-search-wrapper') &&
			document.querySelector('.header-search-wrapper').classList.contains('show')
		) {
			document.querySelector('.header-search-wrapper').classList.remove('show');
			document.querySelector('.search-toggle').classList.remove('active');
			document.querySelector('body').classList.remove('is-search-active');
			e.preventDefault();
		}
	}

	function onSearchToggleHandler(e) {
		document.querySelector('.header-search-wrapper').classList.toggle('show');
		document.querySelector('.search-toggle').classList.toggle('active');
		document.querySelector('.header-search-wrapper input').focus();
		e.preventDefault();
	}

	const handleInput = (evt) => {
		if (evt.target.value == null) {
			setKeyword('');
		} else {
			setKeyword(evt.target.value);
		}
		console.log(keyword);
	};
	return (
		<div className="header-search">
			<a
				href={`/shop/nosidebar/boxed?q=` + keyword}
				className="search-toggle active"
				role="button"
				title="Search"
			>
				<i className="icon-search"></i>
			</a>

			<form method="get" action="/shop/nosidebar/boxed">
				<div className="header-search-wrapper show">
					<label htmlFor="q" className="sr-only">
						Search
					</label>
					<input
						type="search"
						className="form-control"
						name="q"
						id="search"
						placeholder="Tìm kiếm..."
						defaultValue={keyword}
						onChange={(e) => handleInput(e)}
						required
					/>
				</div>
			</form>
		</div>
	);
}

export const mapStateToProps = (state) => {
	return {
		products: state.data.products ? state.data.products : [],
	};
};

export default connect(mapStateToProps)(SearchForm);
// export default React.memo( SearchForm );
