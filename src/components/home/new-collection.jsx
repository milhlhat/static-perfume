import React from 'react';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { Tab, Tabs, TabPanel, TabList } from 'react-tabs';

// Import Custom Component
import ProductNine from '../features/product/product-nine';

// import Services & Settings
import { getProductsByCategory, getVisibleProducts } from '../../services';
import { getProductsByGender } from '../../services';
import { addToCart, toggleWishlist } from '../../actions';

function NewCollection ( props ) {
    const { addToCart, toggleWishlist } = props;
    let genders = [ "Tất cả", "Nam", "Nữ", "Unisex"];
    let products = props.products;

    // let featuredProducts = getFeaturedProducts( products );

    return (
        <div className="container new-arrivals">

            <hr className="mb-5 mt-8" />

            <Tabs selectedTabClassName="show react-tabs__tab-panel--selected" defaultIndex={ 0 } >
                <div className="heading heading-center mb-3">
                    <h2 className="title">SẢN PHẨM </h2>

                    <TabList className="nav nav-pills justify-content-center">
                        { genders.map( ( gender, index ) =>
                            <Tab className="nav-item" key={ `arrival_${gender}` }>
                                <span className="nav-link">{ gender }</span>
                            </Tab>
                        ) }
                    </TabList>
                </div>

                <div className="tab-content tab-content-carousel">
                    { genders.map( ( gender, index ) =>
                        <TabPanel className="tab-pane p-0 react-tabs__tab-panel" key={ `arrivalpanel_${gender}` } selectedClassName="active show">
                            <div className="row">
                                { getVisibleProducts( products, {gender: gender} ).slice(0, 10).map( ( product, index ) =>
                                    <div className="col-xl-5col col-lg-3 col-md-4 col-6" key={ `${gender}_${index}` }>
                                        <ProductNine
                                            type={ 2 }
                                            product={ product }
                                            onAddToCart={ addToCart }
                                            onToggleWishlist={ toggleWishlist }
                                        />
                                    </div>
                                ) }
                            </div>
                        </TabPanel>
                    ) }
                </div>
            </Tabs>

            <div className="text-center">
                <Link to={ `${process.env.PUBLIC_URL}/shop/nosidebar/boxed` } className="btn btn-viewMore">
                    <span>XEM THÊM</span>

                    <i className="icon-long-arrow-right"></i>
                </Link>
            </div>

        </div>
    )
}

const mapStateToProps = ( state, props ) => {
    return {
        products: state.data.products ? state.data.products : []
    }
}

export default connect(
    mapStateToProps, { addToCart, toggleWishlist }
)( NewCollection );
