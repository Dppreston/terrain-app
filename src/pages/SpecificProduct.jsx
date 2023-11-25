import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function SpecificProduct() {
  let { cat, specific } = useParams();
  const [product, setProduct] = useState("");
  const [quantityCount, setQuantityCount] = useState(1);
  const [itemNumber, setItemNumber] = useState(0);

  const fetchSpecific = async () => {
    try {
      const res = await axios.get(
        `http://terrain-backend.onrender.com/${cat}/${specific}`
      );
      setProduct(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchSpecific();
  }, []);

  return (
    <>
      <div className="f-product-wrapper">
        {product &&
          product?.map((specific) => (
            <div className="f-product-container" key={specific._id}>
              <div className="f-product-img-container">
                <div className="f-product-main-img-container">
                  <img
                    src={specific.previewImg[0]}
                    alt=""
                    className="f-product-img-main"
                  />
                </div>
              </div>
              <div className="f-product-info-container">
                <div className="f-product-title-container">
                  <h1 className="f-product-title">{specific.title}</h1>
                  <div className="f-product-brand-id-container">
                    <p className="brand">By: {specific.brand}</p>
                    <p className="id">id: {specific._id}</p>
                  </div>
                </div>
                <div className="f-product-price-container">
                  <h1 className="f-product-price">{`$${specific.price}`}</h1>
                </div>
                <div className="f-product-about-container">
                  <p className="f-product-description">{specific.desc}</p>
                </div>
                <div className="f-product-add-cart-container">
                  <button
                    className="add-to-cart"
                    onClick={() => {
                      localStorage.setItem(`item`, JSON.stringify(specific));
                      localStorage.setItem(
                        `quantity`,
                        JSON.stringify(quantityCount)
                      );

                      setTimeout(() => {
                        window.location = "/cart";
                      }, 500);
                    }}
                  >
                    add to cart
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}
export default SpecificProduct;
