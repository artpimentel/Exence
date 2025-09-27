import styles from "./CatalogItem.module.css";
import type { Producer } from "../../../types/Producer";

interface CatalogItemProps {
  producer: Producer;
  isActive?: boolean;
  highlight?: boolean;
}

function CatalogItem({ producer, isActive, highlight }: CatalogItemProps) {
  return (
    <article
      className={`${styles.catalogItem} ${isActive ? styles.active : ""} ${
        highlight ? styles.highlight : ""
      }`}
    >
      <img className={styles.producerImage} src={producer.image} alt="" />
      <div className={styles.itemInfo}>
        <h3 className={styles.producerName}>{producer.name}</h3>
        <span className={styles.procuderLocality}>{producer.locality}</span>
      </div>
    </article>
  );
}

export default CatalogItem;
