import { Route, Routes } from 'react-router-dom'

import ProductList from './component/ProDuctList'
import ProductBuy from './component/ProDuctBuy'
import ProductListPage from './component/paging1'


const ProductMain = () => {
    return (
        <div>
            {/* <h2>ProDuct Main</h2> */}
            <Routes>
                <Route path='/list' element={<ProductList />} />
                <Route path='/buy' element={<ProductBuy />} />

                {/* 페이징 샘플 */}
                <Route path='/listpage' element={<ProductListPage />} />
            </Routes>
        </div>
    )
}
export default ProductMain