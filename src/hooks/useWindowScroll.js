import { useState } from 'react'
import { useThrottledCallback } from './useThrottledCallback'
import { useWindowEvent } from './useWindowEvent'

function getScrollPosition() {
	if (typeof window === 'undefined') return { x: 0, y: 0 }

	const { scrollX = 0, scrollY = 0 } = window
	return { x: scrollX, y: scrollY }
}

export function useWindowScroll(throttleDelay = 400) {
	const [scroll, setScroll] = useState(() => getScrollPosition())

	const handleScroll = useThrottledCallback(() => {
		const newScroll = getScrollPosition()
		setScroll(prev =>
			prev.x !== newScroll.x || prev.y !== newScroll.y ? newScroll : prev
		)
	}, throttleDelay)

	useWindowEvent('scroll', handleScroll)

	const scrollTo = ({ x = 0, y = 0 }) => {
		const targetX = x ?? scroll.x
		const targetY = y ?? scroll.y

		window.scrollTo({ left: targetX, top: targetY })
		setScroll({ x: targetX, y: targetY })
	}

	return [scroll, scrollTo]
}
