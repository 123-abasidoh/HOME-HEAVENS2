import React from "react";
// import { useForm } from "react-hook-form";

const Signin = () => {
	
	return (
		<div>
			{" "}
			<div className="login flex justify-center items-center bg-no-repeat py-4 h-[100vh] ">
				{" "}
				<form
					action=""
					className="flex flex-col gap-4 items-center justify-center backdrop-blur-lg border border-neutral-500 w-[400px] lg:w-[500px] md:w-[500px]  p-10 rounded-lg shadow-lg shadow-gray-400"
				>
					<h2 className="text-3xl text-white tracking-wide">SIGN IN</h2>
					<input
						type="text"
						name="firstName"
						id="firstname"
						placeholder="firstName"
						required
					/>
					<input
						type="text"
						name="lastName"
						id="lastName"
						placeholder="Lastname"
						required
					/>
					<input type="email" name="" id="email" placeholder="email" />
					<input
						type="password"
						name=""
						id="password"
						placeholder="password"
						required
					/>
					<input type="submit" value="submit" className="text-nuetral-300" />
				</form>
			</div>
		</div>
	);
};

export default Signin;
// http//local:3000/api/v1/auth/register
