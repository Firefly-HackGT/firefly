import './styles/App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import SessionCreation from './pages/SessionCreation';

function App() {
  return (
    <div id="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route element={<Navbar />} >
            <Route path='/createSession' element={<SessionCreation />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
