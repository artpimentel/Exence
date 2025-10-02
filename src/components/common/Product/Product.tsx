import { Link } from "react-router-dom";

import styles from "./Product.module.css";
import { GrLocation } from "react-icons/gr";
import { BiIdCard } from "react-icons/bi";

import type { Producer } from "../../../types/Producer";

interface ProductProps {
  producer: Producer;
  variant?: "row" | "highlight" | undefined;
}

function Product({ producer, variant }: ProductProps) {
  return (
    <li
      className={`${styles.product} 
        ${variant === "highlight" ? styles.highlight : ""} 
        ${variant === "row" ? styles.row : ""}`}
    >
      <Link to={`/product/${producer.id}`} className={styles.productLink}>
        <img className={styles.producerImage} src={producer.images[0]} alt="" />

        <div className={styles.itemInfo}>
          <div className={styles.infoHeader}>
            <h3 className={styles.producerName}>{producer.name}</h3>
            <span
              className={`${styles.productLoc} 
                ${variant === undefined ? styles.hidden : ""}`}
            >
              {producer.locality}
            </span>
            <span
              className={`${styles.productDesc} 
                ${variant !== undefined ? styles.hidden : ""}`}
            >
              {producer.description}
            </span>
          </div>
          <div
            className={`${styles.infoContent} 
                ${variant !== undefined ? styles.hidden : ""}`}
          >
            <div className={styles.infoValue}></div>
            <span className={styles.defaultInfo}>
              <span>
                <BiIdCard />
              </span>
              {producer.age} anos
            </span>
            <span className={styles.defaultInfo}>
              <span>
                <GrLocation />
              </span>
              {producer.locality}
            </span>
          </div>
        </div>
      </Link>
    </li>
  );
}

export default Product;
