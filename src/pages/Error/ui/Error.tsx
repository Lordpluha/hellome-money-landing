import { useRouteError } from 'react-router-dom'

const Error = () => {
	const error = useRouteError()
	console.error(error)
	return (
		<div className='flex justify-center align-center'>
			Error. Info in console
		</div>
	)
}

export default Error
