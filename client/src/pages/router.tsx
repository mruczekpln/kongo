import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import LogInPage from './LogIn'
import RegisterPage from './Register'

const router = createBrowserRouter([
	{
		path: '/login',
		element: <LogInPage />
	},
	{
		path: '/register',
		element: <RegisterPage />
	}
])

export default function MainRouter() {
	return <RouterProvider router={router}></RouterProvider>
}
