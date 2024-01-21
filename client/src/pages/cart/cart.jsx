import { PRODUCTS } from "../shop/products";
import { ShopContext } from "../../context/shop-context";
import { useContext } from "react";
import CartItem from "./cart-items";
import "./cart.css";

function Cart() {
  const { cartItems } = useContext(ShopContext);
  return (
    <div className="cart">
      <div>
        <h1>Your Cart Items!</h1>
      </div>
      <div className="cart">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] > 0) {
            <CartItem product={product} />;
          }
        })}
      </div>
    </div>
  );
}

export default Cart;
