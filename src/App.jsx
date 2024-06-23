import React from "react";
import Navbar from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import Workflow from "./components/Workflow";
import FeatureSection from "./components/FeatureSection";
import Testimonials from "./components/Testimonials";
// import Pricing from "./components/Pricing";

const App = () => {
	return (
		<>
			<Navbar />

			<HeroSection />
			<Workflow />
			<FeatureSection />

			<Testimonials />
			<Navbar />
			{/* <Pricing /> */}
		</>
	);
};

export default App;
