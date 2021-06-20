import React from "react";
import styles from "./NotFoundPage.module.scss";

function NotFoundPage() {
  return (
    <div className={styles.container}>
      <p>404</p>
      <p>page doesn't exist</p>
    </div>
  );
}

export default NotFoundPage;