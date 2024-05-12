import {
	Backend_skill,
	Frontend_skill,
	Full_stack,
	Other_skill,
} from "@/constants";
import React from "react";
import SkillData from "./SkillData";

const Skills = () => {
	return (
		<section
			className=" flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden py-20"
			id="skills"
			style={{
				transform: "scale(0.9)",
			}}
		>
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
			<div className=" w-full">d</div>
		</section>
	);
};

export default Skills;
