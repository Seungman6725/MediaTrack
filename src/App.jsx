import Home from './pages/Home.jsx'
import Favourites from './pages/Favourites.jsx'
import NavBar from './components/NavBar.jsx';
import {Routes, Route} from 'react-router-dom'
import {FavouriteProvider} from './contexts/FavouriteContext.jsx'
import './css/App.css'


function App() {

  return (
    <FavouriteProvider>
      <NavBar/>
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/favourites" element={<Favourites />}/>
        </Routes>
      </main>
    </FavouriteProvider>
  );
}

export default App
