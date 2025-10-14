import styles from "./ProductInfo.module.css";

import { FaRegHeart } from "react-icons/fa6";
import { TbCoinFilled } from "react-icons/tb";
import { HiLocationMarker } from "react-icons/hi";
import { TbHomeCheck, TbHomeX } from "react-icons/tb";
import { FaHeart } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";

import { FaWhatsapp, FaInstagram, FaTelegram } from "react-icons/fa6";

import type { Producer } from "../../types/Producer";
import ValueDropdown from "../ui/ValueDropdown/ValueDropdown";
import ScrollTo from "../../utils/ScrollTo";

interface ProductInfosProps {
  producer: Producer;
}

function ProductInfo({ producer }: ProductInfosProps) {
  return (
    <div className={styles.productInfos}>
      <div className={styles.contactsOptions}>
        <div className={styles.contactsLayout}>
          {producer.contact.phone && (
            <a
              href={`https://wa.me/${producer.contact.phone}`}
              className={`${styles.contactButton} ${styles.whatsapp}`}
            >
              <FaWhatsapp />
            </a>
          )}
          {producer.contact.telegram && (
            <a
              href={`https://t.me/${producer.contact.telegram}`}
              className={`${styles.contactButton} ${styles.telegram}`}
            >
              <FaTelegram />{" "}
            </a>
          )}
          {producer.contact.instagram && (
            <a
              href={`https://www.instagram.com/${producer.contact.instagram}`}
              className={`${styles.contactButton} ${styles.instagram}`}
            >
              <FaInstagram />
            </a>
          )}
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.productHeader}>
          <div className={styles.productHighlight}>
            <h1 className={styles.productName}>{producer.profile.name}</h1>
            <p className={styles.productSlogan}>"{producer.profile.slogan}"</p>
          </div>
          <button className={styles.favoriteButton}>
            <FaRegHeart />
          </button>
        </div>

        <div className={styles.infoContent}>
          <button
            className={styles.infoCard}
            onClick={() => ScrollTo("reviews", { center: true })}
          >
            <div className={styles.cardHeader}>
              <h2>
                <span>
                  <FaHeart />
                </span>
                {producer.reviews?.length} Avaliações
              </h2>
              <IoIosArrowDown />
            </div>
          </button>
          <button
            className={styles.infoCard}
            onClick={() => ScrollTo("values", { center: true })}
          >
            <div className={styles.cardHeader}>
              <h2>
                <span>
                  <TbCoinFilled />
                </span>
                Valores
              </h2>
              <IoIosArrowDown />
            </div>
            <ValueDropdown key={producer.id} producer={producer} />
          </button>
          <button
            className={styles.infoCard}
            onClick={() => ScrollTo("location", { center: true })}
          >
            <div className={styles.cardHeader}>
              <h2>
                <span>
                  <HiLocationMarker />
                </span>
                Localização
              </h2>
              <IoIosArrowDown />
            </div>
            <div className={styles.local}>
              <strong className={styles.neighborhood}>
                {producer.locality.neighborhood}
              </strong>
              <span className={styles.localExtra}>
                {producer.locality.city} - {producer.locality.state}
              </span>
              <span className={styles.hasLocal}>
                {producer.locality.hasLocal ? (
                  <>
                    <span>
                      <TbHomeCheck />
                    </span>
                    com local
                  </>
                ) : (
                  <>
                    <span>
                      <TbHomeX />
                    </span>
                    sem local
                  </>
                )}
              </span>
            </div>
          </button>
        </div>

        <button className={styles.seeMoreButton}>Veja Mais</button>

        <div className={styles.productSpecifies}>
          <ul className={styles.specifiesList}>
            {Object.entries(producer.appearance).map(([key, value]) => (
              <li key={key} className={styles.specify}>
                <strong>{key}:</strong> {value}
              </li>
            ))}
          </ul>
          <div className={styles.extraContent}>
            <a href=""></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductInfo;
