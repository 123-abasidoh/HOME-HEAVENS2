import React from "react";
import { Link } from "react-router-dom";
Link;
export const Error = () => {
	return (
		<div className="flex flex-col gap-10 justify-center items-center bg-neutral-100 w-full h-[100vh] ">
			<h1 className="text-7xl tracking-wide text-neutral-300">404 </h1>
			<h1 className="text-4xl tracking-wide text-neutral-300">page not found </h1>
			<Link to="/" className="border uppercase bg-black text-white py-2 px-5 rounded-md">home</Link>
		</div>
	);
};
