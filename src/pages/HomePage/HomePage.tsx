//import styles from "./Home.module.css";

import sliderData from "../../data/sliderData.ts";
import Slider from "../../components/Slider/Slider.tsx";

import ProductsRow from "../../components/ProductsRow/ProductsRow.tsx";
import type { Producer } from "../../types/Producer.ts";
import allProducers from "../../data/producers.ts";

function Home2() {
  const producersNearYou = allProducers.filter(
    (producer: Producer) => producer.locality === "Zona-Sul"
  );

  const producersYouLike = allProducers.filter(
    (producer: Producer) => producer.tags.Cabelo === "Ruivo"
  );

  const topProducers = allProducers.slice(0, 10);

  return (
    <>
      <Slider slides={sliderData} />

      <ProductsRow
        producers={topProducers}
        title="Top Exence"
        highlight={true}
      />
      <ProductsRow
        producers={producersYouLike}
        title="Recomendadas para Você"
      />
      <ProductsRow producers={producersNearYou} title="Próximas de Você" />
    </>
  );
}

export default Home2;
