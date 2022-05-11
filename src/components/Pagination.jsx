import React from "react";
import styles from "./styles.module.css";

function Pagination({ size, page, setPage, step = 3 }) {
  const pagination = [];

  if (size < step * 2 + 6) {
    for (let i = 1; i < size + 1; i++) {
      pagination.push(
        <button
          className={`${styles.Btn} ${page === i && styles.ActiveBtn}`}
          key={i}
          onClick={() => setPage(i)}
        >
          {i}
        </button>
      );
    }
  } else if (page < step * 2 + 1) {
    for (let i = 1; i < 10; i++) {
      pagination.push(
        <button
          key={i}
          className={`${styles.Btn} ${page === i && styles.ActiveBtn}`}
          onClick={() => {
            setPage(i);
          }}
        >
          {i}
        </button>
      );
    }
    pagination.push(
      <React.Fragment key={size}>
        <span>...</span>
        <button
          className={`${styles.Btn} ${page === size && styles.ActiveBtn}`}
          onClick={() => setPage(size)}
        >
          {size}
        </button>
      </React.Fragment>
    );
  } else if (page > size - step * 2) {
    pagination.push(
      <React.Fragment key={1}>
        <button
          className={`${styles.Btn} ${page === 1 && styles.ActiveBtn}`}
          onClick={() => setPage(1)}
        >
          1
        </button>
        <span>...</span>
      </React.Fragment>
    );
    for (let i = size - 8; i < size + 1; i++) {
      pagination.push(
        <button
          key={i}
          className={`${styles.Btn} ${page === i && styles.ActiveBtn}`}
          onClick={() => setPage(i)}
        >
          {i}
        </button>
      );
    }
  } else {
    pagination.push(
      <React.Fragment key={1}>
        <button
          className={`${styles.Btn} ${page === 1 && styles.ActiveBtn}`}
          onClick={() => setPage(1)}
        >
          1
        </button>
        <span>...</span>
      </React.Fragment>
    );
    for (let i = page - 3; i < page + 4; i++) {
      pagination.push(
        <button
          key={i}
          className={`${styles.Btn} ${page === i && styles.ActiveBtn}`}
          onClick={() => setPage(i)}
        >
          {i}
        </button>
      );
    }
    pagination.push(
      <React.Fragment key={size}>
        <span>...</span>
        <button
          className={`${styles.Btn} ${page === size && styles.ActiveBtn}`}
          onClick={() => setPage(size)}
        >
          {size}
        </button>
      </React.Fragment>
    );
  }

  return (
    <div className={styles.PaginationSection}>
      <button
        className={styles.Btn}
        disabled={page === 1}
        onClick={() => setPage(page - 1)}
      >
        {">"}
      </button>
      {pagination}
      <button
        className={styles.Btn}
        disabled={page === size}
        onClick={() => setPage(page + 1)}
      >
        {">"}
      </button>
    </div>
  );
}

export default Pagination;
