import React from "react";
import Layout from "../../common/layouts/layout";
import Navbar from "../../common/components/navbar";
import InProgress from "../../common/components/inProgress";

export default function index() {
	return (
		<div>
			<InProgress />
		</div>
	);
}

index.getLayout = function getLayout(page) {
	return (
		<Layout>
			<Navbar />
			{page}
			{/*<Footer />*/}
		</Layout>
	);
};
