// ProductPage.tsx
import { useParams } from "react-router-dom";
import styles from "./ProductPage.module.css";

import allProducers from "../../data/producers";
import type { Producer } from "../../types/Producer";

import Slider from "../../components/Slider/Slider";
import ProductInfos from "../../components/common/ProductShowcase/ProductInfos";

function ProductPage() {
  const { id } = useParams<{ id: string }>();
  const producer: Producer | undefined = allProducers.find(
    (p) => p.id.toString() === id
  );

  if (!producer) {
    return <p>Produto não encontrado</p>;
  }

  const slides = producer.images.map((src, index) => ({
    id: index,
    src,
    alt: `${producer.name} - imagem ${index + 1}`,
  }));

  return (
    <>
      <section className={styles.productShowcase}>
        <div className={styles.showcaseContent}>
          <Slider slides={slides} className={styles.productSlider} />

          <ProductInfos producer={producer} />
        </div>
      </section>

      <section className={styles.productSpecifies}>
        <div className={styles.specifiesContent}>
          <ul className={styles.specifiesList}>
            {Object.entries(producer.appearance).map(([key, value]) => (
              <li key={key} className={styles.specify}>
                <strong>{key}:</strong> {value}
              </li>
            ))}
          </ul>
          <div className={styles.extraContent}>
            <a href=""></a>
          </div>
        </div>
      </section>
    </>
  );
}

export default ProductPage;
