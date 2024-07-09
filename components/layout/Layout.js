import React from "react";
import Link from "next/link";
import styles from "./Layout.module.css";

const Layout = ({ children }) => {
  return (
    <>
      <header className={styles.header}>
        <Link href="/">
          <h2>CHAOSCAR</h2>
          <p>find your car</p>
        </Link>
      </header>
      <div className={styles.container}>{children}</div>
      <footer className={styles.footer}>
        developed by Chaos || nextjs app
      </footer>
    </>
  );
};

export default Layout;
