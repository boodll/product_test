import React from "react";
import { Link } from 'react-router-dom'

const Home = () =>{
    return(
        <div>
               {/* <!-- banner part start--> */}
    <section className="banner_part">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-12">
                    <div className="banner_slider owl-carousel">
                        <div className="single_banner_slider">
                            <div className="row">
                                <div className="col-lg-5 col-md-8">
                                    <div className="banner_text">
                                        <div className="banner_text_iner">
                                            <h1>Wood & Cloth
                                                Sofa</h1>
                                            <p>Incididunt ut labore et dolore magna aliqua quis ipsum
                                                suspendisse ultrices gravida. Risus commodo viverra</p>
                                            <Link to="#" className="btn_2">buy now</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="banner_img d-none d-lg-block">
                                    <img src="img/banner_img.png" alt="" />
                                </div>
                            </div>
                        </div><div className="single_banner_slider">
                            <div className="row">
                                <div className="col-lg-5 col-md-8">
                                    <div className="banner_text">
                                        <div className="banner_text_iner">
                                            <h1>Cloth & Wood
                                                Sofa</h1>
                                            <p>Incididunt ut labore et dolore magna aliqua quis ipsum
                                                suspendisse ultrices gravida. Risus commodo viverra</p>
                                            <Link to="#" className="btn_2">buy now</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="banner_img d-none d-lg-block">
                                    <img src="img/banner_img.png" alt="" />
                                </div>
                            </div>
                        </div><div className="single_banner_slider">
                            <div className="row">
                                <div className="col-lg-5 col-md-8">
                                    <div className="banner_text">
                                        <div className="banner_text_iner">
                                            <h1>Wood & Cloth
                                                Sofa</h1>
                                            <p>Incididunt ut labore et dolore magna aliqua quis ipsum
                                                suspendisse ultrices gravida. Risus commodo viverra</p>
                                            <Link to="#" className="btn_2">buy now</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="banner_img d-none d-lg-block">
                                    <img src="img/banner_img.png" alt="" />
                                </div>
                            </div>
                        </div>
                        {/* <!-- <div className="single_banner_slider">
                            <div className="row">
                                <div class="col-lg-5 col-md-8">
                                    <div class="banner_text">
                                        <div class="banner_text_iner">
                                            <h1>Cloth $ Wood Sofa</h1>
                                            <p>Incididunt ut labore et dolore magna aliqua quis ipsum
                                                suspendisse ultrices gravida. Risus commodo viverra</p>
                                            <Link to="#" class="btn_2">buy now</Link>
                                        </div>
                                    </div>
                                </div>
                                <div class="banner_img d-none d-lg-block">
                                    <img src="img/banner_img.png" alt="">
                                </div>
                            </div>
                        </div> --> */}
                    </div>
                    <div className="slider-counter"></div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- banner part start-->

    <!-- feature_part start--> */}
    <section className="feature_part padding_top">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-8">
                    <div className="section_tittle text-center">
                        <h2>Featured Category</h2>
                    </div>
                </div>
            </div>
            <div className="row align-items-center justify-content-between">
                <div className="col-lg-7 col-sm-6">
                    <div className="single_feature_post_text">
                        <p>Premium Quality</p>
                        <h3>Latest foam Sofa</h3>
                        <Link to="#" className="feature_btn">EXPLORE NOW <i className="fas fa-play"></i></Link>
                        <img src="img/feature/feature_1.png" alt="" />
                    </div>
                </div>
                <div className="col-lg-5 col-sm-6">
                    <div className="single_feature_post_text">
                        <p>Premium Quality</p>
                        <h3>Latest foam Sofa</h3>
                        <Link to="#" className="feature_btn">EXPLORE NOW <i className="fas fa-play"></i></Link>
                        <img src="img/feature/feature_2.png" alt="" />
                    </div>
                </div>
                <div className="col-lg-5 col-sm-6">
                    <div className="single_feature_post_text">
                        <p>Premium Quality</p>
                        <h3>Latest foam Sofa</h3>
                        <Link to="#" className="feature_btn">EXPLORE NOW <i className="fas fa-play"></i></Link>
                        <img src="img/feature/feature_3.png" alt="" />
                    </div>
                </div>
                <div className="col-lg-7 col-sm-6">
                    <div className="single_feature_post_text">
                        <p>Premium Quality</p>
                        <h3>Latest foam Sofa</h3>
                        <Link to="#" className="feature_btn">EXPLORE NOW <i className="fas fa-play"></i></Link>
                        <img src="img/feature/feature_4.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- upcoming_event part start-->

    <!-- product_list start--> */}
    <section className="product_list section_padding">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-12">
                    <div className="section_tittle text-center">
                        <h2>awesome <span>shop</span></h2>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <div className="product_list_slider owl-carousel">
                        <div className="single_product_list_slider">
                            <div className="row align-items-center justify-content-between">
                                <div className="col-lg-3 col-sm-6">
                                    <div className="single_product_item">
                                        <img src="img/product/product_1.png" alt="" />
                                        <div className="single_product_text">
                                            <h4>Quartz Belt Watch</h4>
                                            <h3>$150.00</h3>
                                            <Link to="#" className="add_cart">+ add to cart<i className="ti-heart"></i></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-sm-6">
                                    <div className="single_product_item">
                                        <img src="img/product/product_2.png" alt="" />
                                        <div className="single_product_text">
                                            <h4>Quartz Belt Watch</h4>
                                            <h3>$150.00</h3>
                                            <Link to="#" className="add_cart">+ add to cart<i className="ti-heart"></i></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-sm-6">
                                    <div className="single_product_item">
                                        <img src="img/product/product_3.png" alt="" />
                                        <div className="single_product_text">
                                            <h4>Quartz Belt Watch</h4>
                                            <h3>$150.00</h3>
                                            <Link to="#" className="add_cart">+ add to cart<i className="ti-heart"></i></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-sm-6">
                                    <div className="single_product_item">
                                        <img src="img/product/product_4.png" alt="" />
                                        <div className="single_product_text">
                                            <h4>Quartz Belt Watch</h4>
                                            <h3>$150.00</h3>
                                            <Link to="#" className="add_cart">+ add to cart<i className="ti-heart"></i></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-sm-6">
                                    <div className="single_product_item">
                                        <img src="img/product/product_5.png" alt="" />
                                        <div className="single_product_text">
                                            <h4>Quartz Belt Watch</h4>
                                            <h3>$150.00</h3>
                                            <Link to="#" className="add_cart">+ add to cart<i className="ti-heart"></i></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-sm-6">
                                    <div className="single_product_item">
                                        <img src="img/product/product_6.png" alt="" />
                                        <div className="single_product_text">
                                            <h4>Quartz Belt Watch</h4>
                                            <h3>$150.00</h3>
                                            <Link to="#" className="add_cart">+ add to cart<i className="ti-heart"></i></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-sm-6">
                                    <div className="single_product_item">
                                        <img src="img/product/product_7.png" alt="" />
                                        <div className="single_product_text">
                                            <h4>Quartz Belt Watch</h4>
                                            <h3>$150.00</h3>
                                            <Link to="#" className="add_cart">+ add to cart<i className="ti-heart"></i></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-sm-6">
                                    <div className="single_product_item">
                                        <img src="img/product/product_8.png" alt="" />
                                        <div className="single_product_text">
                                            <h4>Quartz Belt Watch</h4>
                                            <h3>$150.00</h3>
                                            <Link to="#" className="add_cart">+ add to cart<i className="ti-heart"></i></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="single_product_list_slider">
                            <div className="row align-items-center justify-content-between">
                                <div className="col-lg-3 col-sm-6">
                                    <div className="single_product_item">
                                        <img src="img/product/product_1.png" alt="" />
                                        <div className="single_product_text">
                                            <h4>Quartz Belt Watch</h4>
                                            <h3>$150.00</h3>
                                            <Link to="#" className="add_cart">+ add to cart<i className="ti-heart"></i></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-sm-6">
                                    <div className="single_product_item">
                                        <img src="img/product/product_2.png" alt="" />
                                        <div className="single_product_text">
                                            <h4>Quartz Belt Watch</h4>
                                            <h3>$150.00</h3>
                                            <Link to="#" className="add_cart">+ add to cart<i className="ti-heart"></i></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-sm-6">
                                    <div className="single_product_item">
                                        <img src="img/product/product_3.png" alt="" />
                                        <div className="single_product_text">
                                            <h4>Quartz Belt Watch</h4>
                                            <h3>$150.00</h3>
                                            <Link to="#" className="add_cart">+ add to cart<i className="ti-heart"></i></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-sm-6">
                                    <div className="single_product_item">
                                        <img src="img/product/product_4.png" alt="" />
                                        <div className="single_product_text">
                                            <h4>Quartz Belt Watch</h4>
                                            <h3>$150.00</h3>
                                            <Link to="#" className="add_cart">+ add to cart<i className="ti-heart"></i></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-sm-6">
                                    <div className="single_product_item">
                                        <img src="img/product/product_5.png" alt="" />
                                        <div className="single_product_text">
                                            <h4>Quartz Belt Watch</h4>
                                            <h3>$150.00</h3>
                                            <Link to="#" className="add_cart">+ add to cart<i className="ti-heart"></i></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-sm-6">
                                    <div className="single_product_item">
                                        <img src="img/product/product_6.png" alt="" />
                                        <div className="single_product_text">
                                            <h4>Quartz Belt Watch</h4>
                                            <h3>$150.00</h3>
                                            <Link to="#" className="add_cart">+ add to cart<i className="ti-heart"></i></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-sm-6">
                                    <div className="single_product_item">
                                        <img src="img/product/product_7.png" alt="" />
                                        <div className="single_product_text">
                                            <h4>Quartz Belt Watch</h4>
                                            <h3>$150.00</h3>
                                            <Link to="#" className="add_cart">+ add to cart<i className="ti-heart"></i></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-sm-6">
                                    <div className="single_product_item">
                                        <img src="img/product/product_8.png" alt="" />
                                        <div className="single_product_text">
                                            <h4>Quartz Belt Watch</h4>
                                            <h3>$150.00</h3>
                                            <Link to="#" className="add_cart">+ add to cart<i className="ti-heart"></i></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- product_list part start-->

    <!-- awesome_shop start--> */}
    <section className="our_offer section_padding">
        <div className="container">
            <div className="row align-items-center justify-content-between">
                <div className="col-lg-6 col-md-6">
                    <div className="offer_img">
                        <img src="img/offer_img.png" alt="" />
                    </div>
                </div>
                <div className="col-lg-6 col-md-6">
                    <div className="offer_text">
                        <h2>Weekly Sale on
                            60% Off All Products</h2>
                        <div className="date_countdown">
                            <div id="timer">
                                <div id="days" className="date"></div>
                                <div id="hours" className="date"></div>
                                <div id="minutes" className="date"></div>
                                <div id="seconds" className="date"></div>
                            </div>
                        </div>
                        <div className="input-group">
                            <input type="text" className="form-control" placeholder="enter email address"
                                aria-label="Recipient's username" aria-describedby="basic-addon2" />
                            <div className="input-group-append">
                                <Link to="#" className="input-group-text btn_2" id="basic-addon2">book now</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- awesome_shop part start-->

    <!-- product_list part start--> */}
    <section className="product_list best_seller section_padding">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-12">
                    <div className="section_tittle text-center">
                        <h2>Best Sellers <span>shop</span></h2>
                    </div>
                </div>
            </div>
            <div className="row align-items-center justify-content-between">
                <div className="col-lg-12">
                    <div className="best_product_slider owl-carousel">
                        <div className="single_product_item">
                            <img src="img/product/product_1.png" alt="" />
                            <div className="single_product_text">
                                <h4>Quartz Belt Watch</h4>
                                <h3>$150.00</h3>
                            </div>
                        </div>
                        <div className="single_product_item">
                            <img src="img/product/product_2.png" alt="" />
                            <div className="single_product_text">
                                <h4>Quartz Belt Watch</h4>
                                <h3>$150.00</h3>
                            </div>
                        </div>
                        <div className="single_product_item">
                            <img src="img/product/product_3.png" alt="" />
                            <div className="single_product_text">
                                <h4>Quartz Belt Watch</h4>
                                <h3>$150.00</h3>
                            </div>
                        </div>
                        <div className="single_product_item">
                            <img src="img/product/product_4.png" alt="" />
                            <div className="single_product_text">
                                <h4>Quartz Belt Watch</h4>
                                <h3>$150.00</h3>
                            </div>
                        </div>
                        <div className="single_product_item">
                            <img src="img/product/product_5.png" alt="" />
                            <div className="single_product_text">
                                <h4>Quartz Belt Watch</h4>
                                <h3>$150.00</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- product_list part end-->

    <!-- subscribe_area part start--> */}
    <section className="subscribe_area section_padding">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-7">
                    <div className="subscribe_area_text text-center">
                        <h5>Join Our Newsletter</h5>
                        <h2>Subscribe to get Updated
                            with new offers</h2>
                        <div className="input-group">
                            <input type="text" className="form-control" placeholder="enter email address"
                                aria-label="Recipient's username" aria-describedby="basic-addon2" />
                            <div className="input-group-append">
                                <Link to="#" className="input-group-text btn_2" id="basic-addon2">subscribe now</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!--::subscribe_area part end::-->

    <!-- subscribe_area part start--> */}
    <section className="client_logo padding_top">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-12">
                    <div className="single_client_logo">
                        <img src="img/client_logo/client_logo_1.png" alt="" />
                    </div>
                    <div className="single_client_logo">
                        <img src="img/client_logo/client_logo_2.png" alt="" />
                    </div>
                    <div className="single_client_logo">
                        <img src="img/client_logo/client_logo_3.png" alt="" />
                    </div>
                    <div className="single_client_logo">
                        <img src="img/client_logo/client_logo_4.png" alt="" />
                    </div>
                    <div className="single_client_logo">
                        <img src="img/client_logo/client_logo_5.png" alt="" />
                    </div>
                    <div className="single_client_logo">
                        <img src="img/client_logo/client_logo_3.png" alt="" />
                    </div>
                    <div className="single_client_logo">
                        <img src="img/client_logo/client_logo_1.png" alt="" />
                    </div>
                    <div className="single_client_logo">
                        <img src="img/client_logo/client_logo_2.png" alt="" />
                    </div>
                    <div className="single_client_logo">
                        <img src="img/client_logo/client_logo_3.png" alt="" />
                    </div>
                    <div className="single_client_logo">
                        <img src="img/client_logo/client_logo_4.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!--::subscribe_area part end::--> */}
        </div>
    )
}

export default Home