import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import NotFound from './NotFound';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='*' element={<NotFound/>}></Route>
      </Routes>
    </div>

  )
}

export default App
