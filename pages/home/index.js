import React from "react";
import Head from "next/head";
//import { defaultTemplate } from "../../common/layouts/templates";
import Layout from "../../common/layouts/layout";
import Navbar from "../../common/components/navbar";
import HeroBanner from "../../modules/home/heroBanner";
import Testimonies from "../../modules/home/testimonies";
import Join from "../../modules/home/join";
import Impacts from "../../modules/home/impacts";
import Socials from "../../modules/home/socials";
import styles from "../../styles/Home.module.css";
import MobileNav from "../../common/components/mobileNav";
import MobNavLogo from "../../common/components/mobNavlogo";
import { useState } from 'react'
import MobileFooter from "../../common/components/mobileFooter";

export default function Home() {

	const [open, setOpen] = useState(false);

	return (
		<div className={styles.container}>
			<Head>
				<title>Home | Green Light Mentorship</title>
				<meta name='description' content='Generated by create next app' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<MobileNav open={open} setOpen={setOpen} />
			<MobNavLogo open={open} setOpen={setOpen} />
			<HeroBanner />
			<Testimonies />
			<Join />
			<Impacts />
			<Socials />
			<MobileFooter />
		</div>
	);
}

Home.getLayout = function getLayout(page) {
	return (
		<Layout>
			<Navbar />
			{page}
			{/*<Footer />*/}
		</Layout>
	);
};
