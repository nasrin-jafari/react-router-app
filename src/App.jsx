import { useState, useEffect } from "react";
import "./App.css";
import Header from "./component/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import About from "./component/About";
import Contact from "./component/Contact";
import ProductsDetail from "./component/ProductsDetail";
import Footer from "./component/Footer";
import Products from "./component/Products";
const url = "https://fakestoreapi.com/products";

function App() {
  const [products, setProducts] = useState([]);
  const dataproduct = async () => {
    const response = await fetch(url);
    const product = await response.json();
    setProducts(product);
  };
  useEffect(() => {
    dataproduct();
  }, []);
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home  />}></Route>
        <Route path="/About" element={<About />}></Route>
        <Route path="/Contact" element={<Contact />}></Route>
        <Route
          path="/Products"
          element={<Products products={products}></Products>}
        ></Route>
        <Route
          path="/Products/:id"
          element={<ProductsDetail></ProductsDetail>}
        ></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
