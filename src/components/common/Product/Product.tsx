import { Link } from "react-router-dom";

import styles from "./Product.module.css";
import type { Producer } from "../../../types/Producer";

interface CatalogItemProps {
  producer: Producer;
  isActive?: boolean;
  highlight?: boolean;
}

function CatalogItem({ producer, isActive, highlight }: CatalogItemProps) {
  return (
    <li
      className={`${styles.catalogItem} ${isActive ? styles.active : ""} ${
        highlight ? styles.highlight : ""
      }`}
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

export default CatalogItem;
