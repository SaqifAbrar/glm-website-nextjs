import React from "react";
import styles from "./mobileFooter.module.scss"

export default function MobileFooter() {
    return (
        <div className={styles.mobFooter}>
            Greenlight Mentorship © 2022
            <br></br><a href="mailto:greenlightmentorship@gmail.com">greenlightmentorship@gmail.com</a>
        </div>
    )
}