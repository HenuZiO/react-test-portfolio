import Navbar from './components/layouts/Navbar'
import Footer from './components/layouts/Footer'
import Home from './pages/HomePage'
import ProjectsPage from './pages/ProjectsPage'
import ContactsPage from './pages/ContactsPage'
import ProjectPage from './pages/ProjectPage'
import NotFoundPage from './pages/NotFoundPage'
import { Navigate, Route, Routes } from 'react-router-dom'
import ScrollToTop from './utils/scrollToTop'

function App() {
	return (
		<div className='App'>
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
		</div>
	)
}

export default App
