import logo from './logo.svg';
import './App.css';
import { Navbar } from './navbar/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from './pages/home/Home';
import { Article_detail } from './pages/article_detail/Article_detail';
import { Authentication } from './pages/authentication/Authentication';
import { Add_article } from './pages/backoffice/Add_article';
import { User_profile } from './pages/backoffice/User_profile';



function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />

        <Routes>
          <Route path='' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/article_detail/:id_article' element={<Article_detail />} />
          <Route path='/authentication' element={< Authentication />} />
          <Route path='/add_article' element={<Add_article />} />
          <Route path='/user_profile' element={<User_profile />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
