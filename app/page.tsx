import Hero from "@/components/hero/Hero";
import Skills from "@/components/skills/Skills";

export default function Home() {
	return (
		<main className="h-full w-full">
			<div className="flex flex-col gap-20 ">
				<Hero />
				<Skills />
			</div>
		</main>
	);
}
