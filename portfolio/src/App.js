// import logo from './logo.svg';
import './App.css';
import StarterPage from './components/StarterPage';
import ServiceDetails from './components/ServiceDetails';
import PortfolioDetails from './components/PortfolioDetails';
import IndexPage from './components/IndexPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    document.title = "Muse Teshome Dejene — Data Analyst & Product Manager";
  }, []);

  return (
    <Router basename="/portfolio">
      <div className="App">
   
        <Routes>
          <Route path="/starter" element={<StarterPage />} />
          <Route path="/services" element={<ServiceDetails />} />
          <Route path="*" element={<div style={{ textAlign: 'center', marginTop: '50px' }}>Page Not Found</div>} />
          <Route path="/portfolio-details/:id" element={<PortfolioDetails />} />
          <Route path="/" element={<IndexPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
