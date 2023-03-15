import logo from './logo.svg';
import './App.css';
import { Navbar } from './navbar/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from './pages/home/Home';
import { Article_detail } from './pages/article_detail/Article_detail';
import { Authentication } from './pages/authentication/Authentication';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />

        <Routes>
          <Route path='' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/article_detail' element={<Article_detail />} />
          <Route path='/authentication' element={< Authentication />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
