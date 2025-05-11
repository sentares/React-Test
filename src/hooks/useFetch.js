import { useState, useEffect, useCallback } from 'react'

export function useFetch(url) {
	const [data, setData] = useState(null)
	const [isLoading, setIsLoading] = useState(false)
	const [error, setError] = useState(null)
	const [options, setOptions] = useState({ url, params: null })

	const buildQueryString = params => {
		const query = new URLSearchParams(params).toString()
		return query ? `?${query}` : ''
	}

	const fetchData = useCallback(async (url, params) => {
		setIsLoading(true)
		setError(null)

		try {
			const query = buildQueryString(params)
			const response = await fetch(url + query)
			if (!response.ok) throw new Error('Ошибка загрузки')
			const json = await response.json()
			setData(json)
		} catch (err) {
			setError(err)
			setData(null)
		} finally {
			setIsLoading(false)
		}
	}, [])

	useEffect(() => {
		fetchData(options.url, options.params)
	}, [fetchData, options])

	const refetch = ({ params } = {}) => {
		setOptions(prev => ({
			...prev,
			params: params || null,
		}))
	}

	return { data, isLoading, error, refetch }
}
