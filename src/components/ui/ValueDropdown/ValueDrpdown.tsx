import { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";

import styles from "./ValueDropdown.module.css";
import { IoIosArrowDown } from "react-icons/io";

import type { Producer } from "../../../types/Producer";

interface ValueDropdownProps {
  producer: Producer;
}

function ValueDropdown({ producer }: ValueDropdownProps) {
  const [open, setOpen] = useState(false);

  const [dropdownPos, setDropdownPos] = useState({ top: 0, left: 0 });
  const values = producer.services || [];

  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const dropdownRef = useRef<HTMLUListElement | null>(null);

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
  );
}

export default ValueDropdown;
