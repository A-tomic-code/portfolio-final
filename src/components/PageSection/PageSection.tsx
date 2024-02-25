import { ReactElement } from 'react'

type Props = {
	title: string
	content?: ReactElement
}

export const PageSection = ({ title, content }: Props) => {
	return (
		<div className="w-full">
			<h2 className="w-fit text-pretty text-gray-950 bg-primary rounded-e-2xl py-1 ps-5 pe-16 text-l font-extrabold mb-5">
				<code className="w-full h-full text-xl tracking-wider">
					{'<' + title + ' />'}
				</code>
			</h2>

			<div className="p-5">{content && content}</div>
		</div>
	)
}
