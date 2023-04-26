import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import styles from "../styles/CartPage.module.css";

const CartPage = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const existingItems = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(existingItems);
  }, []);

  const removeItem = (index) => {
    const existingItems = JSON.parse(localStorage.getItem("cart")) || [];
    const updatedItems = existingItems.filter((item, i) => i !== index);
    localStorage.setItem("cart", JSON.stringify(updatedItems));
    setCart(updatedItems);
  };

  return (
    <>
      <Navigation />
      <main>
        <div className={styles.page}>
          <h1 className={styles.title}>Корзина</h1>
          {cart.length === 0 ? (
            <p className={styles.empty}>Ваша корзина пуста</p>
          ) : (
            <ul className={styles.items}>
              {cart.map((item, index) => (
                <li key={index} className={styles.item}>
                  <div className={styles.image}>
                    <img src={item.image[0]} alt={item.title} />
                  </div>
                  <div className={styles.info}>
                    <h2 className={styles.title}>{item.title}</h2>
                    <p className={styles.price}>{item.price} ₽</p>
                    <button onClick={() => removeItem(index)}>Удалить</button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default CartPage;
