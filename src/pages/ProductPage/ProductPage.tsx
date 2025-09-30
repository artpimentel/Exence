// ProductPage.tsx
import { useParams } from "react-router-dom";
import styles from "./ProductPage.module.css";

import allProducers from "../../data/producers";
import type { Producer } from "../../types/Producer";

import ProductShowcase from "../../components/common/ProductShowcase/ProductShowcase";

function ProductPage() {
  const { id } = useParams<{ id: string }>();
  const producer: Producer | undefined = allProducers.find(
    (p) => p.id.toString() === id
  );

  if (!producer) {
    return <p>Produto não encontrado</p>;
  }

  return (
    <>
      <ProductShowcase producer={producer} />

      <section className={styles.productSpecifies}>
        <ul className={styles.specifiesList}>
          {Object.entries(producer.appearance).map(([key, value]) => (
            <li key={key} className={styles.specify}>
              <strong>{key}:</strong> {value}
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

export default ProductPage;
