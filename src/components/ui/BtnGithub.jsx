import React from 'react'

const BtnGithub = ({ src }) => {
	return (
		<a href={src} className='btn-outline' target='_blank'>
			<img src='/img/icons/gitHub-black.svg' alt='' />
			GitHub repo
		</a>
	)
}

export default BtnGithub
