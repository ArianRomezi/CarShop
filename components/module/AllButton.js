import React from "react";
import styles from "./AllButoon.module.css";
import Link from "next/link";

const AllButton = () => {
  return (
    <div className={styles.container}>
      <Link href="/cars">See All Cars</Link>
    </div>
  );
};

export default AllButton;
