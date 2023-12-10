export interface IFruit {
	name: string
	image: {
		author: {
			name: string
			url: string
		}
		color: string
		url: string
	}
	metadata: {
		name: string
		value: string
	}[]
}

export interface IUser {
	name: string
	id: string
}

/**
 * Interface for the authentication context.
 */
export interface IAuthContext {
	user: IUser | null
	login: (data: IUser, backUrl?: string) => void
	logout: (backUrl?: string) => void
}

export interface IAuthProviderProperties {
	children: React.ReactNode
	userData: IUser | null
}
