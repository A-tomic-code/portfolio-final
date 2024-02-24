import { ReactElement } from 'react'

type Props = {
	title: string
	content?: ReactElement
}

export const PageSection = ({ title, content }: Props) => {
	return (
		<div className="w-full">
			<p className="w-2/6 text-pretty text-gray-950 bg-primary rounded-e-2xl py-1 px-5 text-l font-extrabold">
				<code className="w-full h-full text-xl tracking-wider">
					{title}
				</code>
			</p>
			<div className="p-5">{content && content}</div>
		</div>
	)
}
