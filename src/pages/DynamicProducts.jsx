import axios from "axios";
import { useEffect, useState } from "react";
import Sort from "../components/Sort";
import ProductDisplay from "../components/ProductDisplay";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";

function DynamicProducts(props) {
  let catTitle = props.itemTitle;
  const [selectedFilter, setSelectedFilter] = useState("");
  const [filterData, setFilterData] = useState(null);
  const [data, setData] = useState("");

  //params
  let { cat } = useParams();
  console.log(cat);

  function childSort(data) {
    setSelectedFilter(data);
  }

  const fetchProducts = async () => {
    try {
      const res = await axios.get(
        `https://terrain-app-production.up.railway.app/${cat}`
      );
      setData(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  //sort

  const handleSort = async () => {
    try {
      const res = await axios.get(
        `https://terrain-app-production.up.railway.app/products/${cat}/?price=${selectedFilter}`
      );
      setData(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    handleSort();
  }, [selectedFilter]);

  return (
    <>
      <div className="dynamic-product-wrapper">
        <div className="product-top-container">
          <h1 className="product-display-title">{cat}</h1>
          <Sort childSort={childSort} />
        </div>
        <div className="product-display-container">
          {data && <ProductDisplay data={data} filterData={filterData} />}
        </div>
      </div>
    </>
  );
}
export default DynamicProducts;
