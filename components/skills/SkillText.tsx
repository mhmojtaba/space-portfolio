"use client";

import { SparklesIcon } from "@heroicons/react/20/solid";
import { motion } from "framer-motion";
import {
	slideInFromLeft,
	slideInFromRight,
	slideInFromTop,
} from "@/utils/motion";

const SkillText = () => {
	return (
		<motion.div
			initial="hidden"
			animate="visible"
			className="w-full h-auto flex flex-col items-center justify-center"
		>
			<motion.div
				variants={slideInFromTop}
				className="Welcome-box py-[8px] px-[8px] border border-[#7042f88b] opacity-[0.9]"
			>
				<SparklesIcon className="text-[#b49bff] h-6 w-6" />
				<h1 className="Welcome-text text-[24px] ml-3">
					Build better with Web3
				</h1>
			</motion.div>
			<motion.div
				variants={slideInFromLeft(0.5)}
				className="text-[35px] text-white font-medium mt-[10px] text-center mb-[15px]"
			>
				Making Dapp with the best technologies
			</motion.div>
			<motion.div
				variants={slideInFromRight(0.4)}
				className="cursive text-[20px] text-gray-200 mt-[10px] text-center mb-[10px]"
			>
				Never miss any Idea
			</motion.div>
		</motion.div>
	);
};

export default SkillText;
