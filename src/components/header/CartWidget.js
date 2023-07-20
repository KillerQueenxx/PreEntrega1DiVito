import { useContext } from "react";
import cart from "../../img/cart.svg";
import { listCartContext } from "../components item/providerContextoListCart";
import { controllerShowCart } from "./ContextCart";

const CartWidget = () => {
  const { setCartShow, cartShow } = useContext(controllerShowCart);
  const { listCart } = useContext(listCartContext);

  const showCart = () => {
    setCartShow((cartShow === "none") ? "flex" : "none");
  };

  return (
    <div className="cart-container" onClick={showCart}>
      <img src={cart} alt="cart" className="cart-icon" />
      {listCart.length > 0 && (
        <span className="cantCart">
          {listCart.length}
        </span>
      )}
    </div>
  );
}

export default CartWidget;
