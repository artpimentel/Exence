import { useState } from "react";
import styles from "./CatalogPage.module.css";

import ProductsCatalog from "../../components/ProductsCatalog/ProductsCatalog";
import FilterRow from "../../components/FilterRow/FilterRow.tsx";

import type { Producer } from "../../types/Producer.ts";
import allProducers from "../../data/producers.ts";

function getUniqueFilters(producers: Producer[]) {
  const filtersMap: { [key: string]: Set<string> } = {};

  producers.forEach((producer) => {
    Object.entries(producer.appearance).forEach(([category, value]) => {
      if (!filtersMap[category]) {
        filtersMap[category] = new Set();
      }
      filtersMap[category].add(value.toString());
    });
  });

  return Object.entries(filtersMap).map(([category, optionsSet]) => ({
    category,
    options: Array.from(optionsSet).sort(),
  }));
}
function Catalog() {
  const filterData = getUniqueFilters(allProducers);

  const [selectedFilters, setSelectedFilters] = useState<
    Record<string, string[]>
  >({});

  function toggleFilter(category: string, option: string) {
    setSelectedFilters((prev) => {
      const prevOptions = prev[category] || [];
      const alreadySelected = prevOptions.includes(option);

      return {
        ...prev,
        [category]: alreadySelected
          ? prevOptions.filter((o) => o !== option)
          : [...prevOptions, option],
      };
    });
  }

  const filteredProducers = allProducers.filter((producer) => {
    const noFiltersSelected = Object.values(selectedFilters).every(
      (opts) => opts.length === 0
    );
    if (noFiltersSelected) return true;

    return Object.entries(selectedFilters).every(([category, options]) => {
      if (options.length === 0) return true;

      const value =
        producer.appearance[category as keyof typeof producer.appearance];
      return options.includes(value.toString());
    });
  });

  return (
    <div className={styles.layout}>
      <FilterRow
        filters={filterData}
        selectedFilters={selectedFilters}
        onToggleFilter={toggleFilter}
      />
      <ProductsCatalog producers={filteredProducers} />
    </div>
  );
}

export default Catalog;
