import React from "react";
import styles from "./header.module.scss";

export default function header() {
	return (
		<div className={styles.headerContainer}>
			<h2>Events</h2>
			<p>Learn more about our past events & access our free resources!</p>
		</div>
	);
}
