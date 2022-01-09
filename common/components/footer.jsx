import React from "react";
import styles from "./footer.module.scss";
import SocialIcons from "./socialIcons";

export default function footer() {
	return (
		<div className={styles.footerContainer}>
			<div className={styles.footerWrapper}>
				<h1>Green Light Mentorship</h1>
				<hr />
				<p>greenlightmentorship@gmail.com</p>
				{/*<div className={styles.footerSocials}>
          <SocialIcons />
  </div>*/}
			</div>
		</div>
	);
}
