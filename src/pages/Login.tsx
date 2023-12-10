/* eslint-disable react/jsx-props-no-spreading */
import { Button, PasswordInput, TextInput, Title } from '@mantine/core'
import { useForm } from '@mantine/form'
import { useSearchParams } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'

export default function LoginPage(): JSX.Element {
	const { login } = useAuth()

	const [searchParams] = useSearchParams()
	const redirectUrl = decodeURIComponent(searchParams.get('back') ?? '/')
	console.log(`LoginPage: redirectUrl: ${redirectUrl}`)

	const handleSubmit = (values: { email: string; password: string }): void => {
		login(
			{
				id: values.email,
				name: values.email
			},
			redirectUrl
		)
	}

	const form = useForm({
		initialValues: {
			email: '',
			password: ''
		},

		validate: {
			email: value => (/^\S+@\S+$/.test(value) ? null : 'Invalid email')
		}
	})

	return (
		<div className='mx-auto my-8 container'>
			<form
				onSubmit={form.onSubmit(handleSubmit)}
				className='mt-2 flex flex-col'
			>
				<Title order={3} className='mb-3'>
					Log In
				</Title>

				<TextInput
					className='mb-4'
					withAsterisk
					label='Email'
					placeholder='your@email.com'
					{...form.getInputProps('email')}
				/>
				<PasswordInput
					className='mb-4'
					withAsterisk
					label='Password'
					placeholder='Your password'
					{...form.getInputProps('password')}
				/>
				<Button type='submit'>Login In</Button>
			</form>
		</div>
	)
}
