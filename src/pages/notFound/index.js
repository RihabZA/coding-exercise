import styles from "./styles.module.css";

function NotFound() {
  return (
    <div className={styles.Container}>
      <p className={styles.ErrorText}>404</p>
      <p>Page Not Found</p>
    </div>
  );
}

export default NotFound;
