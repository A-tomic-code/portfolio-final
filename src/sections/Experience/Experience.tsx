import { EXPERIENCE } from '../../utils/utils'

export const Experience = () => {
	return (
		<div className="w-full flex flex-col ">
			<ul className="flex w-full flex-col justify-center items-center gap-3">
				{EXPERIENCE.map((e, i) => (
					<li className="w-3/5 flex justify-center gap-5" key={i}>
						<span className="flex flex-col justify-start items-center ">
							<span className="text-x">{'●'}</span>
							<span className="w-[2px] h-full bg-white rounded-md"></span>
						</span>

						<div className="flex flex-col w-full">
							<span className="text-pretty text-2xl text-primary flex justify-start gap-2 items-center ">
								<span>{`${e.title} (${e.date})`}</span>
							</span>
							<span className="text-pretty text-lg text-primary flex justify-start gap-2 items-center ">
								<span>{e.company}</span>
							</span>

							<p className="flex gap-2 py-5">{e.description}</p>
						</div>
					</li>
				))}
			</ul>
		</div>
	)
}
