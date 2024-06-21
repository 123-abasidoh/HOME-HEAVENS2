import React from "react";
import { testimonials1, testimonials2 } from "../constants";
const Testimonials = () => {
	return (
		<div className="px-[5%] mt-24">
			{testimonials1.map((items, index) => (
				<div key={index} className="max-w-5xl m-auto flex justify-center items-center ">
					<div className="lg:flex items-center space-x-12 justify-center">
					<div className="flex  justify-center"><img src={items.image} alt="user1-img" className=" "  /></div>
						<div className="text-center lg:text-start">
							<p className=" pb-8 max-w-[600px] m-auto">{items.text}</p>
							<h2>{items.user}</h2>
						</div>
					</div>
				</div>
			))}
			{testimonials2.map((items, index) => (
				<div key={index} className="max-w-5xl m-auto  ">
					<div className=" lg:flex items-center space-x-12 justify-center  flex-wrap-reverse">
						<div className="text-center lg:text-end">
							<p className=" pb-8 max-w-[600px] m-auto">{items.text}</p>
							<h2>{items.user}</h2>
						</div>
							<div className="flex  justify-center"><img src={items.image} alt="user1-img" className=" "  /></div>
					</div>
				</div>
			))}
		</div>
	);
};

export default Testimonials;
