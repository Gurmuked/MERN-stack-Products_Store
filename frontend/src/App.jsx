import React from 'react';
import {Route, Routes} from 'react-router-dom';

import Createpage from './pages/Createpage';
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';
function App() {

  return (
    <div>
    <Navbar />
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/create" element={<Createpage />} />
    </Routes>
    </div>
  )
}

export default App
