import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "../src/pages/Homepage";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import DynamicProducts from "./pages/DynamicProducts";
import { useState } from "react";
import Navbar from "./components/Navbar";
import SpecificProduct from "./pages/SpecificProduct";
import Footer from "./components/Footer";

function App() {
  const [itemCat, setItemCat] = useState("");
  const [itemTitle, setItemTitle] = useState("");

  function child(data) {
    setItemCat(data);
  }

  function childTitle(data) {
    setItemTitle(data);
  }

  return (
    <>
      <BrowserRouter>
        <Navbar child={child} childTitle={childTitle} />
        <Routes>
          <Route index element={<Homepage />} />
          <Route path="/home" element={<Homepage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/products/:cat" element={<DynamicProducts />} />
          <Route
            path="/products/:cat/:specific"
            element={<SpecificProduct />}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
