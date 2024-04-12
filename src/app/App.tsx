import { router } from './router'
import { RouterProvider } from 'react-router-dom'
import { ParallaxProvider } from 'react-scroll-parallax';
function App() {
	return (
		<>
			<ParallaxProvider>
				<RouterProvider router={router} />
			</ParallaxProvider>
		</>
	)
}

export default App
