import { useParams } from 'react-router-dom'
import { projects } from '../../helpers/projectsList'
import BtnGithub from '../../components/ui/BtnGithub'

import './ProjectPage.css'

const ProjectPage = () => {
	const { id } = useParams()

	const project = projects.find(el => el.src === id)

	return (
		<main className='section'>
			<div className='container'>
				<div className='project-details'>
					<h1 className='title-1'>{project.title}</h1>

					<img src={project.imgBig} alt='' className='project-details__cover' />

					<div className='project-details__desc'>
						<p>{project.skills}</p>
					</div>

					{project.git && <BtnGithub src={project.git} />}
				</div>
			</div>
		</main>
	)
}

export default ProjectPage
