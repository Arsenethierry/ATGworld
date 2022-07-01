import React from 'react'
import HomePage from "./pages/HomePage";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Feeds from './pages/Feeds';
import Navbar from './components/Navbar';
import Login from './components/Login';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path='loggedin' element={<Feeds user="siddharth Goyal"/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
