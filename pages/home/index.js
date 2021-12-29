import React from "react";
import Head from "next/head";
//import { defaultTemplate } from "../../common/layouts/templates";
import Layout from "../../common/layouts/layout";
import Navbar from "../../common/components/navbar";
import HeroBanner from "../../modules/home/heroBanner";
import styles from "../../styles/Home.module.css";

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Create Next App</title>
				<meta name='description' content='Generated by create next app' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<HeroBanner />
		</div>
	);
}

Home.getLayout = function getLayout(page) {
	return (
		<Layout>
			<Navbar />
			{page}
		</Layout>
	);
};