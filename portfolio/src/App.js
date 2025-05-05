// import logo from './logo.svg';
import './App.css';
import ServiceDetails from './components/ServiceDetails';
import PortfolioDetails from './components/PortfolioDetails';
import IndexPage from './components/IndexPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    document.title = "Muse Teshome's Portfolio";
  }, []);

  return (
    <Router basename="/Portfolio">
      <div className="App">
   
        <Routes>
          <Route path="/services" element={<ServiceDetails />} />
          <Route path="/portfolio-details/:id" element={<PortfolioDetails />} />
          <Route path="/" element={<IndexPage />} />
          <Route path="*" element={<div style={{ textAlign: 'center', marginTop: '50px' }}>Page Not Found</div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
