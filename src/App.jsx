import { useLocation } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Favourites from './pages/Favourites.jsx';
import Play from './pages/Play.jsx';
import MyPicks from './pages/MyPicks.jsx';
import NavBar from './components/NavBar.jsx';
import { Routes, Route } from 'react-router-dom';
import { FavouriteProvider } from './contexts/FavouriteContext.jsx';
import { AddProvider } from './contexts/AddContext.jsx';

import './css/App.css';

function App() {
  const location = useLocation();

  return (
    <FavouriteProvider>
      <AddProvider>
        <NavBar />
        <head>
          <title>MediaTrack</title>
        </head>
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home key={location.key} />} />
            <Route path="/video-games" element={<Play key={location.key} />} />
            <Route path="/watch&play-list" element={<MyPicks key={location.key} />} />
            <Route path="/favourites" element={<Favourites key={location.key} />} />
          </Routes>
        </main>
      </AddProvider>
    </FavouriteProvider>
  );
}

export default App;
