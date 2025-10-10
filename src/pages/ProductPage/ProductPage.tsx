// ProductPage.tsx
import { useParams } from "react-router-dom";
import styles from "./ProductPage.module.css";

import allProducers from "../../data/producers";
import type { Producer } from "../../types/Producer";

import Slider from "../../components/Slider/Slider";
import ProductInfo from "../../components/ProductCard/ProductInfo";
import ProductServices from "../../components/ProductServices/ProductServices";

function ProductPage() {
  const { id } = useParams<{ id: string }>();
  const producer: Producer | undefined = allProducers.find(
    (p) => p.id.toString() === id
  );

  if (!producer) {
    return <p>Produto não encontrado</p>;
  }

  const slides = producer.profile.images.map((src, index) => ({
    id: index,
    src,
    alt: `${producer.profile.name} - imagem ${index + 1}`,
  }));

  return (
    <div className={styles.productPage}>
      <section className={styles.productShowcase}>
        <div className={styles.layout}>
          <Slider slides={slides} className={styles.productSlider} />
          <ProductInfo producer={producer} />
        </div>
      </section>
      <ProductServices producer={producer} />
    </div>
  );
}

export default ProductPage;
