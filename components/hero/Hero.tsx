import React from "react";
import HeroContent from "./HeroContent";

const Hero = () => {
	return (
		<div className="relative flex flex-col h-full w-full z-[1]">
			<video
				muted
				loop
				autoPlay
				className="rotate-180 absolute -top-[340px] z-10 w-full h-full object-cover"
			>
				<source
					src="/Space Portfolio Assets/blackhole.webm"
					type="video/webm"
				/>
			</video>
			<HeroContent />
		</div>
	);
};

export default Hero;
