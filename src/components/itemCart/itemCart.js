import { useContext } from "react";
import CartContext from "../../context/cartContext";
import styles from "./styles.module.scss";

export const ItemCart = ({ item }) => {

  const { deleteItemToCart, addItemToCart } = useContext(CartContext);

  return (
    <div className={styles.cartItem}>
      <img src={item.url} alt={item.name}></img>
      <div className={styles.dataContainer}>
        <div className={styles.left}>
          <p>{item.name}</p>
          <div className={styles.buttons}>
            <button onClick={() => addItemToCart(item)}>ADD</button>
            <button onClick={() => deleteItemToCart(item)}>REMOVE</button>
          </div>
        </div>
        <div className={styles.right}>
          <div>
            {item.amount}
            <p>Total: ${item.amount * item.price}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
