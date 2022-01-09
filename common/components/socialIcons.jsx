import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faFacebookSquare,
	faInstagram,
	faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import styles from "./socialIcons.module.scss";

export default function socialIcons() {
	return (
		<div className={styles.iconsContainer}>
			<div className={styles.iconsWrapper}>
				<div className={styles.icon}>
					<FontAwesomeIcon icon={faFacebookSquare} />
				</div>
				<div className={styles.icon}>
					<FontAwesomeIcon icon={faInstagram} />
				</div>
				<div className={styles.icon}>
					<FontAwesomeIcon icon={faLinkedinIn} />
				</div>
			</div>
		</div>
	);
}
