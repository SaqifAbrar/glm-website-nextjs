import React from "react";
import Image from "next/image";
import styles from "./featured.module.scss";

export default function featured() {
	return (
		<div className={styles.featuredContainer}>
			<h2>As Featured In</h2>
			<div className={styles.featuredIcons}>
				<div className={styles.featuredIcon}>
					<Image
						src='/images/profile-icon-placeholder.png'
						layout='fill'
						objectFit='contain'
						className='rounded-full'
						alt=''
					/>
				</div>
				<div className={styles.featuredIcon}>
					<Image
						src='/images/profile-icon-placeholder.png'
						layout='fill'
						objectFit='contain'
						className='rounded-full'
						alt=''
					/>
				</div>
			</div>
		</div>
	);
}
