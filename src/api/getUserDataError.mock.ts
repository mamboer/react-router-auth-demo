import type { IUser } from 'types'

const getUserDataError = async (): Promise<IUser> =>
	new Promise((_, reject) => {
		const delay = 3000
		setTimeout(() => {
			reject(new Error('Something went wrong'))
		}, delay)
	})

export default getUserDataError
