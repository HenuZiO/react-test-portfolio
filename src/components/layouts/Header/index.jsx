import { useContext } from 'react'
import { LangContext } from '../../../App'

import './Header.css'
const Header = () => {
	const { t } = useContext(LangContext)

	return (
		<header className='header'>
			<div className='header__wrapper'>
				<h1 className='header__title'>
					<strong>
						{t('Greetings')} <em>{t('GreetingsName')}</em>
					</strong>
					<br />
					{t('Profession')}
				</h1>
				<div className='header__text'>
					<p>{t('PS')}</p>
				</div>
				<a href='#!' className='btn'>
					{t('CV')}
				</a>
			</div>
		</header>
	)
}

export default Header
