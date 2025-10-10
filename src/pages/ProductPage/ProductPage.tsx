// ProductPage.tsx
import { useParams } from "react-router-dom";
import styles from "./ProductPage.module.css";

import allProducers from "../../data/producers";
import type { Producer } from "../../types/Producer";

import Slider from "../../components/Slider/Slider";
import ProductInfo from "../../components/ProductCard/ProductInfo";

import { FaCheck, FaXmark } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";

const formatServiceName = (name: string): string => {
  const serviceMap: { [key: string]: string } = {
    Companion: "Acompanhante",
    Trip: "Viagem",
    Kiss: "Beijo",
    Masturbation: "Masturbação",
    OralSex: "Sexo Oral",
    AnalSex: "Sexo Anal",
    VaginalSex: "Sexo Vaginal",
    OralSexWithCondom: "Sexo Oral com Preservativo",
    AnalSexWithCondom: "Sexo Anal com Preservativo",
    VaginalSexWithCondom: "Sexo Vaginal com Preservativo",
    DoublePenetration: "Penetração Dupla",
    TriplePenetration: "Penetração Tripla",
    Squirt: "Squirt",
  };

  return serviceMap[name] || name;
};

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

  const servicesEntries = Object.entries(producer.services) as [
    keyof Producer["services"],
    boolean
  ][];

  const offeredServices = servicesEntries
    .filter(
      ([key, value]) =>
        key !== "fetishes" && typeof value === "boolean" && value === true
    )
    .map(([key]) => formatServiceName(key));

  const notOfferedServices = servicesEntries
    .filter(
      ([key, value]) =>
        key !== "fetishes" && typeof value === "boolean" && value === false
    )
    .map(([key]) => formatServiceName(key));

  return (
    <div className={styles.productPage}>
      <section className={styles.productShowcase}>
        <div className={styles.layout}>
          <Slider slides={slides} className={styles.productSlider} />
          <ProductInfo producer={producer} />
        </div>
      </section>
      <section className={styles.productServices}>
        <div className={`${styles.column} ${styles.servicesY}`}>
          <h2>Faço</h2>
          <ul className={styles.servicesList}>
            {offeredServices.map((serviceName) => (
              <li key={serviceName}>
                <span className={styles.green}>
                  <FaCheck />
                </span>
                {serviceName}
              </li>
            ))}
          </ul>
        </div>

        <div className={`${styles.column} ${styles.servicesN}`}>
          <h2>Não faço</h2>
          <ul className={styles.servicesList}>
            {notOfferedServices.map((serviceName) => (
              <li key={serviceName}>
                <span className={styles.red}>
                  <FaXmark />
                </span>
                {serviceName}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}

export default ProductPage;
