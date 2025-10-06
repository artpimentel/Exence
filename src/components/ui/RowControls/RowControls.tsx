import styles from "./RowControls.module.css";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";

interface RowControlsProps {
  pageIndex: number;
  totalPages: number;
  prevPage: () => void;
  nextPage: () => void;
}

function RowControls({
  pageIndex,
  totalPages,
  prevPage,
  nextPage,
}: RowControlsProps) {
  return (
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
  );
}

export default RowControls;
