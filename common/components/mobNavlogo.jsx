import React from "react";
import styles from "./mobileNav.module.scss"
import Burger from "./burger";

export default function MobNavLogo({open, setOpen}) {
    return (
        <div className={styles.mobNavLogo}> 
            <Burger open={open} setOpen={setOpen} />
            <div className={styles.navLogoText}><a href="/home">Greenlight Mentorship</a> </div>
        </div>
    )
}