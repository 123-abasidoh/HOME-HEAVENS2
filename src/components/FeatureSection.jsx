import React from "react";
import { feature } from "../constants";
import image1 from "../assets/sliding/image1.png";
import image2 from "../assets/sliding/image2.png";
import image3 from "../assets/sliding/image3.png";
import image4 from "../assets/sliding/image5.png";

const FeatureSection = () => {
	return (
		<div className="px-[5%] mt-24 bg-neutral-900 overflow-hidden">
			<div className="flex  py-12 flex-wrap relative justify-between items-center gap-1 ">
				<div className="  flex flex-col gap-12 justify-between text-center max-w-2xl">
					{feature.map((feature, index) => (
						<div key={index} className="">
							<h2 className="text-green-800 text-2xl lg:text-4xl md:text-3xl tracking-wide">
								{feature.text1}
							</h2>
							<p className="text-neutral-400">{feature.text2}</p>
						</div>
					))}
					<a
						href=""
						className="px-4 py-3 border border-nuetral-800 rounded-md  max-w-64 m-auto backdrop-blur-lg shadow-md  text-neutral-300"
					>
						Create an account
					</a>
				</div>
				<div className="hidden lg:flex relative h-[400px] w-[500px] mt-24 overflow-visible">
					<div className=" lg:w-full flex gap-4 absolute   rotate-45 h-[900px] -top-[100px] -right-[350px]">
						<marquee
							behavior="alternate"
							scrollamount="5"
							direction="up"
							className=" flex  items-center justify-center max-w-[200px] h-[1000px]"
						>
							<img
								src={image1}
								alt=""
								className="h-[200px] w-[350px] bg-blue-800 mt-4 -rotate-90 "
							/>
							<img
								src={image2}
								alt=""
								className="h-[200px] w-[350px] bg-blue-800 mt-4 -rotate-90 "
							/>
							<img
								src={image3}
								alt=""
								className="h-[200px] w-[350px] bg-blue-800 mt-4 -rotate-90 "
							/>
							<img
								src={image4}
								alt=""
								className="h-[200px] w-[350px] bg-blue-800 mt-4 -rotate-90 "
							/>
							<img
								src={image1}
								alt=""
								className="h-[200px] w-[350px] bg-blue-800 mt-4 -rotate-90 "
							/>
						</marquee>
						<marquee
							behavior="alternate"
							scrollamount="5"
							direction="down"
							className=" flex  items-center justify-center max-w-[200px]"
						>
							<img
								src={image1}
								alt=""
								className="h-[200px] w-[350px] bg-blue-800 mt-4 -rotate-90 "
							/>
							<img
								src={image2}
								alt=""
								className="h-[200px] w-[350px] bg-blue-800 mt-4 -rotate-90 "
							/>
							<img
								src={image3}
								alt=""
								className="h-[200px] w-[350px] bg-blue-800 mt-4 -rotate-90 "
							/>
							<img
								src={image4}
								alt=""
								className="h-[200px] w-[350px] bg-blue-800 mt-4 -rotate-90 "
							/>
							<img
								src={image1}
								alt=""
								className="h-[200px] w-[350px] bg-blue-800 mt-4 -rotate-90 "
							/>
						</marquee>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FeatureSection;
