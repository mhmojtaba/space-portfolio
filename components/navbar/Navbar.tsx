import { Socials } from "@/constants";
import Image from "next/image";
import React from "react";

const Navbar = () => {
	return (
		<nav
			className="w-full h-[65px] fixed top-0 
        shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10 "
		>
			<div className="flex w-full h-full justify-between items-center m-auto px-3">
				<a href="#about-me" className="flex items-center h-auto w-auto">
					<Image
						src={"/Space Portfolio Assets/navlogo.png"}
						alt="logo"
						width={70}
						height={70}
						className="cursor-pointer hover:animate-spin"
					/>
					<span className=" font-bold ml-3 block text-gray-300">Web3 Dev</span>
				</a>
				<div className="w-[500px] flex items-center justify-between h-full md:mr-[30px]">
					<div
						className=" flex items-center justify-between 
                        border border-[#7042f861] bg-[#0300145e] mr-4
                    px-5 py-2 w-full h-auto rounded-full text-gray-200"
					>
						<a href="#about-me" className="cursor-pointer">
							About me
						</a>
						<a href="#skills" className="cursor-pointer">
							skills
						</a>
						<a href="#projects" className="cursor-pointer">
							projects
						</a>
					</div>
				</div>
				<div className="flex gap-5">
					{Socials.map((social) => (
						<Image
							src={social.src}
							alt={social.name}
							key={social.name}
							width={30}
							height={30}
						/>
					))}
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
