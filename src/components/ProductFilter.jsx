import "../styles/product-page.css";
import { useState, useRef, useEffect } from "react";
import axios from "axios";

function ProductFilter(props) {
  const productData = props.data;
  const brandOptionRef = useRef("");
  const [selectedBrand, setSelectedBrand] = useState("");

  const filterSelect = (e) => {
    setSelectedBrand(e.currentTarget.value);
  };

  const filterQuery = async () => {
    try {
      const res = await axios.get(
        `http://localhost:8080/rods?brand=${selectedBrand}`,
        {
          params: {
            brand: selectedBrand,
          },
        }
      );

      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    filterQuery();
  }, [selectedBrand]);

  return (
    <>
      <div className="filter-row-container">
        <div className="brand filter-row-style">
          <h3 className="filter-title-style">By Brand</h3>
          <select
            name="brand"
            id="filter-brand"
            className="filter-select-style"
            onChange={filterSelect}
          >
            <option value="Select Option"> filter by brand</option>
            {productData?.map((info) => (
              <option ref={brandOptionRef} value={info.brand} key={info._id}>
                {info.brand}
              </option>
            ))}
          </select>
        </div>
        <div className="price filter-row-style">
          <h3 className="filter-title-style">By Price</h3>
          <select
            name="price"
            id="filter-price"
            className="filter-select-style"
          >
            <option value="Select Option"> filter by price</option>
            <option></option>
          </select>
        </div>
        {/* <div className="size filter-row-style">
          <h3 className="filter-title-style">By Size</h3>
          <select name="size" id="filter-size" className="filter-select-style">
            <option value="Select Option"> filter by size</option>
            <option value="size-small">s</option>
            <option value="size-med">m</option>
            <option value="size-large">l</option>
          </select>
        </div> */}
      </div>
    </>
  );
}
export default ProductFilter;
