import React from "react";
import styles from "./impactCard.module.scss";

export default function impactCard({ label, imgpath }) {
	return (
		<div className={styles.impactCardContainer}>
			<div className={styles.imapctCardWrapper}>
				<h3>{label}</h3>
				<div className={styles.impactCardImg}>
					<img src={imgpath} alt='' />
				</div>
			</div>
		</div>
	);
}
