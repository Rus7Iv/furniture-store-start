import { useState, useEffect } from "react";
import styles from "../styles/Banner.module.css";

function Banner() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const isBannerClosed = localStorage.getItem("isBannerClosed");

    // Чтобы баннер повторно не появлялся
    // if (isBannerClosed) {
    //   setHidden(true);
    // }
  }, []);

  const handleClose = () => {
    setHidden(true);
    localStorage.setItem("isBannerClosed", true);
  };

  if (hidden) {
    return null; // если баннер скрыт, не рендерим его
  }

  return (
    <div
      className={`${styles.banner} ${hidden ? styles["banner-slide-up"] : ""}`}
    >
      <p>Здесь текст баннера</p>
      <button className={styles["close-button"]} onClick={handleClose}>
        <span>Закрыть</span>
      </button>
    </div>
  );
}

export default Banner;
