import React from "react";
import styles from "./inProgress.module.scss";

export default function inProgress() {
	return (
		<div className={styles.progressContainer}>
			<div className={styles.progressImg}>
				<img src='/assets/final_logo_black.png' alt='' />
			</div>
			<div className={styles.progressInfo}>
				<h1>{`Sorry! We're working on it!`}</h1>
				<p>{`We're still building our website and we're excited to share more! In
					the meantime, take a look at the rest of our website. Thank you for
					your patience :)`}</p>
			</div>
		</div>
	);
}
