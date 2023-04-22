// import { useRouter } from "next/router";
// import { useState, useEffect } from "react";
// import { doc, getDoc } from "firebase/firestore";
// import { db } from "../../firebase";
// import styles from "../../styles/ProductPage.module.css";
// import Navigation from "@/components/Navigation";
// import Footer from "@/components/Footer";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import arrowLeft from "../../../public/arrow-left.svg";
// import arrowRight from "../../../public/arrow-right.svg";
// import Image from "next/image";

// const ProductPage = () => {
//   const router = useRouter();
//   const { productId } = router.query;
//   const [product, setProduct] = useState(null);

//   useEffect(() => {
//     const fetchProduct = async () => {
//       const productDoc = doc(db, "products", productId);
//       const productSnapshot = await getDoc(productDoc);
//       if (productSnapshot.exists()) {
//         setProduct({ id: productSnapshot.id, ...productSnapshot.data() });
//       }
//     };
//     if (productId) {
//       fetchProduct();
//     }
//   }, [productId]);

//   if (!product) {
//     return (
//       <>
//         <Navigation />
//         <main>
//           <div className={styles.loading}>
//             <p>Loading...</p>
//           </div>
//         </main>
//         <Footer />
//       </>
//     );
//   }

//   const CustomPrevArrow = (props) => {
//     const { className, style, onClick } = props;
//     return (
//       <div className={className} style={{ ...style, display: "block" }}>
//         <Image
//           src={arrowLeft}
//           alt="Prev"
//           width={24}
//           height={24}
//           onClick={onClick}
//         />
//       </div>
//     );
//   };

//   const CustomNextArrow = (props) => {
//     const { className, style, onClick } = props;
//     return (
//       <div className={className} style={{ ...style, display: "block" }}>
//         <Image
//           src={arrowRight}
//           alt="Next"
//           width={24}
//           height={24}
//           onClick={onClick}
//         />
//       </div>
//     );
//   };

//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     prevArrow: <CustomPrevArrow />,
//     nextArrow: <CustomNextArrow />,
//   };

//   return (
//     <>
//       <Navigation />
//       <main>
//         <div className={styles.page}>
//           <Slider {...settings} className={styles.carousel}>
//             {product.image &&
//               Array.isArray(product.image) &&
//               product.image.map((image) => (
//                 <div key={image}>
//                   <img
//                     src={image}
//                     alt={product.title}
//                     className={styles.image}
//                   />
//                 </div>
//               ))}
//           </Slider>

//           <div className={styles.info}>
//             <h1 className={styles.title}>{product.title}</h1>
//             <p className={styles.desc}>{product.description}</p>
//             <p className={styles.price}>{product.price} ₽</p>
//           </div>
//         </div>
//       </main>
//       <Footer />
//     </>
//   );
// };

// export default ProductPage;

import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase";
import styles from "../../styles/ProductPage.module.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import arrowLeft from "../../../public/arrow-left.svg";
import arrowRight from "../../../public/arrow-right.svg";
import Image from "next/image";

const ProductPage = () => {
  const router = useRouter();
  const { productId } = router.query;
  const [product, setProduct] = useState(null);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchProduct = async () => {
      const productDoc = doc(db, "products", productId);
      const productSnapshot = await getDoc(productDoc);
      if (productSnapshot.exists()) {
        setProduct({ id: productSnapshot.id, ...productSnapshot.data() });
      }
    };
    if (productId) {
      fetchProduct();
    }
  }, [productId]);

  const addToCart = () => {
    setCart([...cart, product]);
  };

  if (!product) {
    return (
      <>
        <Navigation />
        <main>
          <div className={styles.loading}>
            <p>Loading...</p>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  const CustomPrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div className={className} style={{ ...style, display: "block" }}>
        <Image
          src={arrowLeft}
          alt="Prev"
          width={24}
          height={24}
          onClick={onClick}
        />
      </div>
    );
  };

  const CustomNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div className={className} style={{ ...style, display: "block" }}>
        <Image
          src={arrowRight}
          alt="Next"
          width={24}
          height={24}
          onClick={onClick}
        />
      </div>
    );
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  return (
    <>
      <Navigation />
      <main>
        <div className={styles.page}>
          <Slider {...settings} className={styles.carousel}>
            {product.image &&
              Array.isArray(product.image) &&
              product.image.map((image) => (
                <div key={image}>
                  <img
                    src={image}
                    alt={product.title}
                    className={styles.image}
                  />
                </div>
              ))}
          </Slider>

          <div className={styles.info}>
            <h1 className={styles.title}>{product.title}</h1>
            <p className={styles.desc}>{product.description}</p>
            <p className={styles.price}>{product.price} ₽</p>
            <button onClick={addToCart}>Добавить в корзину</button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ProductPage;
