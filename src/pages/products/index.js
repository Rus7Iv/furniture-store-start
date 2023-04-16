import Link from "next/link";
import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebase";
import styles from "../../styles/ProductList.module.css";

function ProductsPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const productsCollection = collection(db, "products");
      const productsSnapshot = await getDocs(productsCollection);
      const productList = productsSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setProducts(productList);
    };

    fetchProducts();
  }, []);

  return (
    <main>
      <h1>Каталог товаров</h1>
      <ul className={styles.list}>
        {products.map((product) => (
          <Link
            legacyBehavior
            href={`/products/${product.id}`}
            key={product.id}
          >
            <div className={styles.card}>
              <h2>{product.title}</h2>
              <img src={product.image} width={200} alt={product.title} />
              <p className={styles.label}>{product.price} ₽</p>
            </div>
          </Link>
          // </li>
        ))}
      </ul>
    </main>
  );
}

export default ProductsPage;
