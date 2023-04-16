import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase";
import styles from "../../styles/ProductPage.module.css";

const ProductPage = () => {
  const router = useRouter();
  const { productId } = router.query;
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const productDoc = doc(db, "products", productId);
      const productSnapshot = await getDoc(productDoc);
      if (productSnapshot.exists()) {
        setProduct({ id: productSnapshot.id, ...productSnapshot.data() });
      }
    };
    fetchProduct();
  }, []);

  if (!product) {
    return (
      <div className={styles.loading}>
        {" "}
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <main>
      <div className={styles.page}>
        <img
          src={product.image}
          width={200}
          alt={product.title}
          className={styles.image}
        />
        <div className={styles.info}>
          <h1 className={styles.title}>{product.title}</h1>
          <p className={styles.desc}>{product.description}</p>
          <p className={styles.price}>{product.price} ₽</p>
        </div>
      </div>
    </main>
  );
};

export default ProductPage;
