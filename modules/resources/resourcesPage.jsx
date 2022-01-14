import React from "react";
import styles from "./resourcesPage.module.scss";

export default function resourcesPage({ page }) {
	const { id, image, imageAlt, name, eventDate, description, link } = event;
	return (
		<>
			<div className={`${styles.resourcesPageContainer}`}>
				<div className={styles.resourcesPageWrapper}>
						<ResourcesCard/>
				</div>
			</div>
		</>
	);
}