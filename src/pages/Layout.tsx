import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'

import Header from '@widgets/Header'

import styles from './Layout.module.scss'
import { Footer } from '@widgets/Footer'

const Layout = () => {
	return (
		<div className='flex flex-col justify-between min-h-screen'>
			<Header />
			<main className="px-16">
				<Suspense fallback={<h1>Loading...</h1>}>
					<Outlet />
				</Suspense>
			</main>
			<Footer />
		</div>
	)
}

export default Layout
