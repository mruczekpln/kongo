import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { Toaster } from 'react-hot-toast'

import MainRouter from './pages/router'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<Toaster
			toastOptions={{
				// className: 'bg-bg-secondary text-text-primary rounded-sm border-2 border-text-secondary',
				success: {
					// className: 'bg-bg-secondary text-text-primary rounded-sm border-2',
					style: {
						border: 'solid green',
						backgroundColor: '#4C4C47',
						color: '#E5DCC5',
						width: 'max-content',
						maxWidth: '600px',
						fontFamily: 'JetBrains Mono'
					}
				},
				error: {
					// className: 'bg-bg-secondary text-text-primary rounded-sm border-2',
					style: {
						border: 'solid red',
						backgroundColor: '#4C4C47',
						color: '#E5DCC5',
						width: 'max-content',
						maxWidth: '600px',
						fontFamily: 'JetBrains Mono'
					}
				}
			}}
		></Toaster>
		<MainRouter />
	</React.StrictMode>
)
