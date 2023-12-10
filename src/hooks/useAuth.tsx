import { createContext, useContext, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import type { IAuthContext, IAuthProviderProperties, IUser } from 'types'
import useLocalStorage from './useLocalStorage'

const AuthContext = createContext({} as IAuthContext)

export function AuthProvider({
	children,
	userData
}: IAuthProviderProperties): JSX.Element {
	// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
	const [user, setUser] = useLocalStorage('user', userData)
	const navigate = useNavigate()

	const user1 = user as IUser

	const login = async (data: IUser, backUrl?: string): Promise<void> => {
		setUser(data)
		navigate(backUrl ?? '/', { replace: true })
	}

	const logout = (backUrl?: string): void => {
		setUser(null)
		navigate(backUrl ?? '/', { replace: true })
	}

	const value = useMemo(
		() => ({
			user: user1,
			login,
			logout
		}),
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[user1]
	)

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useAuth = (): IAuthContext => useContext(AuthContext)
