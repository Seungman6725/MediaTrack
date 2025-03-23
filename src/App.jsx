import Home from './pages/Home.jsx'
import Favourites from './pages/Favourites.jsx'
import Play from './pages/Play.jsx'
import MyPicks from './pages/MyPicks.jsx'
import NavBar from './components/NavBar.jsx';
import {Routes, Route} from 'react-router-dom'
import {FavouriteProvider} from './contexts/FavouriteContext.jsx'
import {AddProvider} from './contexts/AddContext.jsx'

import './css/App.css'


function App() {

  return (
    <FavouriteProvider>
      <AddProvider>
        <NavBar/>
        <main className="main-content">
          <Routes>
            <Route path="/movies" element={<Home />}/>
            <Route path="/video-games" element={<Play />}/>
            <Route path="/watch&play-list" element={<MyPicks />}/>
            <Route path="/favourites" element={<Favourites />}/>
          </Routes>
        </main>
      </AddProvider>
    </FavouriteProvider>
  );
}

export default App
