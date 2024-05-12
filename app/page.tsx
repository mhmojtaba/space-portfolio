import Encryption from "@/components/encryption/Encryption";
import Hero from "@/components/hero/Hero";
import Projects from "@/components/projects/Projects";
import Skills from "@/components/skills/Skills";

export default function Home() {
	return (
		<main className="h-full w-full">
			<div className="flex flex-col gap-20 ">
				<Hero />
				<Skills />
				<Encryption />
				<Projects />
			</div>
		</main>
	);
}
