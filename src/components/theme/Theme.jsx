import React from "react";
import styles from "./Theme.module.css";
import solgaleo from "../../assets/images/solgaleo.png";
import lunala from "../../assets/images/lunala.png";
import { useTheme } from "../../hooks/useTheme";

const Theme = () => {
  const { theme, toggleTheme } = useTheme();
  const darkMode = theme === "dark";

  return (
    <div className={styles.themeToggle}>
      <label className={styles.toggle}>
        <input
          type="checkbox"
          className={styles.input}
          checked={darkMode}
          onChange={toggleTheme}
        />
        <span className={styles.track}></span>
        <span className={styles.thumb}>
          <span className={`${styles.icon} ${!darkMode && styles.visible}`}>
            <img src={solgaleo} alt="sol" />
          </span>
          <span
            className={`${styles.icon} ${styles.img} ${
              darkMode && styles.visible
            }`}
          >
            <img src={lunala} alt="lua" />
          </span>
        </span>
      </label>
    </div>
  );
};

export default Theme;
