import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import styles from "./Header.module.css";

import Flag from "react-world-flags";
import Logo from "../../../public/ExenceLogo.svg";
import {
  IoSearchOutline,
  IoNotificationsOutline,
  IoPersonOutline,
} from "react-icons/io5";

import Dropdown from "../../components/ui/Dropdown/Dropdown";

function Header() {
  const { t, i18n } = useTranslation();

  const languages = [
    { code: "pt", label: "Português", flagCode: "BR" },
    { code: "en", label: "English", flagCode: "US" },
    { code: "es", label: "Español", flagCode: "ES" },
  ];

  const handleChangeLanguage = (lang: (typeof languages)[0]) => {
    i18n.changeLanguage(lang.code);
  };

  return (
    <header className={styles.header}>
      <div className={styles.layout}>
        <Link to="/home">
          <img src={Logo} alt="Logo" className={styles.logo} />
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

        <div className={styles.langs}>
          {languages.map((lang) => (
            <i
              key={lang.code}
              className={styles.languageOption}
              onClick={() => handleChangeLanguage(lang)}
            >
              <Flag className={styles.flagProp} code={lang.flagCode} />
            </i>
          ))}
        </div>

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
