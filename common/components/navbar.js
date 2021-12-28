import React from "react";
import Link from "next/link";
import styles from "./navbar.module.scss";

export default function navbar() {
	return (
		<div className={styles.navbarContainer}>
			<div className={styles.navbarWrapper}>
				<img
					src='/assets/logo-placeholder-image.png'
					alt=''
					className={styles.logo}
				/>
				<div className={styles.linksContainer}>
					<ul>
						<Link href='/pageA'>Item A</Link>
						<Link href='/pageB'>Item B</Link>
						<Link href='/pageC'>Item C</Link>
						<Link href='/pageD'>Item D</Link>
					</ul>
				</div>
			</div>
		</div>
	);
}
