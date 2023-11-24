import "../styles/product-page.css";

import testImg from "../product-imgs/test-backpack.jpeg";

function Product(props) {
  const currentProductData = props.currentProduct;
  const handleProductBack = props.handleProductBack;

  return (
    <>
      <div className="f-product-wrapper">
        <button className="f-product-back-btn" onClick={handleProductBack}>
          back
        </button>
        {currentProductData.map((current) => (
          <div className="f-product-container" key={current._id}>
            <div className="f-product-img-container">
              <div className="f-product-main-img-container">
                <img
                  src={current.previewImg}
                  alt="#"
                  className="f-product-img-main"
                />
              </div>
            </div>
            <div className="f-product-info-container">
              <div className="f-product-title-container">
                <h1 className="f-product-title">{current.title}</h1>
              </div>
              <div className="f-product-about-container">
                <h5 className="brand">By: {current.brand}</h5>
                <h5 className="product-id"> ID: {current._id}</h5>
              </div>
              <h2 className="f-product-price">{current.price}</h2>
              <h4 className="f-product-description">{current.desc}</h4>

              <div className="f-product-add-cart-container">
                <button className="add-to-cart">add to cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
export default Product;
