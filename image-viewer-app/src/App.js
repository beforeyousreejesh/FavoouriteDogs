import { BrowserRouter,Route, Routes } from "react-router-dom"

import './App.css';
import ImageViewer from './components/ImageViewer/ImageViewer'
import FavouriteViewer from "./components/favourites/FavouriteViewer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<ImageViewer></ImageViewer>}/>
          <Route path="/favorites" element={<FavouriteViewer></FavouriteViewer>}/>
        </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
