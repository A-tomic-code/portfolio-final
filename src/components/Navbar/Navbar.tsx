import { NAV_LINKS } from '../../utils/utils'

interface NavbarProps {
	bgClear: boolean
}

export const Navbar = ({ bgClear }: NavbarProps) => {
	return (
		<nav
			className={`backdrop-blur-md w-full shadow-lg transition-colors duration-500 border-gray-500 border-opacity-40 ${
				bgClear
					? 'bg-primary bg-opacity-10 border-b '
					: 'bg-stone-900 bg-opacity-50 border-b-0'
			}  
			`}
		>
			<div className="max-w-screen-xl flex flex-wrap items-center justify-end mx-auto p-4">
				{/* <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
					<img
						src="https://flowbite.com/docs/images/logo.svg"
						className="h-8"
						alt="Flowbite Logo"
					/>
					<span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
						Flowbite
					</span>
				</a> */}

				{/* <button
					data-collapse-toggle="navbar-dropdown"
					type="button"
					className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
					aria-controls="navbar-dropdown"
					aria-expanded="false"
				>
					<span className="sr-only">Open main menu</span>
					<svg
						className="w-5 h-5"
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 17 14"
					>
						<path
							stroke="currentColor"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M1 1h15M1 7h15M1 13h15"
						/>
					</svg>
				</button> */}
				<div
					className="hidden w-full md:block md:w-auto"
					id="navbar-dropdown"
				>
					<ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border-gray-700 rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 ">
						{NAV_LINKS.map((link, index) => (
							<li key={index}>
								<a
									href="#"
									onClick={link.onClick}
									className={`block py-2   transition-all duration-300 ${
										bgClear
											? 'text-gray-200 hover:text-gray-500'
											: 'text-primary hover:text-gray-100'
									}`}
								>
									{link.label}
								</a>
							</li>
						))}
					</ul>
				</div>
			</div>
		</nav>
	)
}
