import React from "react";
import styles from "./summary.module.scss";

export default function summary() {
	return (
		<div className={styles.summaryContainer}>
			<h2>About Green Light Mentorship</h2>
			<div className={styles.summaryContent}>
				<div className={styles.summaryImg}>
					<img src='' alt='' />
				</div>
				<div className={styles.summaryInfo}>
					<p>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum
						dolore numquam voluptate saepe odio quas repudiandae maiores nihil?
						Nulla molestiae ipsa, sint recusandae dolore saepe pariatur ab
						necessitatibus tempora molestias.
					</p>
				</div>
			</div>
		</div>
	);
}
