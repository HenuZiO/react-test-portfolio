import React from 'react'
import { Link } from 'react-router-dom'

const ProjectItem = ({ title, img, src }) => {
	return (
		<li className='project'>
			<Link to={`/project/${src}`}>
				<img src={img} alt={title} className='project__img' />
				<h3 className='project__title'>{title}</h3>
			</Link>
		</li>
	)
}

export default ProjectItem
