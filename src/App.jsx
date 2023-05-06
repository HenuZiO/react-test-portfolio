import { createContext, useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Navbar from './components/layouts/Navbar'
import Footer from './components/layouts/Footer'
import Home from './pages/HomePage'
import ProjectsPage from './pages/ProjectsPage'
import ContactsPage from './pages/ContactsPage'
import ProjectPage from './pages/ProjectPage'
import NotFoundPage from './pages/NotFoundPage'
import ScrollToTop from './utils/scrollToTop'

export const LangContext = createContext()

function App() {
	const { t, i18n } = useTranslation()

	const changeLanguage = lang => {
		i18n.changeLanguage(lang)
	}

	return (
		<div className='App'>
			<LangContext.Provider value={{ t, i18n, changeLanguage }}>
				<ScrollToTop />
				<Navbar />

				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/contacts' element={<ContactsPage />} />
					<Route path='/projects' element={<ProjectsPage />} />
					<Route path='/project/:id' element={<ProjectPage />} />
					<Route path='/page-404' element={<NotFoundPage />} />
					<Route path='*' element={<Navigate to='/page-404' />} />
				</Routes>
				<Footer />
			</LangContext.Provider>
		</div>
	)
}

export default App
