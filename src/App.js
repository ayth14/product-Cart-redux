import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "@components/Navbar";
import { Cart, Home } from "@container";


function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/cart" element={<Cart/>}/>
    </Routes>
    </>
  );
}

export default App;
