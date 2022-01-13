import React from "react";
import styles from "./memberCard.module.scss";

export default function memberCard({ imgPath, altText, name, position }) {
	return (
		<div className={styles.memberContainter}>
			<div className={styles.memberImg}>
				<img src={imgPath} alt={altText} />
			</div>
			<div className={styles.memberText}>
				<h3>{name}</h3>
				<p>{position}</p>
			</div>
		</div>
	);
}
