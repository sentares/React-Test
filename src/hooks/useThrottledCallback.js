import { useCallback, useEffect, useRef } from 'react'

export function useThrottledCallback(callback, delay = 400) {
	const lastCall = useRef(Date.now())
	const timeoutId = useRef(null)

	useEffect(() => {
		return () => {
			if (timeoutId.current) {
				clearTimeout(timeoutId.current)
			}
		}
	}, [])

	return useCallback(() => {
		if (Date.now() >= lastCall.current + delay) {
			lastCall.current = Date.now()
			callback()
		} else {
			const remaining = delay - (Date.now() - lastCall.current)

			const timerId = setTimeout(() => {
				lastCall.current = Date.now()
				callback()
			}, remaining)

			return () => {
				clearTimeout(timerId)
			}
		}
	}, [callback, delay])
}
