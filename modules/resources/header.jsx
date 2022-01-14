import React from "react";
import styles from "./header.module.scss";

export default function header() {
	return (
		<div className={styles.headerContainer}>
			<h2>Resources</h2>
			<p>Access our free resources!</p>
		</div>
	);
}
