import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './pages/Navbar';
import Footer from './pages/Footer';
import Home from './components/Home'
import './App.css'
import { PhoneProvider } from './Hooks/PhoneContext';
import News from './components/News';
import { useState } from 'react';

function App() {

  const [searchInput, setSearchInput] = useState();
  return (
    <>
      <PhoneProvider>
        <BrowserRouter>
          <Navbar setSearchInput={setSearchInput} />
          <Routes>
            <Route path="/" element={<Home searchInput={searchInput} />} />
            <Route path="/news" element={<News />} />

          </Routes>
          <Footer />
        </BrowserRouter>
      </PhoneProvider>
    </>
  )
}

export default App
