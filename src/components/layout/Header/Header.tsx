import developerImg from '../../../assets/developer-image.svg'
import logoGit from '../../../assets/github-logo.svg'
import logoLinkedin from '../../../assets/linkedin-logo.svg'
import { HeaderBg } from './HeaderBg'

export const Header = () => {
	return (
		<header className="h-[640px] max-w-[1200px] w-full bg-white bg-opacity-5  backdrop-blur-lg rounded-[32px] flex flex-col border border-sky-950 overflow-hidden">
			<section className="flex w-full h-full justify-evenly items-center gap-4 p-16">
				<article className="flex flex-col justify-center gap-10 max-w-xl w-2/4  h-full shrink-0 ">
					<div className="flex flex-col gap-3">
						<h1 className="text-primary text-6xl font-bold">
							Daniel Vázquez
						</h1>

						<p className="text-pretty text-gray-950 bg-primary rounded-e-2xl py-1 px-5 text-l font-extrabold">
							<code className="w-full h-full text-xl tracking-wider">
								{'<Full stack developer/>'}
							</code>
						</p>
					</div>

					<p className=" text-lg font-roboto font-normal leading-8 tracking-wider px-4">
						Sumérgete en un viaje a través de mi universo digital,
						donde la creatividad se une a la tecnología para dar
						vida a sitios web cautivadores y experiencias
						memorables. Explora mi colección de proyectos, cada uno
						de ellos representa una historia de colaboración,
						innovación y pasión por el desarrollo web.
					</p>

					<div className="flex w-full h-30 justify-end gap-4">
						<span className="flex h-8">
							<img className="w-full h-full" src={logoGit} />
						</span>
						<span className="flex h-8">
							<img className="w-full h-full" src={logoLinkedin} />
						</span>
					</div>
				</article>

				<article className="py-auto h-full w-2/4 shrink-0">
					<img
						className="w-full h-full"
						src={developerImg}
						alt="imagen del desarrollador sonriendo y con los brazos cruzados"
					/>
				</article>
			</section>
			<HeaderBg width="100%" height="100%" />
		</header>
	)
}
