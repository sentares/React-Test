import { useToggle } from '../hooks/useToggle'

export function TaskDop2() {
	const [value, toggle] = useToggle(['blue', 'orange', 'cyan', 'teal'])

	return (
		<>
			<button onClick={() => toggle()}>
				{typeof value === 'boolean' ? `${value}` : value}
			</button>
		</>
	)
}
