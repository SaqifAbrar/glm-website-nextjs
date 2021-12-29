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
						<h1>Hero Banner</h1>
						<p>
							Lorem ipsum dolor, sit amet consectetur adipisicing elit.
							Voluptates commodi, doloremque libero cupiditate eos eum ipsum
							dolorum quas quis inventore numquam modi et autem sed fuga quasi
							odio neque voluptatibus.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
