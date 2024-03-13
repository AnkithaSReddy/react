import React from 'react';
import styles from "./crud.module.css";
import { NavLink } from 'react-router-dom';
import { CiShoppingCart } from "react-icons/ci";

const NavBarFOrCrud = () => {
  return (
    <div className={styles.main}>
      <article className={styles.logo}>
        <CiShoppingCart />
      </article>
      <article className={styles.menu}>
        <NavLink className={styles.links} to="/">
          create
        </NavLink>
        <NavLink className={styles.links} to="/data">
          data
        </NavLink>
        <NavLink className={styles.links} to="/view">
          view
        </NavLink>
        <NavLink className={styles.links} to="/update">
          update
        </NavLink>
      </article>
    </div>
  );
}

export default NavBarFOrCrud