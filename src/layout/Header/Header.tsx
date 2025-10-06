import { useState, useRef, useEffect } from "react";

import styles from "./Header.module.css";

import Logo from "../../../public/ExenceLogo.svg";
import {
  IoSearchOutline,
  IoNotificationsOutline,
  IoPersonOutline,
} from "react-icons/io5";

import { Link } from "react-router-dom";

function Header() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles.layout}>
        <Link to="/">
          <img src={Logo} alt="" className={styles.logo} />
        </Link>

        <div className={styles.searchBar}>
          <input
            type="search"
            placeholder="Pesquisa..."
            className={styles.searchInput}
          />
          <button className={styles.searchButton}>
            <IoSearchOutline />
          </button>
        </div>

        <div className={styles.headerButtons}>
          <button className={styles.button}>
            <IoNotificationsOutline />
          </button>

          <div className={styles.profileDropdown} ref={dropdownRef}>
            <button
              className={styles.button}
              onClick={() => setDropdownOpen((prev) => !prev)}
            >
              <IoPersonOutline />
            </button>
            {dropdownOpen && (
              <div className={styles.dropdownMenu}>
                <Link to="/signin" className={styles.dropdownItem}>
                  Log-In
                </Link>
                <Link to="/login" className={styles.dropdownItem}>
                  Sign-In
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
