import { useWindowScroll } from '../hooks/useWindowScroll'

export function TaskDop1() {
	const [scroll, scrollTo] = useWindowScroll()

	return (
		<div>
			<p style={{ position: 'fixed', top: '0', left: '0' }}>
				Scroll position x: {scroll.x}, y: {scroll.y}
			</p>
			<button onClick={() => scrollTo({ y: 0 })}>Scroll to top</button>
		</div>
	)
}
