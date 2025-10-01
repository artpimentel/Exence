import styles from "./HomePage.module.css";

import sliderData from "../../data/sliderData.ts";
import Slider from "../../components/Slider/Slider.tsx";

import ProductsRow from "../../components/ProductsRow/ProductsRow.tsx";
import allProducers from "../../data/producers.ts";

function Home2() {
  const topProducers = allProducers.slice(0, 10);

  const producersCopy = [...allProducers];

  const newProducers = producersCopy.sort((a, b) => {
    return b.createdAt.localeCompare(a.createdAt);
  });

  return (
    <>
      <Slider slides={sliderData} className={styles.homeSlider} />

      <ProductsRow producers={newProducers} title="Novidades" />
      <ProductsRow
        producers={topProducers}
        title="Top Exence"
        highlight={true}
      />
    </>
  );
}

export default Home2;
