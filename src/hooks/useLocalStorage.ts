/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react'

export default function useLocalStorage(
	keyName: string,
	defaultValue: any
): [any, (value: any) => void] {
	const [storedValue, setStoredValue] = useState<any>(() => {
		try {
			const value: string | null = window.localStorage.getItem(keyName)

			if (value) {
				return JSON.parse(value)
			}
			window.localStorage.setItem(keyName, JSON.stringify(defaultValue))
			return defaultValue
		} catch {
			return defaultValue
		}
	})

	const setValue = (value: any): void => {
		try {
			window.localStorage.setItem(keyName, JSON.stringify(value))
		} catch {
			/* empty */
		}
		setStoredValue(value)
	}

	return [storedValue, setValue]
}
