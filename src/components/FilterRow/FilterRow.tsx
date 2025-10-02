import styles from "./FilterRow.module.css";

interface FilterOption {
  category: string;
  options: string[];
}

interface FilterRowProps {
  filters: FilterOption[];
  selectedFilters: Record<string, string[]>;
  onToggleFilter: (category: string, option: string) => void;
}

function FilterRow({
  filters,
  selectedFilters,
  onToggleFilter,
}: FilterRowProps) {
  return (
    <div className={styles.filterRow}>
      <div className={styles.layout}>
        {filters.map((filterGroup) => (
          <div key={filterGroup.category} className={styles.filterGroup}>
            <button className={styles.dropdownButton}>
              {filterGroup.category}
            </button>

            <ul className={styles.dropdownList}>
              {filterGroup.options.map((option) => {
                const checked =
                  selectedFilters[filterGroup.category]?.includes(option) ||
                  false;

                return (
                  <li key={option} className={styles.dropdownOption}>
                    <label>
                      <input
                        type="checkbox"
                        checked={checked}
                        onChange={() =>
                          onToggleFilter(filterGroup.category, option)
                        }
                      />
                      {option}
                    </label>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FilterRow;
