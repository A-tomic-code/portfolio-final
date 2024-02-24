export const Experience = () => {
	const exp = [
		{
			title: 'Frontend Developer',
			company: 'Google',
			date: '2020 - 2021',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		},
		{
			title: 'Backend Developer',
			company: 'Facebook',
			date: '2018 - 2020',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		},
	]

	return (
		<div className="w-full flex flex-col ">
			<ul className="flex w-full flex-col justify-center items-center gap-3">
				{exp.map((e, i) => (
					<li className="w-3/5 flex justify-center gap-5" key={i}>
						<span className="flex flex-col justify-start items-center ">
							<span className="text-x">{'●'}</span>
							<span className="w-[2px] h-full bg-white rounded-md"></span>
						</span>

						<div className="flex flex-col w-full">
							<span className="text-pretty text-white flex justify-start gap-2 items-center ">
								<span>{e.title}</span>
							</span>

							<p className="flex gap-2">
								{/* <div className="flex justify-center h-full w-[18px]">
									<div className="w-[2px] h-full bg-white rounded-md"></div>
								</div> */}
								{e.description}
							</p>
						</div>
					</li>
				))}
			</ul>
		</div>
	)
}
