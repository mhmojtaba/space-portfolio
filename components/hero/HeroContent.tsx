"use client";

import {
	slideInFromLeft,
	slideInFromRight,
	slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/20/solid";
import { motion } from "framer-motion";
import Image from "next/image";

const HeroContent = () => {
	return (
		<motion.div
			initial="hidden"
			animate="visible"
			className="flex flex-row items-center justify-center mt-40 px-20 z-20 w-full"
		>
			<div className="flex flex-col gap-5 justify-center w-full h-full text-start m-auto">
				<motion.div
					variants={slideInFromTop}
					className="Welcome-box py-[8px] px-[8px] border border-[#7042f88b] opacity-[0.9]"
				>
					<SparklesIcon className="text-[#b49bff] h-5 w-5" />
					<h1 className="Welcome-text text-[13px]">
						FullStack developer portfolio
					</h1>
				</motion.div>
				<motion.div
					variants={slideInFromLeft(0.6)}
					className="flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
				>
					<span>
						Providing
						<span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-cyan-500">
							{" "}
							the best{" "}
						</span>
						project experience.
					</span>
				</motion.div>
				<motion.p
					variants={slideInFromLeft(1)}
					className="text-lg text-gray-400 my-5 max-w-[600px]"
				>
					I'm a full stack web3 developer with experience of websites deployed
					on the blockchain. check out my projects and skills
				</motion.p>
				<motion.a
					href={"/"}
					variants={slideInFromLeft(1.2)}
					className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
				>
					learn more
				</motion.a>
			</div>
			<motion.div
				variants={slideInFromRight(1)}
				className="w-full h-full flex justify-center items-center"
			>
				<Image
					src={"/Space Portfolio Assets/mainIconsdark.svg"}
					alt="main icon dark"
					width={650}
					height={650}
				/>
			</motion.div>
		</motion.div>
	);
};

export default HeroContent;
