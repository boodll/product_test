import { Route, Routes } from 'react-router-dom'

import ProDuctList from './component/ProDuctList'
import ProDuctBuy from './component/ProDuctBuy'

const ProDuctMain = () => {
    return (
        <div>
            <h2>ProDuct Main</h2>
            <Routes>
                <Route path='/list' element={<ProDuctList />} /> {/* 수정된 컴포넌트 이름 */}
                <Route path='/buy' element={<ProDuctBuy />} />
            </Routes>
        </div>
    )
}
export default ProDuctMain