import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './home/component/Header';
import Home from './home/component/Home';
import Footer from './home/component/Footer';
import ProDuctMain from './product/ProductMain';
import ProDuct from './product/component/ProDuct';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* 다른 경로들을 여기에 추가할 수 있다 */}
          {/* <Route path='/product' element={<ProDuctMain />} /> */}
          <Route path='/product' element={<ProDuct />} /> {/*ProDuct 컴포넌트를 위한 라우트를 추가 */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
