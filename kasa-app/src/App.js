import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';
import Property from './pages/Property';
import Footer from './components/Footer';
import About from './pages/About';
import Error404 from './pages/Error404';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={ <Homepage /> } />
            <Route path="/property/:id" element={ <Property /> } />
            <Route path="/about" element={ <About /> } />
            <Route path="*" element={ <Error404 /> } />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
