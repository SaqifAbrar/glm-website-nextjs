import React from "react";
import SocialIcons from "../../common/components/socialIcons";
import styles from "./socials.module.scss";

export default function socials() {
	return (
		<div className={styles.socialsContainer}>
			<div className={styles.socialsWrapper}>
				<h2>Stay up to date with all things Green Light!</h2>
				<SocialIcons />
			</div>
		</div>
	);
}
