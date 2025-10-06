import styles from "./ProductReviews.module.css";

import type { Producer } from "../../types/Producer";

interface ProductReviewsProps {
  producer: Producer;
}

function ProductReviews({ producer }: ProductReviewsProps) {
  return (
    <section className={styles.productReviews}>
      <div className={styles.reviewsContent}>
        <div className={styles.reviewsHeader}>
          <span>{producer.metadata.rating}</span>
        </div>

        <ul className={styles.reviewsList}></ul>
      </div>
    </section>
  );
}

export default ProductReviews;
