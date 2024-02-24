import { PageSection } from '../../PageSection/PageSection'
import { Aboutme } from '../../../sections/Aboutme/Aboutme'
import { Experience } from '../../../sections/Experience/Experience'

export const Content = () => {
	return (
		<div className="flex flex-col gap-5 w-full">
			<PageSection title="Sobre mi" content={<Aboutme />} />
			<PageSection
				title="Mi Experiencia profesional"
				content={<Experience />}
			/>
		</div>
	)
}
