import styles from "./Home.module.css";

import Slider from "../../components/Slider/Slider.tsx";

import Catalog from "../../components/Catalog/Catalog.tsx";
import type { Producer } from "../../types/Producer.ts";
import allProducers from "../../data/producers.ts";

function Home2() {
  const producersNearYou = allProducers.filter(
    (producer: Producer) => producer.locality === "Rio de Janeiro"
  );

  const producersYouLike = allProducers.filter((producer: Producer) =>
    producer.tags.includes("loira")
  );

  return (
    <>
      <Slider />

      <Catalog
        producers={producersYouLike}
        title="Produtoras para o seu Gosto"
        filter="Loira"
      />
      <Catalog
        producers={producersNearYou}
        title="Produtoras Próximas de Você"
        filter="Rio de Janeiro"
      />
    </>
  );
}

export default Home2;
