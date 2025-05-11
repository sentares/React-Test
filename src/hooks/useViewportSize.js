import { useState, useEffect } from 'react'
import { useWindowEvent } from './useWindowEvent'
import { useThrottledCallback } from './useThrottledCallback'

function getViewportSize() {
	return {
		width: window?.innerWidth ?? 0,
		height: window?.innerHeight ?? 0,
	}
}

export function useViewportSize(throttleDelay = 400) {
	const [size, setSize] = useState(() => getViewportSize())

	const handleResize = useThrottledCallback(() => {
		const newSize = getViewportSize()

		setSize(prev =>
			prev.width !== newSize.width || prev.height !== newSize.height
				? newSize
				: prev
		)
	}, throttleDelay)

	useWindowEvent('resize', handleResize)

	useEffect(() => {
		handleResize()
	}, [handleResize])

	return size
}
