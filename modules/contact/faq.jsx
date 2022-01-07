import React from "react";
import styles from "./faq.module.scss";
import QACard from "./qaCard";

const QAText = [
	{
		textNum: 1,
		prompt: "key",
		question: "question 1",
		answer: "answer 1",
	},
	{
		textNum: 2,
		prompt: "key",
		question: "question 2",
		answer: "answer 2",
	},
	{
		textNum: 3,
		prompt: "key",
		question: "question 3",
		answer: "answer 3",
	},
	{
		textNum: 4,
		prompt: "key",
		question: "question 4",
		answer: "answer 4",
	},
];

export default function faq() {
	return (
		<div className={styles.faqContainer}>
			<h2>Frequently Asked Questions</h2>
			{QAText.map(({ textNum, prompt, question, answer }) => {
				return (
					<QACard
						key={textNum}
						className={styles[prompt]}
						questionText={question}
						answerText={answer}
					/>
				);
			})}
		</div>
	);
}
