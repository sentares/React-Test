import { useViewportSize } from '../hooks/useViewportSize'

export function Task4() {
	const { width, height } = useViewportSize()

	return (
		<>
			Width: {width}, height: {height}
		</>
	)
}
