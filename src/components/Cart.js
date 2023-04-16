import { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db, auth } from "../firebase";

const Cart = () => {
  const [user, setUser] = useState(null);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const fetchCartItems = async () => {
      if (!user) return;

      const cartItemsRef = collection(db, "cartItems");
      const userCartQuery = query(
        cartItemsRef,
        where("userId", "==", user.uid)
      );
      const cartItemsSnapshot = await getDocs(userCartQuery);
      const items = cartItemsSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setCartItems(items);
    };

    fetchCartItems();
  }, [user]);

  return (
    <div>
      <h1>Корзина</h1>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            <h2>{item.productTitle}</h2>
            <p>{item.productPrice} ₽</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
