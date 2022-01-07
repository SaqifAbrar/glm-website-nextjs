import React from "react";
import styles from "./team.module.scss";
import MemberCard from "./memberCard";

export default function team() {
	return (
		<div className={styles.teamContainer}>
			<h2>Our Team</h2>
			<div className={styles.membersContainer}>
				<MemberCard
					imgPath={"/images/profile-icon-one-ratio-placeholder.png"}
					altText={""}
					name={"name"}
					position={"position"}
				/>
				<MemberCard
					imgPath={"/images/profile-icon-one-ratio-placeholder.png"}
					altText={""}
					name={"name"}
					position={"position"}
				/>
				<MemberCard
					imgPath={"/images/profile-icon-one-ratio-placeholder.png"}
					altText={""}
					name={"name"}
					position={"position"}
				/>
				<MemberCard
					imgPath={"/images/profile-icon-one-ratio-placeholder.png"}
					altText={""}
					name={"name"}
					position={"position"}
				/>
				<MemberCard
					imgPath={"/images/profile-icon-one-ratio-placeholder.png"}
					altText={""}
					name={"name"}
					position={"position"}
				/>
				<MemberCard
					imgPath={"/images/profile-icon-one-ratio-placeholder.png"}
					altText={""}
					name={"name"}
					position={"position"}
				/>
				<MemberCard
					imgPath={"/images/profile-icon-one-ratio-placeholder.png"}
					altText={""}
					name={"name"}
					position={"position"}
				/>
			</div>
		</div>
	);
}

{
	/*
	<img src='/images/profile-icon-one-ratio-placeholder.png' alt='' />
	<img src='/images/profile-icon-one-ratio-placeholder.png' alt='' />
	<img src='/images/profile-icon-one-ratio-placeholder.png' alt='' />
	<img src='/images/profile-icon-one-ratio-placeholder.png' alt='' />
	<img src='/images/profile-icon-one-ratio-placeholder.png' alt='' />
	<img src='/images/profile-icon-one-ratio-placeholder.png' alt='' />
	<img src='/images/profile-icon-one-ratio-placeholder.png' alt='' />
	<img src='/images/profile-icon-one-ratio-placeholder.png' alt='' />
	<img src='/images/profile-icon-one-ratio-placeholder.png' alt='' />
	<img src='/images/profile-icon-one-ratio-placeholder.png' alt='' /> */
}
