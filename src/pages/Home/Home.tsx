//import styles from "./Home.module.css";

import Slider from "../../components/Slider/Slider.tsx";

import Catalog from "../../components/Catalog/Catalog.tsx";
import type { Producer } from "../../types/Producer.ts";
import allProducers from "../../data/producers.ts";

function Home2() {
  const producersNearYou = allProducers.filter(
    (producer: Producer) => producer.locality === "Zona-Sul"
  );

  const producersYouLike = allProducers.filter((producer: Producer) =>
    producer.tags.includes("Cabelo-Castanho")
  );

  const topProducers = allProducers.slice(0, 10);

  return (
    <>
      <Slider />

      <Catalog producers={producersYouLike} title="Recomendadas para Você" />
      <Catalog producers={topProducers} title="Top Exence" highlight={true} />
      <Catalog producers={producersNearYou} title="Próximas de Você" />
    </>
  );
}

export default Home2;
