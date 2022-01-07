import React from "react";
import styles from "./qaCard.module.scss";

export default function qaCard({ prompt, questionText, answerText }) {
	return (
		<div className='qaContainer'>
			<button className={`${styles[prompt]} qaButton`}>
				<span>{questionText}</span>
			</button>
			<style jsx>{`
				.qaButton {
					padding: 10% 5%;
					border-radius: 20px;
				}

				.qaButton span {
					color: #ffffff;
				}

				.qaButton:hover span {
					display: none;
					font-family: "Lato", sans-serif;
					font-size: 1.6vw;
				}

				.qaButton:hover::before {
					content: "${answerText}";
				}
			`}</style>
		</div>
	);
}
