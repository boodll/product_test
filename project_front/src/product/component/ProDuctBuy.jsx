import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
const ProDuctBuy = () => {

    const navigate = useNavigate()
    const { id } = useParams()
    const [product, setProduct] = useState(null); // 상품 정보를 저장할 상태
    const [loading, setLoading] = useState(true); // 데이터 로딩 상태를 추적
    const [error, setError] = useState(''); // 에러 메시지도 

    
    useEffect(() => {
        const getProDuct = async () => {
            try {
                const resp = await axios.get('http://localhost:8000/products/' + id);
                setProduct(resp.data) //상품 데이터에 저장해주고
                setLoading(false); // 로딩 상태를 false로 설정한다.
            } catch (error) {
                //데이터 조회 실패하면 처리
                console.error('제품 정보를 가져오지 못함', error)
                setError("제품 정보를 불러오기 실패 했습니다.")
                setLoading(false)
            }
        }
        getProDuct()
    }, [id])

    const handleBuy = () =>{
        console.log("구매하기 클릭")
        // 구매하기 로직을 생성하는데 어디에 버튼을 만들어서 구현하는게 맞는걸까..
        // 버튼을 생성하지 않고 상품을 클릭하면 페이지로 넘어가고 끝?
        // 버튼 클릭시 디테일 이동 까지 생각
    }

    return (
        <main id="main">
            {/* // <!--================Home Banner Area =================-->
        // <!-- breadcrumb start--> */}
            <div>
                <section className="breadcrumb breadcrumb_bg">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-8">
                                <div className="breadcrumb_iner">
                                    <div className="breadcrumb_iner_item">
                                        <h2>Shop Category</h2>
                                        <p>Home <span>-</span> Shop Category</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* // <!-- breadcrumb start-->
    
        // <!--================Category Product Area =================--> */}
                <section className="cat_product_area section_padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3">
                                <div className="left_sidebar_area">
                                    <aside className="left_widgets p_filter_widgets">
                                        <div className="l_w_title">
                                            <h3>Browse Categories</h3>
                                        </div>
                                        <div className="widgets_inner">
                                            <ul className="list">
                                                <li>
                                                    <Link to="#">Frozen Fish</Link>
                                                    <span>(250)</span>
                                                </li>
                                                <li>
                                                    <Link to="#">Dried Fish</Link>
                                                    <span>(250)</span>
                                                </li>
                                                <li>
                                                    <Link to="#">Fresh Fish</Link>
                                                    <span>(250)</span>
                                                </li>
                                                <li>
                                                    <Link to="#">Meat Alternatives</Link>
                                                    <span>(250)</span>
                                                </li>
                                                <li>
                                                    <Link to="#">Fresh Fish</Link>
                                                    <span>(250)</span>
                                                </li>
                                                <li>
                                                    <Link to="#">Meat Alternatives</Link>
                                                    <span>(250)</span>
                                                </li>
                                                <li>
                                                    <Link to="#">Meat</Link>
                                                    <span>(250)</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </aside>

                                    <aside className="left_widgets p_filter_widgets">
                                        <div className="l_w_title">
                                            <h3>Product filters</h3>
                                        </div>
                                        <div className="widgets_inner">
                                            <ul className="list">
                                                <li>
                                                    <Link to="#">Apple</Link>
                                                </li>
                                                <li>
                                                    <Link to="#">Asus</Link>
                                                </li>
                                                <li className="active">
                                                    <Link to="#">Gionee</Link>
                                                </li>
                                                <li>
                                                    <Link to="#">Micromax</Link>
                                                </li>
                                                <li>
                                                    <Link to="#">Samsung</Link>
                                                </li>
                                            </ul>
                                            <ul className="list">
                                                <li>
                                                    <Link to="#">Apple</Link>
                                                </li>
                                                <li>
                                                    <Link to="#">Asus</Link>
                                                </li>
                                                <li className="active">
                                                    <Link to="#">Gionee</Link>
                                                </li>
                                                <li>
                                                    <Link to="#">Micromax</Link>
                                                </li>
                                                <li>
                                                    <Link to="#">Samsung</Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </aside>

                                    <aside className="left_widgets p_filter_widgets">
                                        <div className="l_w_title">
                                            <h3>Color Filter</h3>
                                        </div>
                                        <div className="widgets_inner">
                                            <ul className="list">
                                                <li>
                                                    <Link to="#">Black</Link>
                                                </li>
                                                <li>
                                                    <Link to="#">Black Leather</Link>
                                                </li>
                                                <li className="active">
                                                    <Link to="#">Black with red</Link>
                                                </li>
                                                <li>
                                                    <Link to="#">Gold</Link>
                                                </li>
                                                <li>
                                                    <Link to="#">Spacegrey</Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </aside>

                                    <aside className="left_widgets p_filter_widgets price_rangs_aside">
                                        <div className="l_w_title">
                                            <h3>Price Filter</h3>
                                        </div>
                                        <div className="widgets_inner">
                                            <div className="range_item">
                                                {/* <!-- <div id="slider-range"></div> --> */}
                                                <input type="text" className="js-range-slider" value="" />
                                                <div className="d-flex">
                                                    <div className="price_text">
                                                        <p>Price :</p>
                                                    </div>
                                                    <div className="price_value d-flex justify-content-center">
                                                        <input type="text" className="js-input-from" id="amount" readonly />
                                                        <span>to</span>
                                                        <input type="text" className="js-input-to" id="amount" readonly />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </aside>
                                </div>
                            </div>
                            <div className="col-lg-9">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="product_top_bar d-flex justify-content-between align-items-center">
                                            <div className="single_product_menu">
                                                <p><span>10000 </span> Prodict Found</p>
                                            </div>
                                            <div className="single_product_menu d-flex">
                                                <h5>short by : </h5>
                                                <select>
                                                    <option data-display="Select">name</option>
                                                    <option value="1">price</option>
                                                    <option value="2">product</option>
                                                </select>
                                            </div>
                                            <div className="single_product_menu d-flex">
                                                <h5>show :</h5>
                                                <div className="top_pageniation">
                                                    <ul>
                                                        <li>1</li>
                                                        <li>2</li>
                                                        <li>3</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="single_product_menu d-flex">
                                                <div className="input-group">
                                                    <input type="text" className="form-control" placeholder="search"
                                                        aria-describedby="inputGroupPrepend" />
                                                    <div className="input-group-prepend">
                                                        <span className="input-group-text" id="inputGroupPrepend"><i
                                                            className="ti-search"></i></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="row align-items-center latest_product_inner">
                                    <div className="col-lg-4 col-sm-6">
                                        <div className="single_product_item">
                                            <img src="images/product/product_1.png" alt="" />
                                            <div className="single_product_text">
                                                <h4>Quartz Belt Watch</h4>
                                                <h3>$150.00</h3>
                                                <Link to="#" className="add_cart">+ add to cart<i className="ti-heart"></i></Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-sm-6">
                                        <div className="single_product_item">
                                            <img src="images/product/product_2.png" alt="" />
                                            <div className="single_product_text">
                                                <h4>Quartz Belt Watch</h4>
                                                <h3>$150.00</h3>
                                                <Link to="#" className="add_cart">+ add to cart<i className="ti-heart"></i></Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-sm-6">
                                        <div className="single_product_item">
                                            <img src="images/product/product_3.png" alt="" />
                                            <div className="single_product_text">
                                                <h4>Quartz Belt Watch</h4>
                                                <h3>$150.00</h3>
                                                <Link to="#" className="add_cart">+ add to cart<i className="ti-heart"></i></Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-sm-6">
                                        <div className="single_product_item">
                                            <img src="images/product/product_4.png" alt="" />
                                            <div className="single_product_text">
                                                <h4>Quartz Belt Watch</h4>
                                                <h3>$150.00</h3>
                                                <Link to="#" className="add_cart">+ add to cart<i className="ti-heart"></i></Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-sm-6">
                                        <div className="single_product_item">
                                            <img src="images/product/product_5.png" alt="" />
                                            <div className="single_product_text">
                                                <h4>Quartz Belt Watch</h4>
                                                <h3>$150.00</h3>
                                                <Link to="#" className="add_cart">+ add to cart<i className="ti-heart"></i></Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-sm-6">
                                        <div className="single_product_item">
                                            <img src="images/product/product_6.png" alt="" />
                                            <div className="single_product_text">
                                                <h4>Quartz Belt Watch</h4>
                                                <h3>$150.00</h3>
                                                <Link to="#" className="add_cart">+ add to cart<i className="ti-heart"></i></Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-sm-6">
                                        <div className="single_product_item">
                                            <img src="images/product/product_7.png" alt="" />
                                            <div className="single_product_text">
                                                <h4>Quartz Belt Watch</h4>
                                                <h3>$150.00</h3>
                                                <Link to="#" className="add_cart">+ add to cart<i className="ti-heart"></i></Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-sm-6">
                                        <div className="single_product_item">
                                            <img src="images/product/product_8.png" alt="" />
                                            <div className="single_product_text">
                                                <h4>Quartz Belt Watch</h4>
                                                <h3>$150.00</h3>
                                                <Link to="#" className="add_cart">+ add to cart<i className="ti-heart"></i></Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-sm-6">
                                        <div className="single_product_item">
                                            <img src="images/product/product_2.png" alt="" />
                                            <div className="single_product_text">
                                                <h4>Quartz Belt Watch</h4>
                                                <h3>$150.00</h3>
                                                <Link to="#" className="add_cart">+ add to cart<i className="ti-heart"></i></Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="pageination">
                                            <nav aria-label="Page navigation example">
                                                <ul className="pagination justify-content-center">
                                                    <li className="page-item">
                                                        <Link className="page-link" to="#" aria-label="Previous">
                                                            <i className="ti-angle-double-left"></i>
                                                        </Link>
                                                    </li>
                                                    <li className="page-item"><Link className="page-link" to="#">1</Link></li>
                                                    <li className="page-item"><Link className="page-link" to="#">2</Link></li>
                                                    <li className="page-item"><Link className="page-link" to="#">3</Link></li>
                                                    <li className="page-item"><Link className="page-link" to="#">4</Link></li>
                                                    <li className="page-item"><Link className="page-link" to="#">5</Link></li>
                                                    <li className="page-item"><Link className="page-link" to="#">6</Link></li>
                                                    <li className="page-item">
                                                        <Link className="page-link" to="#" aria-label="Next">
                                                            <i className="ti-angle-double-right"></i>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </nav>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!--================End Category Product Area =================--> */}
            </div>
        </main>
    )
}

export default ProDuctBuy

