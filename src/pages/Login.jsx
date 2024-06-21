import React from "react";
// import Navbar from "../src/components/Navbar";

const Login = () => {
	return (
		<div className="login flex justify-center  bg-no-repeat py-4 ">
			{" "}
			<form action="" className="flex flex-col gap-10 items-center justify-center backdrop-blur-lg border border-neutral-500 w-[400px] p-10 rounded-lg shadow-lg shadow-gray-400">
				<h2 className="text-3xl text-white tracking-wide">LOGIN</h2>
				<input type="text" name="" id="" placeholder="username" required />
				<input type="email" name="" id="" placeholder="email" required/>
				<input type="password" name="" id="" placeholder="password" required/>
				<input type="submit"  value="submit" className="text-nuetral-300" />
			</form>
		</div>
	);
};

export default Login;
