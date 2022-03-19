import React from "react";
import styles from "./mobileNav.module.scss"
import { bool, func } from 'prop-types';

const Burger = ({ open, setOpen }) => {
    return (
        <div open={open} onClick={() => setOpen(!open)} className={styles.burger}>
            <div style={{background: open ? 'black' : 'white'}} className={styles.line} />
            <div style={{background: open ? 'black' : 'white'}} className={styles.line} />
            <div style={{background: open ? 'black' : 'white'}} className={styles.line} />
        </div>
    )
}

Burger.propTypes = {
    open: bool.isRequired,
    setOpen: func.isRequired,
};

export default Burger;