import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './pages/Navbar';
import Footer from './pages/Footer';
import Home from './components/Home/Home'
import './App.css'
import { PhoneProvider } from './Hooks/PhoneContext';
import News from './components/News/News';
import { useState } from 'react';
import Schedule from './components/Schedule';
import MatchAllInfo from './components/Home/MatchAllInfo';
import Series from './components/Series/Series';
import SeriesDetail from './components/Series/SeriesDetail';
import Ranking from './components/Rank/Ranking';

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
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/match/:matchId" element={<MatchAllInfo />} />
            <Route path="/series" element={<Series searchInput={searchInput} />} />
            <Route path="/series/:id" element={<SeriesDetail />} />
            <Route path="/ranking" element={<Ranking />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </PhoneProvider>
    </>
  )
}

export default App
