"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

interface props {
	src: string;
	width: number;
	height: number;
	index: number;
	title: string;
}

const SkillData = ({ src, index, width, height, title }: props) => {
	const { ref, inView } = useInView({
		triggerOnce: true,
	});

	const imageVar = {
		hidden: { opacity: 0 },
		visible: { opacity: 1 },
	};

	const animationDelay = 0.3;
	return (
		<motion.div
			ref={ref}
			custom={index}
			initial="hidden"
			animate={inView ? "visible" : "hidden"}
			variants={imageVar}
			transition={{ delay: animationDelay * index, duration: 0.5 }}
		>
			<Image
				src={src}
				width={width}
				height={height}
				alt="skill Image"
				title={title}
			/>
		</motion.div>
	);
};

export default SkillData;
