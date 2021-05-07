import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import ProductEight from '../product-two';
import QuickView from '../common/quickview';

import { addToCart, toggleWishlist, addToCompare, showQuickViewModal, filterSort } from '../../../../actions';
import { getVisibleProducts } from '../../../../services';

function ProductListTwo( props ) {
    let { type, searchList, filters, addToCart, toggleWishlist, addToCompare, showQuickViewModal } = props;
    let products = props.products, timer;
console.log(props);
    const [ loadedCount, setLoadedCount ] = useState( 8 );
    const [ hasMore, setHasMore ] = useState( true );
    const [ loading, setLoading ] = useState( false );

    const classList = { "boxed": "col-6 col-md-4 col-lg-4 col-xl-3", "fullwidth": "col-6 col-md-4 col-lg-4 col-xl-3 col-xxl-2" };
    products = getVisibleProducts( searchList, filters );

    function showSideBar() {
        document.querySelector( 'body' ).classList.add( 'sidebar-filter-active' );
    }

    function changeFilter( e ) {
        props.filterSort( e.target.value );
    }

    function loadMore() {
        // fake async api. products should be fetched from backend
        if ( loadedCount < products.length ) {
            setLoading( true );

            timer = setTimeout( () => {
                setLoadedCount( prevCount => prevCount + 8 );
                setLoading( false );

                if ( loadedCount >= products.length - 8 ) {
                    setHasMore( false );
                }
            }, 100 );
        } else {
            timer = setTimeout( () => {
                setHasMore( false );
            }, 100 );
        }
    }

    useEffect( () => {
        return () => {
            if ( timer ) clearTimeout( timer );
        }
    }, [] )

    useEffect( () => {
        products = getVisibleProducts( props.products.slice(0, 15), filters );
       
        if ( products.length > 10 ) {
            setHasMore( true );
        } else {
            setHasMore( false );
        }
    }, [ filters ] )

    return (
        <>
            <div className="toolbox">
                <div className="toolbox-left">
                    <button className="sidebar-toggler" onClick={ showSideBar } style={ { padding: "0" } }><i className="icon-bars"></i>Lọc</button>
                </div>

                <div className="toolbox-center">
                    <div className="toolbox-info">
                        Hiển thị <span>{ Math.min( loadedCount, products.length ) } trong { products.length }</span> tổng sản phẩm
                    </div>
                </div>

                <div className="toolbox-right">
                    <div className="toolbox-sort">
                        <label htmlFor="sortby">sắp xếp:</label>
                        <div className="select-custom">
                            <select name="sortby" id="sortby" defaultValue={ filters.sortBy } className="form-control" onChange={ changeFilter }>
                                <option value="newness">mới nhất</option>
                                <option value="price: low to high">Giá từ thấp đến cao</option>
                                <option value="price: high to low">Giá từ cao đến thấp</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>

            <div className="products mb-3">
                <div className="row">
                    { products.slice( 0, loadedCount ).map( ( item, index ) =>
                        <div className={ classList[ type ] } key={ item.id }>
                            <ProductEight
                                product={ item }
                                onAddToCart={ addToCart }
                                onToggleWishlist={ toggleWishlist }
                                onAddToCompare={ addToCompare }
                                showQuickView={ showQuickViewModal } />
                        </div>
                    ) }
                </div>

                <QuickView />
            </div>

            <div className="load-more-container text-center">
                {
                    hasMore ?
                        <button className="btn btn-outline-darker btn-load-more" onClick={ loadMore }><span>Xem thêm </span>
                            { loading ?
                                <i className="icon-refresh load-more-rotating"></i> :
                                <i className="icon-refresh"></i>
                            }
                        </button>
                        : ''
                }
            </div>
        </>
    );
}

export const mapStateToProps = ( state ) => {
    return {
        products: state.data.products ? state.data.products : [],
        filters: state.filters
    }
}

export default connect(
    mapStateToProps, {
        addToCart, toggleWishlist, addToCompare, showQuickViewModal, filterSort
    }
)( ProductListTwo );