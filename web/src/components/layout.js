import React from "react";
import "../styles/layout.css";
import * as styles from "./layout.module.css";

const Layout = ({ children, onHideNav, onShowNav, showNav, siteTitle }) => (
  <>
    <div className={styles.content}>{children}</div>
  </>
);

export default Layout;
