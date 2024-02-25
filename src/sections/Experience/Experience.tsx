import { EXPERIENCE } from '../../utils/utils'

export const Experience = () => {
	return (
		<div className="w-full flex flex-col ">
			<ul className="flex w-full flex-col justify-center items-center">
				{EXPERIENCE.map((e, i) => (
					<li className="w-full flex justify-start gap-5" key={i}>
						<span className="flex flex-col justify-start items-center ">
							<span className="text-3xl text-white">{'●'}</span>
							<span className="w-[2px] h-full bg-white rounded-md -mt-4"></span>
						</span>

						<div className="flex flex-col w-full">
							<span className="text-pretty text-3xl text-primary flex justify-start gap-2 items-start font-semibold">
								{`${e.title} (${e.date})`}
								{i === 0 && (
									<span className="text-pretty text-base text-white font-light">
										Actuálmente
									</span>
								)}
							</span>
							<span className=" text-xl text-primary flex justify-start gap-2 items-center ">
								<span>{e.company}</span>
							</span>

							<p className="text-pretty flex gap-2 py-5 text-md tracking-wider w-2/3">
								{e.description}
							</p>
						</div>
					</li>
				))}
			</ul>
		</div>
	)
}
