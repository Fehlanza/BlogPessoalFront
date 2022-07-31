import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './components/estaticos/navbar/Navbar';
import Footer from './components/estaticos/footer/Footer';
import Home from './Paginas/Home/Home';
import Login from './Paginas/login/Login';
import { MuiThemeProvider, createTheme } from '@material-ui/core/styles';
import './App.css';

function App() {

  const theme = createTheme({
    palette: {
      primary: {
        main: '#ca6c9e',
      },
      secondary: {
        main: '#ca6c9e',
      },
    },
  });

  return (
    <Router>
      <MuiThemeProvider theme={theme}>
      <Navbar />
      <div style={{ minHeight: '100vh' }}>
        <Routes> // Antigo Switch
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          {/* <Route path="/cadastro" element={<CadastroUsuario />}/> */}
        </Routes>
      </div>
      <Footer />
      </MuiThemeProvider>
    </Router>
  )
}
export default App;
