import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Activities from './Components/activities';

export default function App() {
  
  return (

    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Activities/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}