import './styles/App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import SessionCreation from './pages/SessionCreation';
import HostSession from './pages/HostSession';
import JoinSession from './pages/JoinSession';
import { useState } from 'react';

function App() {
  const [sID, setSID] = useState('');

  return (
    <div id="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home setSID={setSID} />} />
          <Route element={<Navbar sID={sID} />} >
            <Route path='/createSession' element={<SessionCreation />} />
            <Route path='/hostSession' element={<HostSession setSID={setSID} />} />
            <Route path='/joinSession' element={<JoinSession setSID={setSID} />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
