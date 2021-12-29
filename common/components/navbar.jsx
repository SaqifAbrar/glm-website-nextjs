import React from "react";
import Link from "next/link";
import styles from "./navbar.module.scss";

export default function navbar() {
	return (
		<div className={styles.navbarContainer}>
			<div className={styles.navbarWrapper}>
				<img
					src='/assets/final_logo_white.png'
					alt=''
					className={styles.logo}
				/>
				<div className={styles.linksContainer}>
					<ul>
						<Link href='/home'>home</Link>
						<Link href='/about'>about</Link>
						<Link href='/resources'>resources</Link>
						<Link href='/contact'>contact</Link>
					</ul>
				</div>
			</div>
		</div>
	);
}
