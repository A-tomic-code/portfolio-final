import { useEffect, useRef, useState } from 'react'
import './App.css'
import { Navbar } from './components/Navbar/Navbar'
import { SkillsGrid } from './components/SkillsGrid/SkillsGrid'
import { Content } from './components/layout/Content/Content'
import { Header } from './components/layout/Header/Header'

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
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					setNavBarBgStyle(false)
				} else {
					setNavBarBgStyle(true)
				}
			})
		}
		const observer = new IntersectionObserver(onObserve, observeroptions)

		observer.observe(contentRef.current!)
	}, [])

	return (
		<main className="flex flex-col justify-start items-center gap-4 w-full ">
			<div className="w-full h-0 " ref={contentRef}></div>
			<div
				className="w-full sticky top-0 z-50 -mt-4"
				ref={navBarContainerRef}
			>
				<Navbar bgClear={navbarClear} />
			</div>

			<div className="pageContent flex flex-col justify-start items-center gap-6 max-w-[1400px] w-full py-6 px-24">
				<Header />
				<SkillsGrid />
				<Content />
			</div>
		</main>
	)
}

export default App
