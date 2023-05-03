import Navbar from './components/layouts/Navbar'
import Footer from './components/layouts/Footer'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Contacts from './pages/Contacts'
import Project from './pages/Project'
import { Route, Routes } from 'react-router-dom'

function App() {
	return (
		<div className='App'>
			<Navbar />

			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/contacts' element={<Contacts />} />
				<Route path='/projects' element={<Projects />} />
				<Route path='/project' element={<Project />} />
			</Routes>
			<Footer />
		</div>
	)
}

export default App
