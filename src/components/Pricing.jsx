import React from "react";
import { pricing } from "../constants";
const Pricing = () => {
	return (
		<div className=" my-24 py-24 bg-gray-900">
			<div className="flex flex-col justify-center items-center text-center">
				<h2 className="text-2xl lg:text-4xl md:text-3xl text-white mb-12">
					Why choose us?
				</h2>
				<div className=" grid-col-1 md:grid-cols-2 lg:md:grid-cols-3 grid    px-12 space-x-2  m-auto w-full">
					{pricing.map((item, index) => (
						<div key={index} className="">
							<div className=" border border-neutral-500  backdrop-blur-lg  rounded-lg  shadow-white mt-10 w-[360px] ">
								<img src={item.image} alt="logo" className="m-auto p-10" />

								<h5 className="mt-1 mb-6 text-xl text-slate-300">
									{item.text1}
								</h5>
								<p className="text-md p-2 mb-10 text-neutral-200 text-justify	px-4">
									{item.text2}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Pricing;
