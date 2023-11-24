import "../styles/login-cart.css";

function OrderSummary(props) {
  const cartItem = props.cartItem;
  return (
    <>
      <div className="order-summary">
        <div className="subtotal-container">
          <div className="subtotal">
            <h4 className="subtotal-title">Subtotal</h4>
            <h4 className="subtotal-price">{cartItem?.price}</h4>
          </div>
          <div className="shipping">
            <h4 className="shipping-title">Estimated Shipping</h4>
            <h4 className="shipping-price">FREE</h4>
          </div>
        </div>
        <div className="total-container">
          <h3 className="total-title">Estimated Order Total</h3>
          <h3 className="total-price">{cartItem?.price}</h3>
        </div>
        <button
          className="checkout-btn"
          id="checkout-btn"
          onClick={() => {
            alert("Thank you for your order");
            window.location = "/";
          }}
        >
          Checkout
        </button>
      </div>
    </>
  );
}
export default OrderSummary;
