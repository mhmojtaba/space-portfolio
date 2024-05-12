import {
	Backend_skill,
	Frontend_skill,
	Full_stack,
	Other_skill,
} from "@/constants";
import React from "react";
import SkillData from "./SkillData";
import SkillText from "./SkillText";

const Skills = () => {
	return (
		<section
			className=" flex flex-col items-center justify-center gap-3 h-full 
			relative overflow-hidden pb-[350px] py-20"
			id="skills"
			style={{
				transform: "scale(0.9)",
			}}
		>
			<SkillText />
			<div className="flex justify-around flex-wrap mt-4 gap-5 items-center">
				{Frontend_skill.map((skill, index) => (
					<SkillData
						src={skill.Image}
						width={skill.width}
						height={skill.height}
						index={index}
						key={skill.skill_name}
						title={skill.skill_name}
					/>
				))}
			</div>
			<div className="flex justify-around flex-wrap mt-4 gap-5 items-center">
				{Backend_skill.map((skill, index) => (
					<SkillData
						src={skill.Image}
						width={skill.width}
						height={skill.height}
						index={index}
						key={skill.skill_name}
						title={skill.skill_name}
					/>
				))}
			</div>
			<div className="flex justify-around flex-wrap mt-4 gap-5 items-center">
				{Full_stack.map((skill, index) => (
					<SkillData
						src={skill.Image}
						width={skill.width}
						height={skill.height}
						index={index}
						key={skill.skill_name}
						title={skill.skill_name}
					/>
				))}
			</div>
			<div className="flex justify-around flex-wrap mt-4 gap-5 items-center">
				{Other_skill.map((skill, index) => (
					<SkillData
						src={skill.Image}
						width={skill.width}
						height={skill.height}
						index={index}
						key={skill.skill_name}
						title={skill.skill_name}
					/>
				))}
			</div>
			<div className="w-full h-full absolute">
				<div className="w-full h-full -z-[10] opacity-30 absolute items-center justify-center flex bg-cover">
					<video
						className="w-full h-auto"
						preload="false"
						autoPlay
						playsInline
						loop
						muted
						src="/Space Portfolio Assets/cards-video.webm"
					/>
				</div>
			</div>
		</section>
	);
};

export default Skills;
