import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { createPortal } from "react-dom";

import styles from "./Product.module.css";
import { GrLocation } from "react-icons/gr";
import { BiIdCard } from "react-icons/bi";
import { IoIosArrowDown } from "react-icons/io";
import { TbHomeCheck, TbHomeX } from "react-icons/tb";
import { FaHeart } from "react-icons/fa6";

import type { Producer } from "../../../types/Producer";

interface ProductProps {
  producer: Producer;
  variant?: "row" | "highlight" | undefined;
}

function Product({ producer, variant }: ProductProps) {
  const [open, setOpen] = useState(false);
  const [dropdownPos, setDropdownPos] = useState({ top: 0, left: 0 });
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const dropdownRef = useRef<HTMLUListElement | null>(null);
  const values = producer.services || [];

  useEffect(() => {
    if (open && buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      setDropdownPos({
        top: rect.bottom + window.scrollY,
        left: rect.left + window.scrollX,
      });
    }
  }, [open]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        open &&
        buttonRef.current &&
        dropdownRef.current &&
        !buttonRef.current.contains(event.target as Node) &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

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
              className={`${styles.productLoc} ${
                variant === undefined ? styles.hidden : ""
              }`}
            >
              {producer.local.city}
            </span>
            <span
              className={`${styles.productSlogan} ${
                variant !== undefined ? styles.hidden : ""
              }`}
            >
              {producer.profile.slogan}
            </span>
          </div>

          <div
            className={`${styles.infoContent} ${
              variant !== undefined ? styles.hidden : ""
            }`}
          >
            <div className={styles.valueDropdown}>
              <button
                ref={buttonRef}
                type="button"
                className={styles.dropdownButton}
                onClick={(e) => {
                  e.preventDefault();
                  setOpen(!open);
                }}
              >
                A partir de:
                <span>
                  {producer.services?.[0]
                    ? `R$ ${producer.services[0].price} - ${producer.services[0].duration}`
                    : "Consultar"}
                  <IoIosArrowDown />
                </span>
              </button>

              {open &&
                createPortal(
                  <ul
                    ref={dropdownRef}
                    className={styles.dropdownMenu}
                    style={{
                      position: "absolute",
                      top: dropdownPos.top,
                      left: dropdownPos.left,
                      zIndex: 9999,
                    }}
                  >
                    {values.map((item, idx) => (
                      <li key={idx} className={styles.dropdownItem}>
                        <span>R$ {item.price}</span> - {item.duration}
                      </li>
                    ))}
                  </ul>,
                  document.body
                )}
            </div>

            <span className={styles.rating}>
              <span>
                <FaHeart />
              </span>
              {producer.metadata.reviewsCount} avaliações
            </span>

            <span className={styles.defaultInfo}>
              <span>
                <BiIdCard />
              </span>
              {producer.profile.age} anos
            </span>
            <span className={styles.defaultInfo}>
              {producer.local.hasLocal ? (
                <>
                  <span>
                    <TbHomeCheck />
                  </span>
                  Possui local
                </>
              ) : (
                <>
                  <span>
                    <TbHomeX />
                  </span>
                  Não possui local
                </>
              )}
            </span>
            <span className={styles.defaultInfo}>
              <span>
                <GrLocation />
              </span>
              {producer.local.city}, {producer.local.neighborhood}
            </span>
          </div>
        </div>
      </Link>
    </li>
  );
}

export default Product;
