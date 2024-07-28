import React from "react";
import {
  Routes,
  Route,
} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from './pages/Home/Home'
import Coin from './pages/Coin/Coin'
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="app">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/coin/:coinId' element={<Coin/>}/>
        {/* <Route path='/' element={<Home/>}/> */}
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
