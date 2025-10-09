import React from "react";
import styles from "./Header.module.css";
import pokemonLogo from "../../assets/images/international_Pokémon_logo.svg.png";
import githubLogoLight from "../../assets/images/github.png";
import githubLogoDark from "../../assets/images/github_dark.png";
import { useTheme } from "../../hooks/useTheme";
import Theme from "../theme/Theme";


const Header = () => {
  const { theme } = useTheme();
  const darkMode = theme === "dark";

  return (
    <header className={styles.header}>
      <Theme />
      <img src={pokemonLogo} alt="Pokemon Logo" className={styles.logo} />
      <a
        href="https://github.com/jjoollbu/pokedex-project"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={darkMode ? githubLogoDark : githubLogoLight}
          alt="GitHub"
          className={styles.logoSmall}
        />
      </a>
    </header>
  );
};

export default Header;
