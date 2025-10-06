import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";
import styles from "./Dropdown.module.css";

interface DropdownProps {
  trigger: ReactNode;
  children: ReactNode;
}

function Dropdown({ trigger, children }: DropdownProps) {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className={styles.dropdown} ref={dropdownRef}>
      <button
        onClick={() => setOpen((prev) => !prev)}
        className={styles.trigger}
      >
        {trigger}
      </button>
      {open && <div className={styles.menu}>{children}</div>}
    </div>
  );
}

export default Dropdown;
