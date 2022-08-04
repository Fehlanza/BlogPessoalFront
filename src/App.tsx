import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './components/estaticos/navbar/Navbar';
import Footer from './components/estaticos/footer/Footer';
import Home from './Paginas/Home/Home';
import Login from './Paginas/login/Login';
import CadastroUsuario from './Paginas/cadastroUsuario/CadatroUsuario';
import './App.css';
import ListaTema from './components/temas/listatema/ListaTema';
import ListaPostagem from './components/temas/postagens/listapostagem/ListaPostagem';

function App() {
  return (
    <Router>
      <Navbar />
      <div style={{ minHeight: '100vh' }}>
        <Routes> // Antigo Switch
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/cadastrousuario" element={<CadastroUsuario />}/>
          <Route path="/temas" element={<ListaTema />}/>
          <Route path="/posts" element={<ListaPostagem />}/>
        </Routes>
      </div>
      <Footer />
    </Router>
  )
}
export default App;
