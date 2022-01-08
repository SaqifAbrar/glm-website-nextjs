import React from "react";
import Button from "../../common/components/button";
import styles from "./join.module.scss";

export default function join() {
	const isOpen = true;

	return (
		<div className={styles.joinContainer}>
			<div className={styles.joinWrapper}>
				<div className={styles.joinImg}>
					<img src='/images/join-clipart-cropped-img.png' alt='' />
				</div>
				<div className={styles.joinContent}>
					<h2>Join Green Light Mentorship Today!</h2>
					<div className={styles.signContainer}>
						<Button label={"Mentor Sign Up"} />
						<Button label={"Mentee Sign Up"} />
						{/*() => {
							return isOpen ? (
								<>
									<Button label={"Mentor Sign Up"} />
									<Button label={"Mentee Sign Up"} />
								</>
							) : (
								<h3>Mentor/Mentee Sign Up Coming Soon!</h3>
							);
						}*/}
					</div>
				</div>
			</div>
		</div>
	);
}
