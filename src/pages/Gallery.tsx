import { Alert } from '@mantine/core'
import { useQuery } from '@tanstack/react-query'
import getFruits from 'api/getFruits'
import Fruit from 'components/Fruit'
import Head from 'components/Head'
import LinearProgress from 'components/LinearProgress'
import LoadingOrError from 'components/LoadingOrError'
import type { ReactElement } from 'react'

export default function GalleryPage(): ReactElement {
	const { isLoading, isError, error, data } = useQuery({
		queryKey: ['fruits'],
		queryFn: getFruits
	})
	if (isError) {
		return <LoadingOrError error={error} />
	}
	if (isLoading) {
		return <LinearProgress />
	}

	return (
		<>
			<Head title='React Router V6 Auth Demo' />
			<Alert
				className='mx-auto mb-4 container'
				title='React Router V6 Auth Demo'
			>
				<h4>
					This is a demo of how to use React Router V6 to implement the
					protected routers (Router that needs authentication before rendering).
				</h4>
				<p>
					1. Home page is public. <br />
					2. Details page is protected. It will redirect to `/login page` if
					current user is not authenticated. <br />
				</p>
				<p>
					You can see the code for this demo on github:{' '}
					<a
						href='https://github.com/mamboer/react-router-auth-demo'
						target='_blank'
						rel='noreferrer'
					>
						react-router-auth-demo
					</a>
				</p>
			</Alert>
			<div className='grid grid-cols-[minmax(0,384px)] m-2 min-h-screen place-content-center gap-2 pb-10 md:grid-cols-[repeat(2,minmax(0,384px))] xl:grid-cols-[repeat(3,384px)] md:m-0'>
				{data?.map((fruit, index) => (
					<Fruit key={`FruitCard-${fruit.name}`} fruit={fruit} index={index} />
				))}
			</div>
		</>
	)
}
