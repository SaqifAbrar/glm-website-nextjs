import React from "react";
import Layout from "./layout";
import Navbar from "../components/navbar";

function defaultTemplate(page) {
	return (
		<Layout>
			<Navbar />
			{page}
		</Layout>
	);
}

export { defaultTemplate };
