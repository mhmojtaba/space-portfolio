import { Projects_data } from "@/constants";
import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
	return (
		<section
			id="projects"
			className="flex flex-col items-center justify-center py-20"
		>
			<h1
				className=" text-[40px] font-semibold text-transparent 
			bg-clip-text bg-gradient-to-r from-pink-500 to-cyan-400 py-20"
			>
				My Projects
			</h1>
			<div className=" w-full h-full flex flex-col md:flex-row flex-nowrap gap-10 px-10">
				{Projects_data.map((project, index) => (
					<ProjectCard
						key={project.title}
						title={project.title}
						src={project.src}
						description={project.description}
					/>
				))}
			</div>
		</section>
	);
};

export default Projects;
