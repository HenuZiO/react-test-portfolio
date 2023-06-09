import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import App from './App.jsx'
import './18n'
import './assets/styles/global.css'

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<BrowserRouter>
			<Suspense fallback={<div>Loading...</div>}>
				<App />
			</Suspense>
		</BrowserRouter>
	</React.StrictMode>
)
