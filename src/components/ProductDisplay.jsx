import { useRef, useState, useEffect } from "react";
import "../styles/product-page.css";
import { useParams } from "react-router-dom";

function ProductDisplay(props) {
  let productData = props.data;

  //params

  let { cat } = useParams();

  const handleProductSelect = (e) => {
    let id = e.currentTarget.value;
    window.location = `/products/${cat}/${id}`;
  };

  return (
    <>
      <div className="product-wrapper">
        <div className="product-container">
          {productData?.map((product) => (
            <button
              className="product"
              key={product._id}
              value={product._id}
              onClick={handleProductSelect}
            >
              <div className="product-img-container">
                <img
                  src={product.previewImg}
                  alt="product-img"
                  className="product-img"
                />
              </div>
              <div className="product-title-price-container">
                <h3 className="product-title">{product.title}</h3>
                <h2 className="product-price">{product.price}</h2>
              </div>
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
export default ProductDisplay;
