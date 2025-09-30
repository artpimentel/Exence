import styles from "./ProductShowcase.module.css";
import { FaWhatsapp, FaInstagram, FaRegHeart } from "react-icons/fa6";
import Slider from "../../Slider/Slider";
import type { Producer } from "../../../types/Producer";

interface ProductShowcaseProps {
  producer: Producer;
}

function ProductShowcase({ producer }: ProductShowcaseProps) {
  const slides = producer.images.map((src, index) => ({
    id: index,
    src,
    alt: `${producer.name} - imagem ${index + 1}`,
  }));

  return (
    <section className={styles.productShowcase}>
      <Slider slides={slides} className={styles.productSlider} />

      <div className={styles.productInfo}>
        <div className={styles.productHeader}>
          <h1 className={styles.productName}>
            {producer.name} <span>{producer.locality}</span>
          </h1>
          <button className={styles.favoriteButton}>
            <FaRegHeart />
          </button>
        </div>
        <p className={styles.productDesc}>{producer.description}</p>
        <div className={styles.contactsOptions}>
          <a
            href={producer.phone}
            className={`${styles.contactButton} ${styles.whatsapp}`}
          >
            <FaWhatsapp />
          </a>
          <a
            href={producer.at}
            className={`${styles.contactButton} ${styles.instagram}`}
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </section>
  );
}

export default ProductShowcase;
