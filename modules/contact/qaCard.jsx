import React from "react";

export default function qaCard({ questionText, answerText }) {
	return (
		<div className='qaContainer'>
			<button className='qaButton'>
				<span>{questionText}</span>
			</button>
			<style jsx>{`
				.qaButton:hover span {
					display: none;
				}

				.qaButton:hover::before {
					content: "${answerText}";
				}
			`}</style>
		</div>
	);
}
