import React from 'react'
import HomePage from "./pages/HomePage";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Feeds from './pages/Feeds';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path='loggedin' element={<Feeds />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
