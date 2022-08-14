import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.js';
import Footer from './components/Footer.js';
import Search from './components/Search.js';
import Home from './pages/Home.js';
import SearchResult from './pages/SearchResults.js';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Search />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search/:query" element={<SearchResult />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
