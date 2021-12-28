import React from "react";
import Layout from "./layout";
import Navbar from "../components/navbar";

export function navbar(page) {
	return (
		<Layout>
			<Navbar />
			{page}
		</Layout>
	);
}
