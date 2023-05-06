import { useContext } from 'react'
import { LangContext } from '../../App'

import ProjectItem from '../../components/projectItem'
import { projects } from '../../helpers/projectsList'
import './ProjectsPage.css'

const ProjectsPage = () => {
	const { t, i18n } = useContext(LangContext)

	return (
		<main className='section'>
			<div className='container'>
				<h2 className='title-1'>{t('ProjectsLink')}</h2>
				<ul className='projects'>
					{projects.map(project => (
						<ProjectItem
							key={project.id}
							title={
								i18n.language === 'ru' ? project.title.ru : project.title.en
							}
							img={project.img}
							src={project.src}
						/>
					))}
				</ul>
			</div>
		</main>
	)
}

export default ProjectsPage
