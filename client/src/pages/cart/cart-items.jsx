import { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

function CartItem(props) {
  const { id, productName, productImage, description, price } = props.data;
  const { cartItems, addToCart, removeFromCart } = useContext(ShopContext);
  return (
    <div className="product">
      <img src={productImage} />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p>${price}</p>
      </div>
      <button
        className="addToCartBttn"
        onClick={() => {
          addToCart(id);
        }}
      >
        Add to Cart
      </button>
    </div>
  );
}

export default CartItem;
