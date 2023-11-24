import "../../../styles/product-page.css";

import { useState, useEffect } from "react";
import axios from "axios";

import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import ProductFilter from "../../../components/ProductFilter";
import ProductDisplay from "../../../components/ProductDisplay";

function CasualCoats() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  // useEffect(() => {
  //   axiosFetchData();
  // }, []);

  // const axiosFetchData = async () => {
  //   try {
  //     const res = await axios("http://localhost:8080/clothing");
  //     setData(res.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <>
      <Navbar />
      <div className="product-page-container">
        <div className="filter-container">
          <h2 className="filter-title">Filter Your Results</h2>
          <ProductFilter data={data} />
        </div>
        <div className="product-display-container">
          <ProductDisplay data={data} />
        </div>
      </div>
      <Footer />
    </>
  );
}
export default CasualCoats;
