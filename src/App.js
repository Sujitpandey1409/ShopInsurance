import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ShopDetailPage from './pages/shopDetails/ShopDetailPage';
import TravelPlans from './pages/travelPlans/TravelPlans';
import ComparePlan from './pages/travelPlans/ComparePlan/ComparePlan';
import PaymentStatus from './pages/paymentStatus/PaymentStatus'
import VehicleVerificationSteps from './pages/travelVerificationSteps/TravelVerificationSteps'
import LandGitBottom from './components/LandGitBottom';





function App() {
  return (
    <div className="App">
      {/* hii, jai shree ganesh */}
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<h1 style={{ marginTop: '200px' }}><Link to='/details'> Welcome to the Shop Insurance App {">"}</Link><LandGitBottom /></h1>} />
          <Route path='/details' element={<ShopDetailPage />} />
          <Route path="/shop-plans" element={<TravelPlans />} />
          <Route path="/compare-plans" element={<ComparePlan />} />
          <Route path="/payment-status" element={<PaymentStatus status={true} />} />
          <Route path="/verification" element={<VehicleVerificationSteps />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
