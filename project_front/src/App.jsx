import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './home/component/Header';
import Footer from './home/component/Footer';
import HomeMain from './home/HomeMain'
import ProDuctMain from './product/ProductMain';

function App() {
  return (
    <Router>
      <div>
        {/* <Header /> */}
        <Routes>
          <Route path="/" element={<HomeMain />} />
          {/* 다른 경로들을 여기에 추가할 수 있다 */}
          {/* <Route path='/product' element={<ProDuctMain />} /> */}
          <Route path='/products/*' element={<ProDuctMain />} /> {/*ProDuct 컴포넌트를 위한 라우트를 추가 */}
        </Routes>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
