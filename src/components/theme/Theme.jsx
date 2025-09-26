import React, { useEffect, useState } from 'react';
import styles from './Theme.module.css';
import solgaleo from '../../assets/images/solgaleo.png'
import lunala from '../../assets/images/lunala.png'



const Theme = () => {
    const [darkMode, setDarkMode] = useState(() => {
        return localStorage.getItem('theme') === 'dark';
    });

    useEffect(() => {
        if (darkMode) {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
        }
    }, [darkMode]);

    return (
        <div className={styles.themeToggle}>
            <label className={styles.toggle}>
                <input
                    type="checkbox"
                    className={styles.input}
                    checked={darkMode}
                    onChange={() => setDarkMode(!darkMode)}
                />
                <span className={styles.track}></span>
                <span className={styles.thumb}>
                    <span className={`${styles.icon} ${!darkMode && styles.visible}`}>
                        <img src={solgaleo} alt="sol" />
                    </span>
                    <span className={`${styles.icon} ${styles.img} ${darkMode && styles.visible}`}>
                        <img src={lunala} alt="lua" />
                    </span>
                </span>
            </label>
        </div>
    );
};

export default Theme;
