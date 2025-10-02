import { Link } from "react-router-dom";

import styles from "./Product.module.css";
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
      <Link to={`/product/${producer.id}`}>
        <img className={styles.producerImage} src={producer.images[0]} alt="" />
        <div className={styles.itemInfo}>
          <h3 className={styles.producerName}>{producer.name}</h3>
          <span className={styles.procuderLocality}>{producer.locality}</span>
        </div>
      </Link>
    </li>
  );
}

export default Product;
