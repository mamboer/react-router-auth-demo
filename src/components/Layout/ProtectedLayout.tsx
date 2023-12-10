/* eslint-disable react/jsx-no-useless-fragment */
import { Navigate, useLocation, useOutlet } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'

export default function ProtectedLayout(): JSX.Element {
	const { user } = useAuth()
	const outlet = useOutlet()

	const location = useLocation()
	const backUrl = encodeURIComponent(`${location.pathname}${location.search}`)
	const loginUrl = `/login?back=${backUrl}`

	console.log(
		`ProtectedLayout: user: ${JSON.stringify(
			user
		)}, backUrl: ${backUrl}, loginUrl: ${loginUrl}`
	)

	if (!user) {
		return <Navigate to={loginUrl} />
	}

	return <>{outlet}</>
}
