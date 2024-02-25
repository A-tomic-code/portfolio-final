import { useEffect, useRef, useState } from 'react'
import './App.css'
import { Navbar } from './components/Navbar/Navbar'
import { SkillsGrid } from './components/SkillsGrid/SkillsGrid'
import { Content } from './components/layout/Content/Content'
import { Header } from './components/layout/Header/Header'
import { WavyBackground } from './components/WavyBackground'

function App() {
	const contentRef = useRef<HTMLDivElement>(null)
	const navBarContainerRef = useRef<HTMLDivElement>(null)

	const [navbarClear, setNavBarBgStyle] = useState(false)

	useEffect(() => {
		const observeroptions = {
			root: null,
			rootMargin: '0px',
			threshold: 0.2,
		}

		const onObserve: IntersectionObserverCallback = (entries) => {
			entries[0].isIntersecting
				? setNavBarBgStyle(false)
				: setNavBarBgStyle(true)
		}
		const observer = new IntersectionObserver(onObserve, observeroptions)

		observer.observe(contentRef.current!)
	}, [])

	return (
		<main className="flex flex-col justify-start items-center gap-4 w-full ">
			{/* INTERSECTION OBSERVER FLAG */}
			<div className="w-full h-0 " ref={contentRef} />

			{/* NAVBAR */}
			<div
				className="w-full sticky top-0 z-50 -mt-4"
				ref={navBarContainerRef}
			>
				<Navbar bgClear={navbarClear} />
			</div>

			{/* PAGE CONTENT */}
			<div className="pageContent flex flex-col justify-start items-center gap-6 max-w-[1400px] w-full py-6 px-24">
				<Header />
				<SkillsGrid />
				<Content />
				<WavyBackground
					colors={['#0c4a6e', '#115e59', '#1e293b', '#6b21a8']}
					blur={5}
					waveOpacity={0}
					waveWidth={2}
					speed="slow"
				/>
			</div>
		</main>
	)
}

export default App
