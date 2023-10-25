import './App.css';
import { Home, About, Contact, Login, Register, NotFound } from './components/pages';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <Routes>
        <Home />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
