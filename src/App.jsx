import './App.css';
import { Home, About, Contact, Login, Register, NotFound } from './components/pages';
import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar/Navbar'
import { Footer } from './components/Footer/Footer'

const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
};

export default App;
