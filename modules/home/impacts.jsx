import React from "react";
import ImpactCard from "./impactCard";
import styles from "./impacts.module.scss";

export default function impacts() {
	return (
		<div className={styles.impactsContainer}>
			<div className={styles.impactsWrapper}>
				<h2>Our Impacts</h2>
				<div className={styles.cardsContainer}>
					<ImpactCard
						label={"Impact Text"}
						imgpath={"/images/card-portrait-placeholder.png"}
					/>
					<ImpactCard
						label={"Impact Text"}
						imgpath={"/images/card-portrait-placeholder.png"}
					/>
					<ImpactCard
						label={"Impact Text"}
						imgpath={"/images/card-portrait-placeholder.png"}
					/>
				</div>
			</div>
		</div>
	);
}
