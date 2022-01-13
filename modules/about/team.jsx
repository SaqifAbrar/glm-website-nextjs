import React from "react";
import MemberCard from "./memberCard";
import Members from "../../public/assets/content/members.json";
import styles from "./team.module.scss";

export default function team() {
	return (
		<div className={styles.teamContainer}>
			<h2>Our Team</h2>
			<div className={styles.membersContainer}>
				{Members.map(({ id, name, position, image }) => {
					return (
						<MemberCard
							key={id}
							imgPath={
								image
									? `/images/members/${image}`
									: `/images/profile-icon-one-ratio-placeholder.png`
							}
							altText={""}
							name={name}
							position={position}
						/>
					);
				})}
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

{
	/*
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
	/> */
}
