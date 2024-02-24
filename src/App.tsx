import './App.css'
import { Navbar } from './components/Navbar/Navbar'
import { SkillsGrid } from './components/SkillsGrid/SkillsGrid'
import { Content } from './components/layout/Content/Content'
import { Header } from './components/layout/Header/Header'

function App() {
	return (
		<main className=" flex flex-col justify-start items-center gap-4 w-full min-h-full">
			<Navbar />
			<div className="flex flex-col justify-start items-center gap-6 max-w-[1400px] w-full py-6 px-24">
				<Header />
				<SkillsGrid />

				<Content />
			</div>
			{/* <PixelBackground amount={10} /> */}
			{/* <GridBackground /> */}
			{/* <DotBackground /> */}
		</main>
	)
}

export default App
