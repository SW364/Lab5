import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Dashboard } from './pages/Dashboard';
import { Perfil } from './pages/Perfil';
import { Login } from './pages/Login';
import { Home } from './pages/Home';
import { Layout } from './pages/Layout';
import { Footer } from './pages/Footer';

function App() {
  return (
    <div>
      <Layout/>
      <Routes>
         <Route class="navbar-brand"  path="Home" element={ <Home/> }></Route>
         <Route class="navbar-brand"  path="Login" element={ <Login/> }></Route>
         <Route class="navbar-brand"  path="Perfil" element={ <Perfil/> }></Route>


  </Routes>
    <Footer/>
  </div>
  );
}

export default App;
