import { Route, Routes } from 'react-router-dom'

import ProDuct from './component/ProDuct'
import ProDuctBuy from './component/ProDuctBuy'

const ProDuctMain = () => {
    return (
        <div>
            <h2>ProDuct Main</h2>
            <Routes>
                <Route path='/product' element={<ProDuct />} />
                <Route path='/productbuy' element={<ProDuctBuy />} />
            </Routes>
        </div>
    )
}
export default ProDuctMain