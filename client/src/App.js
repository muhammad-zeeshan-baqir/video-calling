import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom"
import LobbayPage from './pages/Lobbay';
import RoomPage from './pages/Room';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<LobbayPage />} />
        <Route path='/room/:roomId' element={<RoomPage />} />
      </Routes>
    </div>
  );
}

export default App;
