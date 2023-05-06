import { useEffect } from 'react'
import { useLocalStorage } from '../../../hooks/useLocalStorage'
import detectDarkMode from '../../../utils/detectDarkMode'

const BtnDarkMode = () => {
	const [darkMode, setDarkMode] = useLocalStorage('theme', detectDarkMode())

	useEffect(() => {
		if (darkMode === 'dark') {
			document.body.classList.add('dark')
		} else {
			document.body.classList.remove('dark')
		}
	}, [darkMode])

	useEffect(() => {
		window
			.matchMedia('(prefers-color-scheme: dark)')
			.addEventListener('change', event => {
				const newColorScheme = event.matches ? 'dark' : 'light'
				setDarkMode(newColorScheme)
			})
	}, [setDarkMode])

	const toggleDarkMode = () => {
		setDarkMode(currentMode => (currentMode === 'light' ? 'dark' : 'light'))
	}

	const themeBtnLight = 'dark-mode-btn'
	const themeBtnDark = 'dark-mode-btn dark-mode-btn--active'

	return (
		<button
			className={darkMode === 'dark' ? themeBtnDark : themeBtnLight}
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
