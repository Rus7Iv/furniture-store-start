import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useAuth } from "../lib/auth";
import styles from "../styles/CartPage.module.css";

const CartPage = () => {
  const [cart, setCart] = useState([]);
  const { user } = useAuth();
  const isAuthenticated = !!user;

  useEffect(() => {
    try {
      const existingItems = JSON.parse(localStorage.getItem("cart")) || [];
      setCart(existingItems);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const removeItem = (index) => {
    try {
      const existingItems = JSON.parse(localStorage.getItem("cart")) || [];
      const updatedItems = existingItems.filter((item, i) => i !== index);
      localStorage.setItem("cart", JSON.stringify(updatedItems));
      setCart(updatedItems);
    } catch (error) {
      console.log(error);
    }
  };

  const incrementQuantity = (index) => {
    try {
      const existingItems = JSON.parse(localStorage.getItem("cart")) || [];
      const updatedItems = [...existingItems];
      if (typeof updatedItems[index].quantity !== "number") {
        updatedItems[index].quantity = 1; // изменяем количество на 1
      } else {
        updatedItems[index].quantity += 1;
      }
      localStorage.setItem("cart", JSON.stringify(updatedItems));
      setCart(updatedItems);
    } catch (error) {
      console.log(error);
    }
  };

  const decrementQuantity = (index) => {
    try {
      const existingItems = JSON.parse(localStorage.getItem("cart")) || [];
      const updatedItems = [...existingItems];
      if (
        typeof updatedItems[index].quantity !== "number" ||
        updatedItems[index].quantity === 1
      ) {
        return;
      }
      updatedItems[index].quantity -= 1;
      localStorage.setItem("cart", JSON.stringify(updatedItems));
      setCart(updatedItems);
    } catch (error) {
      console.log(error);
    }
  };

  // вычисляем общую стоимость всех товаров в корзине
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  return (
    <>
      <Navigation />
      <main>
        <h1>Корзина</h1>
        {cart.length === 0 ? (
          <p className={styles.empty}>Ваша корзина пуста</p>
        ) : (
          <div className={styles.cart}>
            <ul className={styles.items}>
              {cart.map((item, index) => (
                <li key={index} className={styles.item}>
                  <div className={styles.image}>
                    <img src={item.image[0]} alt={item.title} />
                  </div>
                  <div className={styles.info}>
                    <h2 className={styles.title}>{item.title}</h2>
                    <div className={styles.quantity}>
                      <button onClick={() => decrementQuantity(index)}>
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button onClick={() => incrementQuantity(index)}>
                        +
                      </button>
                    </div>
                    <button onClick={() => removeItem(index)}>Удалить</button>
                    <p className={styles.price}>{item.price} ₽</p>
                  </div>
                </li>
              ))}
            </ul>
            <div className={styles.summary}>
              <p>Итого: {total} ₽</p>
              {isAuthenticated && <button>Оформить заказ</button>}
            </div>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
};

export default CartPage;
