import React from 'react'
import { Link } from 'react-router-dom'

const NotFoundPage = () => {
	return (
		<main className='section'>
			<div className='container'>
				<h1 className='title-1'>Page 404...</h1>

				<ul className='content-list'>
					<li className='content-list__item'>
						<h2 className='title-2'>Ooooops</h2>
						<p>This page does not exist</p>
						<p>
							<Link to='/'>Go back to main page</Link>
						</p>
					</li>
				</ul>
			</div>
		</main>
	)
}

export default NotFoundPage
