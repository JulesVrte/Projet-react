import Navbar from './Navbar';
import Homepage from './Homepage';
import Property from './Property';
import Footer from './Footer';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={ <Homepage /> } />
            <Route path="/property/:id" element={ <Property /> }  />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
