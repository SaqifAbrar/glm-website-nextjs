import React from "react";
import Head from "next/head";
import Layout from "../../common/layouts/layout";
import Navbar from "../../common/components/navbar";
import Footer from "../../common/components/footer";
import Faq from "../../modules/contact/faq";

export default function index() {
	return (
		<div>
			<Head>
				<title>Contact Us | Green Light Mentorship</title>
				<meta name='description' content='Generated by create next app' />
			</Head>

			<Faq />
		</div>
	);
}

index.getLayout = function getLayout(page) {
	return (
		<Layout>
			<Navbar />
			{page}
			<Footer />
		</Layout>
	);
};
