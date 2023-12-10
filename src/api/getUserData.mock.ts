import type { IUser } from 'types'

const getUserData = async (): Promise<IUser | null> =>
	new Promise(resolve => {
		const delay = 3000
		setTimeout(() => {
			const userString = window.localStorage.getItem('user') ?? ''
			if (userString === '') resolve(null)
			try {
				const user = JSON.parse(userString) as IUser
				resolve(user)
			} catch (error) {
				resolve(null)
			}
		}, delay)
	})

export default getUserData
