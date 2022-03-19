import React from "react";
import styles from "./testimonies.module.scss";

export default function testimonies() {
	return (
		<div className={styles.testimoniesContainer}>
			
			<div className={styles.photoWrapper}>
				<img />
			</div> 
			<div className={styles.photoText}>“Green Light is an amazing organization” <br></br> - Lauren</div>
		</div>
	);
}
