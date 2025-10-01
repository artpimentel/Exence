import styles from "./ProductInfos.module.css";
import {
  FaWhatsapp,
  FaInstagram,
  FaTelegram,
  FaRegHeart,
} from "react-icons/fa6";

import type { Producer } from "../../../types/Producer";

interface ProductInfosProps {
  producer: Producer;
  className?: string;
}

function ProductInfos({ producer, className }: ProductInfosProps) {
  return (
    <div className={`${styles.productInfo} ${className || ""}`}>
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
        {producer.phone && (
          <a
            href={`https://wa.me/${producer.phone}`}
            className={`${styles.contactButton} ${styles.whatsapp}`}
          >
            <FaWhatsapp />
          </a>
        )}
        {producer.telegram && (
          <a
            href={`https://t.me/${producer.telegram}`}
            className={`${styles.contactButton} ${styles.telegram}`}
          >
            <FaTelegram />{" "}
          </a>
        )}
        {producer.instagram && (
          <a
            href={`https://www.instagram.com/${producer.instagram}`}
            className={`${styles.contactButton} ${styles.instagram}`}
          >
            <FaInstagram />
          </a>
        )}
      </div>
    </div>
  );
}

export default ProductInfos;
