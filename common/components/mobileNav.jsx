import React from "react";
import styles from "./mobileNav.module.scss";
import Link from "next/link";
import { bool } from 'prop-types';

export default function MobileNav({open}) {
    return (

        <div style={{transform: open ? 'translateX(0)' : 'translateX(-100%)'}} className={styles.mobileNav} open={open}>
            
            <ul>
                <Link href='/home'>home</Link>
                <Link href='/about'>about</Link>
                <Link href='/events'>events</Link>
                <Link href='/resources'>resources</Link>
                <Link href='/contact'>contact</Link>
            </ul>
        </div>
    );

}

MobileNav.propTypes = {
    open: bool.isRequired,
}

