import { useState, useEffect, useRef } from 'react'

const BtnDarkMode = () => {
	const [darkMode, setDarkMode] = useState('light')
	const themeBtnRef = useRef(null)

	useEffect(() => {
		if (darkMode === 'dark') {
			document.body.classList.add('dark')
			themeBtnRef.current.classList.add('dark-mode-btn--active')
		} else {
			document.body.classList.remove('dark')
			themeBtnRef.current.classList.remove('dark-mode-btn--active')
		}
	}, [darkMode])

	const toggleDarkMode = () => {
		setDarkMode(currentMode => (currentMode === 'light' ? 'dark' : 'light'))
	}

	return (
		<button
			ref={themeBtnRef}
			className='dark-mode-btn'
			onClick={toggleDarkMode}
		>
			<img
				src='/img/icons/sun.svg'
				alt='Light mode'
				className='dark-mode-btn__icon'
			/>
			<img
				src='/img/icons/moon.svg'
				alt='Dark mode'
				className='dark-mode-btn__icon'
			/>
		</button>
	)
}

export default BtnDarkMode
