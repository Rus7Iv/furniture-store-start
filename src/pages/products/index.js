// import Link from "next/link";
// import { useState, useEffect } from "react";
// import { collection, getDocs } from "firebase/firestore";
// import { db } from "@/lib/firebase";
// import styles from "../../styles/ProductList.module.css";
// import Navigation from "@/components/Navigation";
// import Footer from "@/components/Footer";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// function ProductsPage() {
//   const [products, setProducts] = useState([]);
//   const [cart, setCart] = useState([]);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       const productsCollection = collection(db, "products");
//       const productsSnapshot = await getDocs(productsCollection);
//       const productList = productsSnapshot.docs.map((doc) => ({
//         id: doc.id,
//         ...doc.data(),
//       }));
//       setProducts(productList);
//     };

//     fetchProducts();
//   }, []);

//   const addToCart = (product) => {
//     const cart = JSON.parse(localStorage.getItem("cart")) || [];
//     const existingProduct = cart.find((item) => item.id === product.id);

//     if (existingProduct) {
//       existingProduct.quantity += 1;
//     } else {
//       cart.push({ ...product, quantity: 1 });
//     }

//     localStorage.setItem("cart", JSON.stringify(cart));
//     setCart(cart);
//   };

//   return (
//     <>
//       <Navigation />
//       <main>
//         <h1>Каталог товаров</h1>
//         <ul className={styles.list}>
//           {products.map((product) => (
//             <div key={product.id}>
//               <Link
//                 legacyBehavior
//                 href={`/products/${product.id}`}
//                 key={product.id}
//               >
//                 <div className={styles.card}>
//                   <h2>{product.title}</h2>
//                   <img src={product.image[0]} width={200} alt={product.title} />
//                   <p className={styles.label}>{product.price} ₽</p>
//                 </div>
//               </Link>
//               <button
//                 onClick={() => addToCart(product)}
//                 className={styles.btn_add_to_cart}
//               >
//                 Добавить в корзину
//               </button>
//             </div>
//           ))}
//         </ul>
//       </main>
//       <Footer />
//     </>
//   );
// }

// export default ProductsPage;
import Link from "next/link";
import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase";
import styles from "../../styles/ProductList.module.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

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

  const addToCart = (product) => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingProduct = cart.find((item) => item.id === product.id);

    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    setCart(cart);
  };

  return (
    <>
      <Navigation />
      <main>
        <h1>Каталог товаров</h1>
        <ul className={styles.list}>
          {products.map((product) => (
            <div key={product.id} className={styles.card}>
              <Link
                legacyBehavior
                href={`/products/${product.id}`}
                key={product.id}
              >
                <div>
                  <h2>{product.title}</h2>
                  <img src={product.image[0]} width={200} alt={product.title} />
                </div>
              </Link>
              {/* <div className={styles.add_to_cart}> */}
              <p className={styles.label}>{product.price} ₽</p>
              <button
                onClick={() => addToCart(product)}
                className={styles.btn_add_to_cart}
              >
                🛒
              </button>
            </div>
            // </div>
          ))}
        </ul>
      </main>
      <Footer />
    </>
  );
}

export default ProductsPage;
