import React, { useEffect, useState, useCallback } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const ProductBuy = () => {
    const navigate = useNavigate() //다른 페이지로 이동을 위해서 사용

    const { id } = useParams()
    const [product, setProduct] = useState({ //상품 정보 저장
        product_id: "",
        title: "",
        email: "",
        master_price: "",
        auction_id: "",
        isbn: "",
    });

    const [searchResults, setSearchResults] = useState([]); //검색 결과를 저장 처음은 빈 배열로

    const changeData = useCallback((e) => {
        setProduct({ ...product, [e.target.name]: e.target.value }) //key : value 값으로
    }, [product])

    // 검색 실행 함수
    const executeSearch = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.get(`http://localhost:8000/search?input=${product.title}`);
            setSearchResults(response.data)
        } catch (error) {
            console.error('Search failed:', error);
            window.alert("검색 중 오류가 발생했습니다.");
        }
    };

    // 검색 결과를 렌더링하는 함수
    const renderSearchResults = () => {
        return searchResults.map((item, index) => (
            <div key={index}>
                <h3>{item.title}</h3>
                <p>{item.price}</p>
            </div>
        ));
    };



    // const getProductBuy = async () => {
    //     const resp = await axios.post('http://localhost:8000/products/buy')
    //     setProduct(resp.data.data)
    // navigate('/product/list')

    //--------------------------------------------------------------
    // const buyProduct = useCallback(async (e) => {
    //     e.preventDefault();
    //     await axios.post('http://localhost:8000/products/buy', product);
    //     if (resp.product.status === 500) window.alert("상품이 없습니다.")
    //     else navigate('/product/list');
    // }, [product, navigate]);

    const buyProduct = useCallback(async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/products/buy', product);
            if (response.status === 500) {
                window.alert("상품이 없습니다.");
            } else {
                navigate('/product/list');
            }
        } catch (error) {
            console.error('Purchase failed:', error);
            window.alert("구매 처리 중 오류가 발생했습니다.");
        }
    }, [product, navigate]);


    // useEffect(() => {
    //     getProductBuy()
    // }, [])

    return (
        <main id="main">
            {/* // <!--================Home Banner Area =================-->
        // <!-- breadcrumb start--> */}
            <div>
                <section className="breadcrumb breadcrumb_bg" style={{ backgroundSize: "300px" }}>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-8">
                                <div className="breadcrumb_iner">
                                    <div className="breadcrumb_iner_item">
                                        <h2>ProDuct Buy</h2>
                                        <p>Home <span>-</span> ProDuct Buy</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* // <!-- breadcrumb start End-->  */}
                <br />
                <aside className="single_sidebar_widget search_widget">
                    <form onSubmit={executeSearch}>
                        <div className="form-group">
                            <div className="input-group mb-3">
                                <input type="text"
                                    className="form-control"
                                    name="title"
                                    value={product.title}
                                    onChange={changeData}
                                    placeholder='제목을 입력하세요'
                                    onFocus={(e) => e.target.placeholder = ''}
                                    onBlur={(e) => e.target.placeholder = 'Search Keyword'} />
                                <div className="input-group-append">
                                    <button type='submit' className="button rounded-0 primary-bg text-white w-100 btn_1">
                                        검색하기
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                    {/* 검색 결과 */}
                    <div>
                        {renderSearchResults()}
                    </div>
                </aside>
            </div>
        </main >
    )
}

export default ProductBuy