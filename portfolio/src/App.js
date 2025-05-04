// import logo from './logo.svg';
import './App.css';
import StarterPage from './components/StarterPage';
import ServiceDetails from './components/ServiceDetails';
import PortfolioDetails from './components/PortfolioDetails';
import IndexPage from './components/IndexPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
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
