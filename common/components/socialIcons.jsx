import React from "react";
import styles from "./socialIcons.module.scss";

export default function socialIcons() {
	return (
		<div className={styles.iconsContainer}>
			<div className={styles.iconsWrapper}>
				<a href="https://www.linkedin.com/company/green-light-mentorship">
					<img src='https://img.icons8.com/ios-glyphs/480/000000/instagram-new.png' alt='' />
				</a>
				<a href="https://www.facebook.com/groups/2756758987775148/">
					<img src='https://img.icons8.com/ios-glyphs/480/000000/facebook-new.png' alt='' />
				</a>
				<a href="https://www.linkedin.com/company/green-light-mentorship">
					<img src='https://img.icons8.com/ios-glyphs/480/000000/linkedin.png' alt='' />
				</a>
			</div>
		</div>
	);
}
