import { useCallback, useReducer } from 'react'

function getInitialState(values) {
	if (!Array.isArray(values) || values.length === 0) {
		return { index: 0, data: [true, false] }
	} else {
		return { index: 0, data: values }
	}
}

function reducer(state, action) {
	switch (action.type) {
		case 'SET': {
			const index = state.data.indexOf(action.payload)
			if (index !== -1) {
				return { ...state, index }
			}
			return state
		}
		case 'NEXT': {
			const nextIndex =
				state.index + 1 >= state.data.length ? 0 : state.index + 1

			return { ...state, index: nextIndex }
		}
		default:
			throw new Error()
	}
}

export function useToggle(values) {
	const [state, dispatch] = useReducer(reducer, getInitialState(values))

	const toggle = useCallback(value => {
		if (value !== undefined) {
			dispatch({ type: 'SET', payload: value })
		} else {
			dispatch({ type: 'NEXT' })
		}
	}, [])

	return [state.data[state.index], toggle]
}
