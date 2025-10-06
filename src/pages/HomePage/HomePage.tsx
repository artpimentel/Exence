import { useTranslation } from "react-i18next";

import styles from "./HomePage.module.css";

import sliderData from "../../data/sliderData.ts";
import Slider from "../../components/Slider/Slider.tsx";

import ProductsRow from "../../components/ProductsRow/ProductsRow.tsx";
import allProducers from "../../data/producers.ts";

function Home2() {
  const { t } = useTranslation();

  const topProducers = allProducers.slice(0, 10);

  const producersCopy = [...allProducers];

  const newProducers = producersCopy.sort((a, b) => {
    return b.metadata.createdAt.localeCompare(a.metadata.createdAt);
  });

  return (
    <>
      <Slider slides={sliderData} className={styles.homeSlider} />

      <ProductsRow producers={newProducers} title={t("newsPlaceholder")} />
      <ProductsRow
        producers={topProducers}
        title="Top Exence"
        highlight={true}
      />
    </>
  );
}

export default Home2;
