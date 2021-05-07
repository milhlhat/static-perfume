import React from 'react';
import { Link } from 'react-router-dom';

function Instagram ( props ) {
    return (
        <div className="container instagram-store text-center">
            <hr />

            <div className="heading">
                <h2 className="title">INSTAGRAM STORE</h2>
            </div>

            <div className="row">
                <div className="col-sm-3 banner-sm-div">
                    <div className="banner-sm col-12 instagram-feed">
                        <img src={ `${process.env.PUBLIC_URL}/assets/images/home/instagram/2.png` } alt="desc" />

                        <div className="instagram-feed-content">
                            <Link to="#"><i className="icon-heart-o"></i>280</Link>

                            <Link to="#"><i className="icon-comments"></i>22</Link>
                        </div>
                    </div>
                    <div className="banner-sm col-12 instagram-feed">
                        <img src={ `${process.env.PUBLIC_URL}/assets/images/home/instagram/3.jpg` } alt="desc" />

                        <div className="instagram-feed-content">
                            <Link to="#"><i className="icon-heart-o"></i>280</Link>

                            <Link to="#"><i className="icon-comments"></i>22</Link>
                        </div>
                    </div>
                </div>
                <div className="col-sm-3 banner-lg instagram-feed">
                    <img src={ `${process.env.PUBLIC_URL}/assets/images/home/instagram/1.jpg` } alt="desc" />

                    <div className="instagram-feed-content">
                        <Link to="#"><i className="icon-heart-o"></i>280</Link>

                        <Link to="#"><i className="icon-comments"></i>22</Link>
                    </div>
                </div>
                <div className="col-sm-3 banner-sm-div">
                    <div className="banner-sm col-6 instagram-feed">
                        <img src={ `${process.env.PUBLIC_URL}/assets/images/home/instagram/4.jpg` } alt="desc" />

                        <div className="instagram-feed-content">
                            <Link to="#"><i className="icon-heart-o"></i>280</Link>

                            <Link to="#"><i className="icon-comments"></i>22</Link>
                        </div>
                    </div>
                    <div className="banner-sm col-6 instagram-feed">
                        <img src={ `${process.env.PUBLIC_URL}/assets/images/home/instagram/6.jpg` } alt="desc" />

                        <div className="instagram-feed-content">
                            <Link to="#"><i className="icon-heart-o"></i>280</Link>

                            <Link to="#"><i className="icon-comments"></i>22</Link>
                        </div>
                    </div>
                </div>

                <div className="col-sm-3 banner-sm-div">
                    <div className="banner-sm col-6 instagram-feed">
                        <img src={ `${process.env.PUBLIC_URL}/assets/images/home/instagram/5.jpg` } alt="desc" />

                        <div className="instagram-feed-content">
                            <Link to="#"><i className="icon-heart-o"></i>280</Link>

                            <Link to="#"><i className="icon-comments"></i>22</Link>
                        </div>
                    </div>
                    <div className="banner-sm col-6 instagram-feed">
                        <img src={ `${process.env.PUBLIC_URL}/assets/images/home/instagram/7.png` } alt="desc" />

                        <div className="instagram-feed-content">
                            <Link to="#"><i className="icon-heart-o"></i>280</Link>

                            <Link to="#"><i className="icon-comments"></i>22</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Instagram;