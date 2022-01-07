import React from "react";
import styles from "./eventCard.module.scss";

export default function eventCard({ event }) {
	const { id, image, imageAlt, name, eventDate, description, link } = event;
	const colorSet = id % 2 == 0 ? "even" : "odd";
	return (
		<>
			<div className={`${styles.eventCardContainer} ${colorSet}`}>
				<div className={styles.eventCardWrapper}>
					<div className={`${styles.eventImg} eventImage`}>
						<img src={`/images/${image}`} alt={imageAlt} />
					</div>
					<div className={styles.eventInfo}>
						<h3>{name}</h3>
						<p>{description}</p>
					</div>
				</div>
			</div>
			<style jsx>{`
				.odd {
					background-color: #eeeeee;
				}

				.odd .eventImage img {
					border-color: #ffffff;
				}

				.even {
					background-color: #d5d8cc;
				}

				.even .eventImage img {
					border-color: #9ab291;
				}
			`}</style>
		</>
	);
}
