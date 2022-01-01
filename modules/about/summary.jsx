import React from "react";
import Image from "next/image";
import styles from "./summary.module.scss";

export default function summary() {
	return (
		<div className={styles.summaryContainer}>
			<h2>About Green Light Mentorship</h2>
			<div className={styles.summaryContent}>
				<div className={styles.summaryImg}>
					<Image
						src='/images/profile-icon-placeholder.png'
						layout='fill'
						objectFit='contain'
						className='rounded-full'
						alt=''
					/>
				</div>
				<div className={styles.summaryInfo}>
					<p>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum
						dolore numquam voluptate saepe odio quas repudiandae maiores nihil?
						Nulla molestiae ipsa, sint recusandae dolore saepe pariatur ab
						necessitatibus tempora molestias. Lorem ipsum dolor sit amet,
						consectetur adipisicing elit. Voluptatem autem, ut modi facilis
						maxime dolorem. Accusamus vero earum excepturi dicta autem deleniti.
						Exercitationem perferendis, voluptates tenetur molestiae voluptatem
						eum repudiandae.
					</p>
				</div>
			</div>
		</div>
	);
}
