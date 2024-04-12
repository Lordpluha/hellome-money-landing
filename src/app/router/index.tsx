import { lazy } from 'react'
import { createBrowserRouter } from 'react-router-dom'

import Layout from '@pages/Layout'

const Home = lazy(() => import('@pages/Home'))
const Page404 = lazy(() => import('@pages/404'))
const Error = lazy(() => import('@pages/Error'))

export const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		errorElement: <Error />,
		children: [
			{
				index: true,
				element: <Home />
			},
			{
				path: '*',
				element: <Page404 />
			}
		]
	}
])
