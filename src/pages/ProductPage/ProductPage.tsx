// ProductPage.tsx
import { useParams } from "react-router-dom";
import styles from "./ProductPage.module.css";

import Slider from "../../components/Slider/Slider";
import allProducers from "../../data/producers";
import type { Producer } from "../../types/Producer";

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
    <section className={styles.productShowcase}>
      <Slider slides={slides} className={styles.productSlider} />
      <div className={styles.productInfo}>
        <h1 className={styles.productName}>{producer.name}</h1>
        <p>{producer.locality}</p>

        <ul>
          {Object.entries(producer.tags).map(([key, value]) => (
            <li key={key}>
              <strong>{key}:</strong> {value}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default ProductPage;
