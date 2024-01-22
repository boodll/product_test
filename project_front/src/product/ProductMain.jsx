import { Route, Routes } from 'react-router-dom'

import ProDuctList from './component/ProDuctList'
import ProDuctBuy from './component/ProDuctBuy'

const ProDuctMain = () => {
    return (
        <div>
            <h2>ProDuct Main</h2>
            <Routes>
                <Routes>
                    <Route path='/list' element={<ProDuctList />} />
                    <Route path='/buy/:id' element={<ProDuctBuy />} />
                </Routes>
            </Routes>
        </div>
    )
}
export default ProDuctMain