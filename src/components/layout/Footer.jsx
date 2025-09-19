import React from 'react';
import styles from './Footer.module.css';
import githubLogo from '../../assets/images/github.png'


const Footer = () => {
    return (
        <footer className={styles.footer}>
            <p className={styles.text}>
                Build using{' '}
                <a href="https://pokeapi.co/" target="_blank" rel="noopener noreferrer" className={styles.link}>
                    PokeAPI
                </a>{' '}
                and{' '}
                <a href="https://react.dev/" target="_blank" rel="noopener noreferrer" className={styles.link}>
                    React
                </a>
            </p>

            <a href="https://github.com/jjoollbu/pokedex-project" target="_blank" rel="noopener noreferrer">
                <img src={githubLogo} alt="GitHub" className={styles.githubLogo} />
            </a>
        </footer>
    );
};

export default Footer;
