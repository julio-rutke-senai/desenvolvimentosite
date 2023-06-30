import { Link, Outlet, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Publicacoes from './pages/Publicacoes';

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contato</Link></li>
          <li><Link to="/publicacoes">Publicações</Link></li>
        </ul>
      </nav>
    
      <Routes>
        <Route path="/" exact Component={Home}/>
        <Route path="/about" exact Component={About}/>
        <Route path="/contact" exact Component={Contact}/>
        <Route path="/publicacoes" exact Component={Publicacoes}/>
      </Routes>
      
    </Router>
  );
}

export default App;
