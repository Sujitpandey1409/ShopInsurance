import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ShopDetailPage from './pages/shopDetails/ShopDetailPage';


function App() {
  return (
    <div className="App">
      {/* hii, jai shree ganesh */}
      <Header />
      <Router>
        <Routes>
          <Route path='/details' element={<ShopDetailPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
