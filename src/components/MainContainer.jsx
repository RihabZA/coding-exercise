import styles from "./styles.module.css";
import Header from "./Header";

function MainContainer({ children }) {
  document.body.style.backgroundColor = "#e8e6f1";

  return (
    <div className={styles.MainContainer}>
      <Header />
      <div className={styles.Content}>{children}</div>
    </div>
  );
}

export default MainContainer;
