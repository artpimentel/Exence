import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import styles from "./Header.module.css";

import Logo from "../../../public/ExenceLogo.svg";
import {
  IoSearchOutline,
  IoNotificationsOutline,
  IoPersonOutline,
} from "react-icons/io5";

import Dropdown from "../../components/ui/Dropdown/Dropdown";

function Header() {
  const { t, i18n } = useTranslation();

  return (
    <header className={styles.header}>
      <div className={styles.layout}>
        <Link to="/">
          <img src={Logo} alt="" className={styles.logo} />
        </Link>

        <div className={styles.searchBar}>
          <input
            type="search"
            placeholder={t("searchPlaceholder")}
            className={styles.searchInput}
          />
          <button className={styles.searchButton}>
            <IoSearchOutline />
          </button>
        </div>

        <Dropdown trigger={<button>{t("language")} 🌐</button>}>
          <ul className={styles.languagesList}>
            {[
              { code: "pt", label: " Português" },
              { code: "en", label: "🇺🇸 English" },
              { code: "es", label: "🇪🇸 Español" },
            ].map(({ code, label }) => (
              <li
                className={styles.languageOption}
                key={code}
                onClick={() => i18n.changeLanguage(code)}
              >
                {label}
              </li>
            ))}
          </ul>
        </Dropdown>

        <div className={styles.headerButtons}>
          <button className={styles.button}>
            <IoNotificationsOutline />
          </button>

          <Dropdown
            trigger={
              <button className={styles.button}>
                <IoPersonOutline />
              </button>
            }
          >
            <div className={styles.profileMenu}>
              <Link to="/signin" className={styles.dropdownItem}>
                Log-In
              </Link>
              <Link to="/login" className={styles.dropdownItem}>
                Sign-In
              </Link>
            </div>
          </Dropdown>
        </div>
      </div>
    </header>
  );
}

export default Header;
