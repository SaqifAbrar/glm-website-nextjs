import React from "react";
import EventCard from "./eventCard";
import Events from "../../public/assets/content/events.json";
import styles from "./eventSection.module.scss";

export default function eventSection() {
	return (
		<div className={styles.eventsContainer}>
			{Events.map((event) => {
				return <EventCard key={event.id} event={event} />;
			})}
		</div>
	);
}
