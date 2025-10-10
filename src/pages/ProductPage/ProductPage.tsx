// ProductPage.tsx
import { useParams } from "react-router-dom";
import styles from "./ProductPage.module.css";
import { IoMdSchool } from "react-icons/io";
import { FaHandshake } from "react-icons/fa6";
import { GoClockFill } from "react-icons/go";

import allProducers from "../../data/producers";
import type { Producer } from "../../types/Producer";

import Slider from "../../components/Slider/Slider";
import ProductInfo from "../../components/ProductInfo/ProductInfo";
import ProductServices from "../../components/ProductServices/ProductServices";
import ProductValues from "../../components/ProductValues/ProductValues";

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
      <section className={styles.producerHistory}>
        <h2>Sobre Mim</h2>
        <p>"{producer.profile.description}"</p>
        <div className={styles.topics}>
          <div className={styles.topic}>
            <i className={styles.icon}>
              <IoMdSchool />
            </i>
          </div>
          <div className={styles.topic}>
            <i className={styles.icon}>
              <FaHandshake />
            </i>
          </div>
          <div className={styles.topic}>
            <i className={styles.icon}>
              <GoClockFill />
            </i>
            <div>Seg à Sex</div>
          </div>
        </div>
      </section>
      <ProductServices producer={producer} />
      <ProductValues producer={producer} />
    </div>
  );
}

export default ProductPage;
