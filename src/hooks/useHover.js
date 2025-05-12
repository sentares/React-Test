import { useCallback, useEffect, useRef, useState } from 'react'

export function useHover() {
	const [hovered, setHovered] = useState(false)
	const ref = useRef(null)

	const handleMouseOver = useCallback(() => setHovered(true), [])
	const handleMouseOut = useCallback(() => setHovered(false), [])

	useEffect(() => {
		const node = ref.current

		if (!node) return

		node.addEventListener('mouseover', handleMouseOver)
		node.addEventListener('mouseout', handleMouseOut)

		return () => {
			node.removeEventListener('mouseover', handleMouseOver)
			node.removeEventListener('mouseout', handleMouseOut)
		}
	}, [handleMouseOver, handleMouseOut])

	return { hovered, ref }
}
