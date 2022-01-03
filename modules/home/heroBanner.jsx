import React from "react";
import styles from "./heroBanner.module.scss";

export default function heroBanner() {
	return (
		<div className={styles.heroContainer}>
			<div className={styles.heroWrapper}>
				<div className={styles.backgroundContainer}>
					<img
						src='/images/hero-banner-img.png'
						alt=''
						className='backgroundImg'
					/>
				</div>
				<div className={styles.fadeContainer}></div>
				<div className={styles.contentContainer}>
					<div className={styles.heroImg}>
						<img src='/assets/final_logo_white.png' alt='' />
					</div>
					<div className={styles.heroText}>
						<h1>A mentorship program for students, by students. </h1>
						<p>
							Green Light Mentorship is Green Light is a mentorship program
							based in Ontario, Canada, that pairs high school students with a
							Canadian university student mentor based on their interests,
							academic course needs and post-secondary program choice.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
