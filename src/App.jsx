import "./App.css";
import { Header } from "./components/layout/Header/Header";
import { Content } from "./components/layout/Content/Content";
import { Navbar } from "./components/Navbar/Navbar";
import { PixelBackground } from "./components/PixelBackground/PixelBackground";
import { SkillsGrid } from "./components/SkillsGrid/SkillsGrid";

function App() {
	return (
		<main className=" flex flex-col justify-start items-center gap-4 pb-16 w-full">
			<Navbar />
			<div className="flex flex-col justify-start items-center gap-6 max-w-[1500px] w-full py-6 px-24">
				<Header />
				<SkillsGrid />

				<Content />
			</div>
			<PixelBackground amount={10} />
		</main>
	);
}

export default App;
