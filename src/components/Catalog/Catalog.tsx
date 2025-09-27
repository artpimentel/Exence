import { useRef, useState, useEffect } from "react";
import styles from "./Catalog.module.css";

import {
  IoChevronBackOutline,
  IoChevronForwardOutline,
  IoAddOutline,
} from "react-icons/io5";

import type { Producer } from "../../types/Producer";
import CatalogItem from "./CatalogItem/CatalogItem";

interface CatalogProps {
  producers: Producer[];
  title: string;
  maxItems?: number;
  itemsPerPage?: number;
  highlight?: boolean;
}

const ViewMoreItem = () => (
  <a className={styles.viewMoreItem} href="/ver-mais">
    <IoAddOutline />
  </a>
);

function Catalog({
  producers,
  title,
  maxItems,
  itemsPerPage,
  highlight = false,
}: CatalogProps) {
  maxItems = maxItems ?? (highlight ? 10 : 14);
  itemsPerPage = itemsPerPage ?? (highlight ? 4 : 5);

  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const [pageIndex, setPageIndex] = useState(0);

  const producersToShow =
    producers.length > maxItems ? producers.slice(0, maxItems) : producers;
  const hasMore = producers.length > maxItems;

  const totalItems = producersToShow.length + (hasMore ? 1 : 0);
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const scrollToPage = (page: number) => {
    if (!scrollContainerRef.current) return;

    const container = scrollContainerRef.current;
    const items = container.children;

    if (!items[0]) return;

    const firstItem = items[0] as HTMLElement;
    const itemWidth = firstItem.offsetWidth;
    const gap = 16;

    const blockWidth = itemsPerPage * itemWidth + (itemsPerPage - 1) * gap;
    const containerWidth = container.offsetWidth;

    const style = window.getComputedStyle(container);
    const paddingLeft = parseFloat(style.paddingLeft) || 0;
    const paddingRight = parseFloat(style.paddingRight) || 0;

    const startIndex = page * itemsPerPage;
    const startOffset = startIndex * (itemWidth + gap) + paddingLeft;

    const maxScroll = container.scrollWidth - containerWidth + paddingRight;

    const scrollAmount = startOffset - (containerWidth / 2 - blockWidth / 2);

    const finalScroll = Math.max(0, Math.min(scrollAmount, maxScroll));

    container.scrollTo({
      left: finalScroll,
      behavior: "smooth",
    });
  };

  const prevPage = () => setPageIndex((prev) => Math.max(prev - 1, 0));
  const nextPage = () =>
    setPageIndex((prev) => Math.min(prev + 1, totalPages - 1));

  useEffect(() => {
    scrollToPage(pageIndex);
  }, [pageIndex]);

  return (
    <section
      className={`${styles.ProducersCatalog} ${
        highlight ? styles.highlightCatalog : ""
      }`}
    >
      <h2 className={styles.catalogTitle}>{title}</h2>

      <div className={styles.catalogContent}>
        <div className={styles.catalogItens} ref={scrollContainerRef}>
          {producersToShow.map((producer) => (
            <CatalogItem
              key={producer.id}
              producer={producer}
              highlight={highlight}
            />
          ))}
          {hasMore && <ViewMoreItem />}
        </div>

        <div className={styles.controls}>
          <button
            className={styles.scrollButtonLeft}
            onClick={prevPage}
            disabled={pageIndex === 0}
          >
            <IoChevronBackOutline />
          </button>

          <button
            className={styles.scrollButtonRight}
            onClick={nextPage}
            disabled={pageIndex === totalPages - 1}
          >
            <IoChevronForwardOutline />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Catalog;
