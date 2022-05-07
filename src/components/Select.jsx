import styles from "./styles.module.css";

function Select({
  label,
  placeholder,
  name,
  onChange,
  value,
  className,
  options = [],
}) {
  return (
    <>
      {label && <label className={styles.Label}>{label}</label>}
      <select
        name={name}
        onChange={onChange}
        value={value}
        className={`${styles.Select} ${className} ${
          !value ? styles.SelectPlaceholder : ""
        }`}
      >
        <option value="" disabled hidden>
          {placeholder}
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </>
  );
}

export default Select;
