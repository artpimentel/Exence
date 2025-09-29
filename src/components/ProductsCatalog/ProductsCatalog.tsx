import styles from "./ProductsCatalog.module.css";

import type { Producer } from "../../types/Producer.ts";
import Product from "../../components/common/Product/Product.tsx";
import allProducers from "../../data/producers.ts";

function ProductsCatalog() {
  return (
    <ul className={styles.allProducersList}>
      {allProducers.map((producer: Producer) => (
        <Product key={producer.id} producer={producer} />
      ))}
    </ul>
  );
}

export default ProductsCatalog;
