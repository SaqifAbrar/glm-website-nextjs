import React from "react";
import resourcesPage from "./resourcesPage";
import Events from "./resources.json";
import styles from "./resourcesSection.module.scss";

export default function resourcesSection() {
	return (
		<div className={styles.resourcesContainer}>
			{Resources.map((event) => {
				return <ResourcesPage key={event.id} event={event} />;
			})}
		</div>
	);
}
