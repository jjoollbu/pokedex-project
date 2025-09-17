import React from 'react';
import styles from './Header.module.css';
import pokemonLogo from '../../assets/images/international_Pokémon_logo.svg.png';
import githubLogo from '../../assets/images/github.png';

const Header = () => {
    return (
        <header className={styles.header}>
            <img src="" alt="" />
            <img src={pokemonLogo} alt="Pokemon Logo" className={styles.logo} />
            <a href="https://github.com/jjoollbu/pokedex-project" target="_blank" rel="noopener noreferrer">
                <img src={githubLogo} alt="GitHub" className={styles.logoSmall} />
            </a>
        </header>
    );
};

export default Header;
