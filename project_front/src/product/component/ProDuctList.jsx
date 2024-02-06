import React, { useCallback, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import ReactPaginate from 'react-paginate';


const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(0); // 페이지는 0부터 시작
    const itemsPerPage = 10; // 예시: 페이지당 10개 항목
    const [pageCount, setPageCount] = useState(0);


    // 서버연동?
    const getProductList = useCallback(async () => {
        try {
            // Node.js 서버를 통해 데이터를 요청하는 URL로?
            const resp = await axios.get('http://localhost:8000/products/productlist');
            console.log("데이터 확인 해보기", resp.data.data); // 콘솔에서 데이터 확인
            setProducts(resp.data.data); // 상태 업데이트, resp.data.data는 API 응답 구조에 따라 조정필요
        } catch (error) {
            console.error("페이지 불러오기 실패", error);
        }
    }, []);

    useEffect(() => {
        getProductList(); // 컴포넌트 마운트 시 상품 목록 가져오기
    }, [getProductList]);


    return (
        <main>
            {/*  <!--================Home Banner Area =================-->
            <!-- breadcrumb start--> */}
            <div>
                <section className="breadcrumb" style={{
                    backgroundImage: "url('/img/b-mic.png')",
                    backgroundSize: "300px",
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center'
                }}>
                    {/* <section className="breadcrumb breadcrumb_bg"> style={{backgroundImage: "url(img/b-mic.png)"}} */}
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-8">
                                <div className="breadcrumb_iner">
                                    <div className="breadcrumb_iner_item">
                                        <h2>ProDuct List</h2>
                                        <p>Home <span>-</span> ProDuct List</p>
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
                                            <h3>카테고리 별 도서</h3>
                                        </div>
                                        <div className="widgets_inner">
                                            <ul className="list">
                                                <li>
                                                    <Link to="#">건강/취미</Link>
                                                    <span>(250)</span>
                                                </li>
                                                <li>
                                                    <Link to="#">만화</Link>
                                                    <span>(250)</span>
                                                </li>
                                                <li>
                                                    <Link to="#">여행</Link>
                                                    <span>(250)</span>
                                                </li>
                                                <li>
                                                    <Link to="#">역사</Link>
                                                    <span>(250)</span>
                                                </li>
                                                <li>
                                                    <Link to="#">판타지</Link>
                                                    <span>(250)</span>
                                                </li>
                                                <li>
                                                    <Link to="#">장편소설/단편소설</Link>
                                                    <span>(250)</span>
                                                </li>
                                                <li>
                                                    <Link to="#">자기계발</Link>
                                                    <span>(250)</span>
                                                </li>
                                                <li>
                                                    <Link to="#">외국어</Link>
                                                    <span>(250)</span>
                                                </li>
                                                <li>
                                                    <Link to="#">어린이</Link>
                                                    <span>(250)</span>
                                                </li>
                                                <li>
                                                    <Link to="#">잡지</Link>
                                                    <span>(250)</span>
                                                </li>
                                                <li>
                                                    <Link to="#">컴퓨터/모바일</Link>
                                                    <span>(250)</span>
                                                </li>
                                                <li>
                                                    <Link to="#">예술/문화</Link>
                                                    <span>(250)</span>
                                                </li>
                                                <li>
                                                    <Link to="#">요리</Link>
                                                    <span>(250)</span>
                                                </li>
                                                <li>
                                                    <Link to="#">수험서/자격증</Link>
                                                    <span>(250)</span>
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
                                                        <input type="text" className="js-input-from" id="amount" readOnly />
                                                        <span>to</span>
                                                        <input type="text" className="js-input-to" id="amount" readOnly />
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
                                                <p><span>10000 </span> 상품 리스트</p>
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
                                                {/* <h5>show :</h5> */}
                                                {/* <Link className="dropdown-item" to="/products/buy"> 상품 구매하기</Link> */}
                                                <Link to="/products/buy" className="list-group-item list-group-item-action list-group-item-danger">상품 구매하기</Link>
                                                <div className="top_pageniation">
                                                    <ul>
                                                        {/* <li>1</li>
                                                        <li>2</li>
                                                        <li>3</li> */}
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
                                    {products.map((product, index) => (
                                        <div className="col-lg-4 col-sm-6" key={index}>
                                            <div className="single_product_item">
                                                <img src={product.image || '/img/default-image.png'} alt="" />
                                                <div className="single_product_text">
                                                    <h4>{product.title}</h4>
                                                    <h3>가격:{product.price}원</h3>
                                                    <h3>저자:{product.author}</h3>
                                                    <Link to="#" className="add_cart">+ 상품 자세히 보기<i className="ti-heart"></i></Link>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                {/* <div className="row align-items-center latest_product_inner">
                                    <div className="col-lg-4 col-sm-6">
                                        <div className="single_product_item">
                                            <img src="/img/product/list1.png" alt="" />
                                            <div className="single_product_text">
                                                <h4>(아키텐의) 엘레오노르 : 중세 유럽을 지배한 매혹적인 여인</h4>
                                                <h3>가격:10000원</h3>
                                                <h3>저자:앨리슨 위어</h3>
                                                <Link to="#" className="add_cart">+ 상품 자세히 보기<i className="ti-heart"></i></Link>
                                            </div>
                                        </div>
                                    </div> */}
                                <div className="col-lg-4 col-sm-6">
                                    <div className="single_product_item">
                                        <img src="/img/product/list2.png" alt="" />
                                        <div className="single_product_text">
                                            <h4>칼레발라 : 핀란드 민족 서사시</h4>
                                            <h3>가격:10000원</h3>
                                            <h3>저자:엘리아스 뢴로트</h3>
                                            <Link to="#" className="add_cart">+ 상품 자세히 보기<i className="ti-heart"></i></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-sm-6">
                                    <div className="single_product_item">
                                        <img src="/img/product/list3.png" alt="" />
                                        <div className="single_product_text">
                                            <h4>사랑의 역사</h4>
                                            <h3>가격:10000원</h3>
                                            <h3>저자:니콜 크라우스</h3>
                                            <Link to="#" className="add_cart">+ 상품 자세히 보기<i className="ti-heart"></i></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-sm-6">
                                    <div className="single_product_item">
                                        <img src="/img/product/list4.png" alt="" />
                                        <div className="single_product_text">
                                            <h4>오래된 새 책 : 절판된 책에 바치는 헌사</h4>
                                            <h3>가격:10000원</h3>
                                            <h3>저자:박균호</h3>
                                            <Link to="#" className="add_cart">+ 상품 자세히 보기<i className="ti-heart"></i></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-sm-6">
                                    <div className="single_product_item">
                                        <img src="/img/product/list5.png" alt="" />
                                        <div className="single_product_text">
                                            <h4>리스크에 과감히 맞서라</h4>
                                            <h3>가격:10000원</h3>
                                            <h3>저자:세이안 채터리지</h3>
                                            <Link to="#" className="add_cart">+ 상품 자세히 보기<i className="ti-heart"></i></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-sm-6">
                                    <div className="single_product_item">
                                        <img src="/img/product/list6.png" alt="" />
                                        <div className="single_product_text">
                                            <h4>아몬드</h4>
                                            <h3>가격:10000원</h3>
                                            <h3>저자:손원평</h3>
                                            <Link to="#" className="add_cart">+ 상품 자세히 보기<i className="ti-heart"></i></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-sm-6">
                                    <div className="single_product_item">
                                        <img src="/img/product/list7.png" alt="" />
                                        <div className="single_product_text">
                                            <h4>책을 지키려는 고양이</h4>
                                            <h3>가격:10000원</h3>
                                            <h3>저자:나쓰카와 소스케</h3>
                                            <Link to="#" className="add_cart">+ 상품 자세히 보기<i className="ti-heart"></i></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-sm-6">
                                    <div className="single_product_item">
                                        <img src="/img/product/list8.png" alt="" />
                                        <div className="single_product_text">
                                            <h4>돈으로 살 수 없는 것들 : 무엇이 가치를 결정하는가</h4>
                                            <h3>가격:10000원</h3>
                                            <h3>저자:마이클 센델</h3>
                                            <Link to="#" className="add_cart">+ 상품 자세히 보기<i className="ti-heart"></i></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-sm-6">
                                    <div className="single_product_item">
                                        <img src="/img/product/list9.png" alt="" />
                                        <div className="single_product_text">
                                            <h4>명작을 읽는 기술 : 문학의 줄기를 잡다</h4>
                                            <h3>가격:10000원</h3>
                                            <h3>저자:박경서</h3>
                                            <Link to="#" className="add_cart">+ 상품 자세히 보기<i className="ti-heart"></i></Link>
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

        </section>
                {/* <!--================End Category Product Area =================-->

                {/* <!--::footer_part start::--> */}
    <footer className="footer_part">
        <div className="container">
            <div className="row justify-content-around">
                <div className="col-sm-6 col-lg-2">
                    <div className="single_footer_part">
                        <h4>Top Products</h4>
                        <ul className="list-unstyled">
                            <li><a href="">Managed Website</a></li>
                            <li><a href="">Manage Reputation</a></li>
                            <li><a href="">Power Tools</a></li>
                            <li><a href="">Marketing Service</a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-sm-6 col-lg-2">
                    <div className="single_footer_part">
                        <h4>Quick Links</h4>
                        <ul className="list-unstyled">
                            <li><a href="">Jobs</a></li>
                            <li><a href="">Brand Assets</a></li>
                            <li><a href="">Investor Relations</a></li>
                            <li><a href="">Terms of Service</a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-sm-6 col-lg-2">
                    <div className="single_footer_part">
                        <h4>Features</h4>
                        <ul className="list-unstyled">
                            <li><a href="">Jobs</a></li>
                            <li><a href="">Brand Assets</a></li>
                            <li><a href="">Investor Relations</a></li>
                            <li><a href="">Terms of Service</a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-sm-6 col-lg-2">
                    <div className="single_footer_part">
                        <h4>Resources</h4>
                        <ul className="list-unstyled">
                            <li><a href="">Guides</a></li>
                            <li><a href="">Research</a></li>
                            <li><a href="">Experts</a></li>
                            <li><a href="">Agencies</a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-sm-6 col-lg-4">
                    <div className="single_footer_part">
                        <h4>Newsletter</h4>
                        <p>Heaven fruitful doesn't over lesser in days. Appear creeping
                        </p>
                        <div id="mc_embed_signup">
                            <form target="_blank"
                                action="https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&amp;id=92a4423d01"
                                method="get" className="subscribe_form relative mail_part">
                                <input type="email" name="email" id="newsletter-form-email" placeholder="Email Address"
                                    className="placeholder hide-on-focus" onFocus="this.placeholder = ''"
                                    onBlur="this.placeholder = ' Email Address '" />
                                <button type="submit" name="submit" id="newsletter-submit"
                                    className="email_icon newsletter-submit button-contactForm">subscribe</button>
                                <div className="mt-10 info"></div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        <div className="copyright_part">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="copyright_text">
                            {/* <P><!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
                                            Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i className="ti-heart" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
                                            <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --></P> */}
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="footer_icon social_icon">
                            <ul className="list-unstyled">
                                <li><a href="#" className="single_social_icon"><i className="fab fa-facebook-f"></i></a></li>
                                <li><a href="#" className="single_social_icon"><i className="fab fa-twitter"></i></a></li>
                                <li><a href="#" className="single_social_icon"><i className="fas fa-globe"></i></a></li>
                                <li><a href="#" className="single_social_icon"><i className="fab fa-behance"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    {/* <!--::footer_part end::--> */ }
            </div >
        </main >
    )
}
export default ProductList
