// ProductPage.tsx
import { useParams } from "react-router-dom";
import styles from "./ProductPage.module.css";

import allProducers from "../../data/producers";
import type { Producer } from "../../types/Producer";

import Slider from "../../components/Slider/Slider";
import ProductInfo from "../../components/ProductCard/ProductInfo";

const formatServiceName = (name: string): string => {
  const serviceMap: { [key: string]: string } = {
    Companion: "Acompanhante",
    Trip: "Viagem",
    Kiss: "Beijo",
    Masturbation: "Masturbação",
    OralSex: "Sexo Oral",
    AnalSex: "Sexo Anal",
    VaginalSex: "Sexo Vaginal",
    OralSexWithCondom: "Sexo Oral c/ Camisinha",
    AnalSexWithCondom: "Sexo Anal c/ Camisinha",
    VaginalSexWithCondom: "Sexo Vaginal c/ Camisinha",
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
        <div className={styles.servicesY}>
          <h2>Faço</h2>
          {offeredServices.length > 0 ? (
            <ul className={styles.servicesList}>
              {offeredServices.map((serviceName) => (
                <li key={serviceName}>{serviceName} ✅</li>
              ))}
            </ul>
          ) : (
            <p>Nenhum serviço oferecido listado.</p>
          )}
        </div>

        <div className={styles.servicesN}>
          <h2>Não faço</h2>
          {notOfferedServices.length > 0 ? (
            <ul className={styles.servicesList}>
              {notOfferedServices.map((serviceName) => (
                <li key={serviceName}>{serviceName} ❌</li>
              ))}
            </ul>
          ) : (
            <p>Todos os serviços estão listados acima ou indisponíveis.</p>
          )}
        </div>
      </section>
    </div>
  );
}

export default ProductPage;
