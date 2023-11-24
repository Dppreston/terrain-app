import "../styles/login-cart.css";
import logo from "../branding-imgs/terrain-logo-alternate.png";

function CartItemComponent(props) {
  const cartItem = props.cartItem;
  const quantity = props.itemQuantity;

  return (
    <>
      <div className="cart-item">
        <div className="cart-item-img-container">
          <img src={cartItem?.previewImg[0]} alt="" className="cart-item-img" />
        </div>
        <div className="mobile-item-wrapper">
          <div className="cart-item-description-container">
            <h3 className="cart-item-title">{cartItem?.title}</h3>
            <h4 className="cart-item-details">{`Item #${cartItem?._id}`}</h4>
          </div>
          <div className="cart-item-price-container">
            <h4 className="item-price">{cartItem?.price}</h4>
            <button
              className="remove-btn"
              id="remove-btn"
              onClick={() => {
                localStorage.clear();
                location.reload();
              }}
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default CartItemComponent;
