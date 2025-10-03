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
          {producer.profile.name} <span>{producer.local.country}</span>
        </h1>
        <button className={styles.favoriteButton}>
          <FaRegHeart />
        </button>
      </div>
      <p className={styles.productDesc}>{producer.profile.description}</p>
      <div className={styles.contactsOptions}>
        {producer.contact.phone && (
          <a
            href={`https://wa.me/${producer.contact.phone}`}
            className={`${styles.contactButton} ${styles.whatsapp}`}
          >
            <FaWhatsapp />
          </a>
        )}
        {producer.contact.telegram && (
          <a
            href={`https://t.me/${producer.contact.telegram}`}
            className={`${styles.contactButton} ${styles.telegram}`}
          >
            <FaTelegram />{" "}
          </a>
        )}
        {producer.contact.instagram && (
          <a
            href={`https://www.instagram.com/${producer.contact.instagram}`}
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
