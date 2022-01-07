import React from "react";
import QACard from "./qaCard";
import styles from "./faq.module.scss";

const qaText = [
	{
		textNum: 1,
		prompt: "reach",
		question:
			"My mentor/mentee has not reached out to me, even though I emailed them. What should I do?",
		answer:
			"Dorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum optio, reiciendis, rerum et suscipit perspiciatis neque aspernatur autem repellat enim asperiores ipsum explicabo ut non quo minima! Illo, pariatur ducimus",
	},
	{
		textNum: 2,
		prompt: "paired",
		question:
			"As a mentor / mentee, can I be paired up with more than one person? If I do, what should I do?",
		answer:
			"Dorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum optio, reiciendis, rerum et suscipit perspiciatis neque aspernatur autem repellat enim asperiores ipsum explicabo ut non quo minima! Illo, pariatur ducimus",
	},
	{
		textNum: 3,
		prompt: "approach",
		question:
			"How should I approach my mentee/mentor? How do I initiate a conversation?",
		answer:
			"Dorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum optio, reiciendis, rerum et suscipit perspiciatis neque aspernatur autem repellat enim asperiores ipsum explicabo ut non quo minima! Illo, pariatur ducimus",
	},
	{
		textNum: 4,
		prompt: "program",
		question:
			"What should I do if my mentor/mentee is not in the program or field of interest I stated in my form?",
		answer:
			"Dorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum optio, reiciendis, rerum et suscipit perspiciatis neque aspernatur autem repellat enim asperiores ipsum explicabo ut non quo minima! Illo, pariatur ducimus",
	},
];

export default function faq() {
	return (
		<div className={styles.faqContainer}>
			<h2>Frequently Asked Questions</h2>
			<div className={styles.qaContainer}>
				{qaText.map(({ textNum, prompt, question, answer }) => {
					return (
						<QACard
							key={textNum}
							prompt={prompt}
							questionText={question}
							answerText={answer}
						/>
					);
				})}
			</div>
		</div>
	);
}
