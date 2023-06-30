import React from "react";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages";
import About from "./pages/about";
import Blogs from "./pages/blogs";
import SignUp from "./pages/signup";
import Contact from "./pages/contact";
import Cart from "./pages/cart";
import Shop from "./pages/shop";
import Frames from "./pages/frames";
import Plaques from "./pages/plaques";
import SingleProductPage from "./pages/singleProductPage";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/frames" element={<Frames />} />
        <Route path="/plaques" element={<Plaques />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/singleProduct/:id" element={<SingleProductPage />} />
      </Routes>
    </>
  );
}

export default App;
