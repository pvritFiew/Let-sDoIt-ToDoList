import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Template from './Component/Template/template';
import Today from './Pages/Today'
import Create_event from './Pages/Create_event';
import Calendar from './Pages/calendar';
import Complete from './Pages/complete';
import Uncomplete from './Pages/uncomplete';
import './App.css';

function App() {
  return (
        <Routes>
            <Route path="/" element={<Today/>}></Route>
            <Route path="/create_event" element={<Create_event/>}></Route>
            <Route path="/calendar" element={<Calendar/>}></Route>
            <Route path="/complete" element={<Complete/>}></Route>
            <Route path="/uncomplete" element={<Uncomplete/>}></Route>
        </Routes>

  );
}

export default App;
