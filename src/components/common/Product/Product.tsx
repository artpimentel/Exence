import { useState } from "react";
import { Link } from "react-router-dom";

import styles from "./Product.module.css";
import { GrLocation } from "react-icons/gr";
import { BiIdCard } from "react-icons/bi";

import type { Producer } from "../../../types/Producer";

interface ProductProps {
  producer: Producer;
  variant?: "row" | "highlight" | undefined;
}

function Product({ producer, variant }: ProductProps) {
  const [open, setOpen] = useState(false);
  const values = producer.services || [];
  return (
    <li
      className={`${styles.product} 
        ${variant === "highlight" ? styles.highlight : ""} 
        ${variant === "row" ? styles.row : ""}`}
    >
      <Link to={`/product/${producer.id}`} className={styles.productLink}>
        <img
          className={styles.producerImage}
          src={producer.profile.images[0]}
          alt=""
        />

        <div className={styles.itemInfo}>
          <div className={styles.infoHeader}>
            <h3 className={styles.producerName}>{producer.profile.name}</h3>
            <span
              className={`${styles.productLoc} 
                ${variant === undefined ? styles.hidden : ""}`}
            >
              {producer.local.city}
            </span>
            <span
              className={`${styles.productDesc} 
                ${variant !== undefined ? styles.hidden : ""}`}
            >
              {producer.profile.description}
            </span>
          </div>
          <div
            className={`${styles.infoContent} 
                ${variant !== undefined ? styles.hidden : ""}`}
          >
            <div className={styles.infoValue}>
              <div className={styles.dropdown}>
                <button
                  type="button"
                  className={styles.dropdownButton}
                  onClick={(e) => {
                    e.preventDefault();
                    setOpen(!open);
                  }}
                >
                  Valores ▾
                </button>
                {open && (
                  <ul className={styles.dropdownMenu}>
                    {values.map((item, idx) => (
                      <li key={idx} className={styles.dropdownItem}>
                        {item.price} - {item.duration}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>

            <span className={styles.defaultInfo}>
              <span>
                <BiIdCard />
              </span>
              {producer.profile.age} anos
            </span>
            <span className={styles.defaultInfo}>
              <span>
                <GrLocation />
              </span>
              {producer.local.neighborhood}
            </span>
          </div>
        </div>
      </Link>
    </li>
  );
}

export default Product;
