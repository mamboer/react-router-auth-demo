import { Alert } from '@mantine/core'
import { Suspense } from 'react'
import { Await, useLoaderData, useOutlet } from 'react-router-dom'
import type { IUser } from 'types'
import { AuthProvider } from '../../hooks/useAuth'
import LinearProgress from '../LinearProgress'

export default function AuthLayout(): JSX.Element {
	const outlet = useOutlet()

	const { userPromise } = useLoaderData() as {
		userPromise: Promise<IUser | null>
	}

	return (
		<Suspense fallback={<LinearProgress />}>
			<Await
				resolve={userPromise}
				errorElement={<Alert color='red'>Something went wrong!</Alert>}
			>
				{user => <AuthProvider userData={user as IUser}>{outlet}</AuthProvider>}
			</Await>
		</Suspense>
	)
}
