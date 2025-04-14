import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from './components/Header';
import Home from './pages/Home';
import Detail from './pages/Detail';
import Favorites from './pages/Favorites';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/character/:id" element={<Detail />} />
        <Route path="/saved" element={<Favorites />} />
      </Routes>
    </Router>
  )
}

export default App;

