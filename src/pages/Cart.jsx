import "../styles/login-cart.css";
import CartItemComponent from "../components/CartItemComponent";
import OrderSummary from "../components/OrderSummary";
import { useState, useEffect } from "react";
import axios from "axios";
import { useRef } from "react";

function Cart() {
  const emptyCart = useRef("");
  const fullCart = useRef("");
  let itemNumber = JSON.parse(localStorage.getItem("itemNumber"));
  const [cartItem, setCartItem] = useState(
    JSON.parse(localStorage.getItem(`item`))
  );
  const [itemQuantity, setItemQuantity] = useState(
    JSON.parse(localStorage.getItem("quantity"))
  );

  useEffect(() => {
    if (!cartItem) {
      emptyCart.current.classList.remove("hidden");
      fullCart.current.classList.add("hidden");
    } else {
      emptyCart.current.classList.add("hidden");
      fullCart.current.classList.remove("hidden");
    }
  }, [cartItem]);

  return (
    <>
      <div className="cart-container">
        <div className="empty-cart hidden" ref={emptyCart}>
          <h1 className="empty-cart-title">
            Oh No! Your shopping cart is empty!
          </h1>
          <h4 className="empty-cart-subtitle">
            Browse our products by selecting a category above
          </h4>
        </div>
        <div className="full-cart-container" ref={fullCart}>
          <div className="cart">
            <h2 className="cart-title">My Cart</h2>
            <div className="cart-list">
              <CartItemComponent
                cartItem={cartItem}
                itemQuantity={itemQuantity}
              />
            </div>
          </div>
          <div className="order-summary-container">
            <h2 className="cart-title">Your Order</h2>
            <OrderSummary cartItem={cartItem} />
          </div>
        </div>
      </div>
    </>
  );
}
export default Cart;
