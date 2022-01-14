import React from "react";
import styles from "./mobileNav.module.scss";
import Link from "next/link";

export default function MobileNav() {
    return (
        <div className={styles.mobileNav}>
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