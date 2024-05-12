"use client";

import { slideInFromTop } from "@/utils/motion";
import { motion } from "framer-motion";
import Image from "next/image";

const Encryption = () => {
	return (
		<motion.div
			initial="hidden"
			animate="visible"
			className="flex relative items-center justify-center w-full h-full mb-40"
		>
			<div className=" absolute w-auto h-auto top-0 z-[5]">
				<motion.div
					className=" text-[40px] text-center text-gray-200 font-medium"
					variants={slideInFromTop}
				>
					Performance
					<span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-cyan-500">
						{" "}
						&{" "}
					</span>
					Security
				</motion.div>
			</div>
			<div
				className="flex flex-col justify-center 
            items-center -translate-y-[50px] z-20 absolute w-auto h-auto"
			>
				<div className="flex flex-col items-center group cursor-pointer w-auto h-auto">
					<Image
						src="/Space Portfolio Assets/LockTop.png"
						alt="Lock Top"
						width={50}
						height={50}
						className="translate-y-[26px] transition-all group-hover:translate-y-10 duration-200"
					/>
					<Image
						src="/Space Portfolio Assets/LockMain.png"
						alt="Lock Main"
						width={50}
						height={50}
						className="z-10"
					/>
				</div>
			</div>
			<div className="w-full items-start justify-center flex absolute">
				<video
					src="/Space Portfolio Assets/encryption.webm"
					loop
					autoPlay
					playsInline
					preload="false"
					muted
					className=" w-full h-auto"
				/>
			</div>
		</motion.div>
	);
};

export default Encryption;
