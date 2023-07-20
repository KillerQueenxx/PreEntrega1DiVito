import "../../styles/containerCart.css";
import close from "../../img/close.svg";
import ItemCart from "./ItemCart";
import clear from "../../img/clear.svg";
import { useContext } from "react";
import { controllerShowCart } from "./ContextCart";
import { listCartContext } from "../components item/providerContextoListCart";

const ContainerCart = () => {
  const { cartShow, setCartShow } = useContext(controllerShowCart);
  const { listCart, clearCart } = useContext(listCartContext);

  const style = {
    display: cartShow,
  };

  const closeCart = () => {
    setCartShow((cartShow === "none") ? "flex" : "none");
  };

  // Calcular el total de la compra usando reduce()
  const total = listCart.reduce((acc, producto) => {
    return acc + producto.price * producto.quantity;
  }, 0);

  return (
    <div className="cart" style={style}>
      <div className="cerrar">
        <button className="close" onClick={closeCart}>
          <img src={close} alt="close" />
        </button>
      </div>

      <div className="containerItemsCart">
        {listCart.length === 0 ? (
          <span className="emptyCart">Tu carrito está vacío</span>
        ) : (
          listCart.map((producto) => (
            <ItemCart
              key={producto.id}
              id={producto.id}
              title={producto.title}
              image={producto.imageProduct.firtsImage}
              quantity={producto.quantity}
              price={producto.price}
            />
          ))
        )}
      </div>

      <div className="TerminarCompra">
        {/* Mostrar el total de la compra */}
        <span className="total">Total: ${total}</span>

        <button className="terminar">
          Terminar compra
        </button>

        <button className="clear" onClick={clearCart}>
          <img src={clear} alt="clear" />
        </button>
      </div>
    </div>
  );
};

export default ContainerCart;
