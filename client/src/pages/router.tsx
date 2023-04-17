import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ForgotPasswordPage from './ForgotPassword'
import LandingPage from './Landing'

import LogInPage from './LogIn'
import RegisterPage from './Register'

const router = createBrowserRouter([
	{
		path: '/*',
		element: <LandingPage />,
		errorElement: <LandingPage />
	},
	{
		path: '/login',
		element: <LogInPage />
	},
	{
		path: '/register',
		element: <RegisterPage />
	},
	{
		path: '/forgot-password',
		element: <ForgotPasswordPage />
	}
])

export default function MainRouter() {
	return <RouterProvider router={router}></RouterProvider>
}
