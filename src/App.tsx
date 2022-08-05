import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/estaticos/navbar/Navbar';
import Footer from './components/estaticos/footer/Footer';

import './App.css';
import ListaTema from './components/temas/listatema/ListaTema';
import CadastroTema from './components/temas/cadastroTema/CadastroTema';
import DeletarTema from './components/temas/deletarTema/DeletarTema';
import Home from './Paginas/Home/Home';
import CadastroUsuario from './Paginas/cadastroUsuario/CadatroUsuario';
import ListaPostagem from './components/temas/postagens/listapostagem/ListaPostagem';
import CadastroPost from './components/temas/postagens/cadastroPost/CadastroPost';
import DeletarPostagem from './components/temas/postagens/deletarPostagem/DeletarPostagem';
import Login from './Paginas/login/Login';


function App() {
  return (
    <Router>
      <Navbar />
      <div style={{ minHeight: '100vh' }}>
        <Routes>

          <Route path="/" element={<Login />} />

          <Route path="/login" element={<Login />} />

          <Route path="/home" element={<Home />} />

          <Route path="/cadastrousuario" element={<CadastroUsuario />} />

          <Route path="/temas" element={<ListaTema />} />

          <Route path="/posts" element={<ListaPostagem />} />

          <Route path="/formularioPostagem" element={<CadastroPost />} />

          <Route path="/formularioPostagem/:id" element={<CadastroPost />} />

          <Route path="/formularioTema" element={<CadastroTema />} />

          <Route path="/formularioTema/:id" element={<CadastroTema />} />

          <Route path="/deletarPostagem/:id" element={<DeletarPostagem />} />

          <Route path="/deletarTema/:id" element={<DeletarTema />} />


        </Routes>
      </div>
      <Footer />

    </Router>
  );
}

export default App;