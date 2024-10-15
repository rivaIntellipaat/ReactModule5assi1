import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import ErrorPage from './components/ErrorPage';

function App() {
  return (
    <div className=" bg-[#FDF7F2] h-screen">

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;