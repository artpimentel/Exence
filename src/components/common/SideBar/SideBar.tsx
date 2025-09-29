import styles from "./SideBar.module.css";

interface FilterOption {
  category: string;
  options: string[];
}

interface SideBarProps {
  filters: FilterOption[];
  selectedFilters: Record<string, string[]>;
  onToggleFilter: (category: string, option: string) => void;
}

function SideBar({ filters, selectedFilters, onToggleFilter }: SideBarProps) {
  return (
    <aside className={styles.layout}>
      {filters.map((filterGroup) => (
        <div key={filterGroup.category} className={styles.filterSection}>
          <span>{filterGroup.category}</span>
          <ul className={styles.filterOptionsList}>
            {filterGroup.options.map((option) => {
              const checked =
                selectedFilters[filterGroup.category]?.includes(option) ||
                false;

              return (
                <li key={option} className={styles.filterOption}>
                  <label className={styles.filterLabel}>
                    <input
                      type="checkbox"
                      name={filterGroup.category}
                      value={option}
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
    </aside>
  );
}

export default SideBar;
