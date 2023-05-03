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
			{/* <Home /> */}
			{/* <Contacts /> */}
			<Projects />
			<Footer />
		</div>
	)
}

export default App
