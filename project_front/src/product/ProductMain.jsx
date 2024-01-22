import { Route, Routes } from 'react-router-dom'

import ProductList from './component/ProductList'
import ProductBuy from './component/ProductBuy'


const ProductMain = () => {
    return (
        <div>
            <h2>ProDuct Main</h2>
            <Routes>
                <Route path='/list' element={<ProductList />} />
                <Route path='/buy' element={<ProductBuy />} />
            </Routes>
        </div>
    )
}
export default ProductMain