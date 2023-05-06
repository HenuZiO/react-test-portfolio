import { NavLink } from 'react-router-dom'
import BtnDarkMode from '../../ui/BtnDarkMode'
import './Navbar.css'

const Navbar = () => {
	const activeLink = 'nav-list__link nav-list__link--active'
	const normalLink = 'nav-list__link'
	const setActiveLink = ({ isActive }) => (isActive ? activeLink : normalLink)

	return (
		<nav className='nav'>
			<div className='container'>
				<div className='nav-row'>
					<NavLink to='/' className='logo'>
						<strong>Freelancer</strong> portfolio
					</NavLink>

					<BtnDarkMode />

					<ul className='nav-list'>
						<li className='nav-list__item'>
							<NavLink to='/' className={setActiveLink}>
								Home
							</NavLink>
						</li>
						<li className='nav-list__item'>
							<NavLink to='/projects' className={setActiveLink}>
								Projects
							</NavLink>
						</li>
						<li className='nav-list__item'>
							<NavLink to='/contacts' className={setActiveLink}>
								Contacts
							</NavLink>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	)
}

export default Navbar
