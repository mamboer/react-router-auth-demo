import AuthLayout from 'components/Layout/AuthLayout'
import LoginPage from 'pages/Login'
import { lazy } from 'react'
import { createBrowserRouter, defer } from 'react-router-dom'

// import getUserDataError from 'api/getUserDataError.mock'
import getUserData from 'api/getUserData.mock'
import ProtectedLayout from 'components/Layout/ProtectedLayout'

const Gallery = lazy(async () => import('pages/Gallery'))
const Details = lazy(async () => import('pages/Details'))

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const loader = () => defer({ userPromise: getUserData() })

const router = createBrowserRouter([
	{
		element: <AuthLayout />,
		loader,
		children: [
			{
				path: '/',
				element: <Gallery />
			},
			{
				path: '/login',
				element: <LoginPage />
			},
			{
				element: <ProtectedLayout />,
				children: [
					{
						path: '/:fruitName',
						element: <Details />
					}
				]
			}
		]
	}
])

export default router
