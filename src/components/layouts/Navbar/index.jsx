import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { LangContext } from '../../../App'
import BtnDarkMode from '../../ui/BtnDarkMode'
import BtnSelectLang from '../../ui/BtnSelectLang'
import './Navbar.css'

const Navbar = () => {
	const { t } = useContext(LangContext)
	const activeLink = 'nav-list__link nav-list__link--active'
	const normalLink = 'nav-list__link'
	const setActiveLink = ({ isActive }) => (isActive ? activeLink : normalLink)

	return (
		<nav className='nav'>
			<div className='container'>
				<div className='nav-row'>
					<NavLink to='/' className='logo'>
						<strong>{t('Freelancer')}</strong> {t('Portfolio')}
					</NavLink>

					<BtnDarkMode />
					<BtnSelectLang />

					<ul className='nav-list'>
						<li className='nav-list__item'>
							<NavLink to='/' className={setActiveLink}>
								{t('HomeLink')}
							</NavLink>
						</li>
						<li className='nav-list__item'>
							<NavLink to='/projects' className={setActiveLink}>
								{t('ProjectsLink')}
							</NavLink>
						</li>
						<li className='nav-list__item'>
							<NavLink to='/contacts' className={setActiveLink}>
								{t('ContactsLink')}
							</NavLink>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	)
}

export default Navbar
