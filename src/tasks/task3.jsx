import { useHover } from '../hooks/useHover'

export function Task3() {
	const { hovered, ref } = useHover()

	return (
		<div ref={ref} style={{ cursor: 'pointer' }}>
			{hovered ? 'На меня навели мышку' : 'Наведи мышкой на меня'}
		</div>
	)
}
