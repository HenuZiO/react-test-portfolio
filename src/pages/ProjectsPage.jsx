import React from 'react'

import ProjectItem from '../components/projectItem'
import { projects } from '../helpers/projectsList'

const ProjectsPage = () => {
	return (
		<main className='section'>
			<div className='container'>
				<h2 className='title-1'>Projects</h2>
				<ul className='projects'>
					{projects.map(project => (
						<ProjectItem
							key={project.id}
							title={project.title}
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
