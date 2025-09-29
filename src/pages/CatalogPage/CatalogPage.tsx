import type { Producer } from "../../types/Producer";
import Product from "../../components/common/Product/Product.tsx";
import allProducers from "../../data/producers.ts";

function Catalog() {
  return (
    <>
      <ul>
        {allProducers.map((producer: Producer) => (
          <Product key={producer.id} producer={producer} />
        ))}
      </ul>
    </>
  );
}

export default Catalog;
