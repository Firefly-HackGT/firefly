import './styles/App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <div id="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route element={<Navbar />} >
            <Route path='/sus' element={<Dashboard />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
