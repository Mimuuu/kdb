import React from "react";

import styles from "./Spinner.module.scss";

interface Props {
  className?: string;
}

function Spinner({ className }: Props) {
  return <div className={`${styles.spinner} ${className && className}`}></div>
}

export default Spinner;
