import React from "react";
import styles from "./button.module.scss";

export default function button({ label }) {
	return (
		<div className={styles.btnContainer}>
			<button>{label}</button>
		</div>
	);
}
