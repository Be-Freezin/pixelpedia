import { useState, useEffect } from 'react'
import axios from 'axios'

const BASE_URL = 'https://api.rawg.io/api'
const API_KEY = import.meta.env.VITE_API_KEY

fetch(`https://api.rawg.io/api/games?key=${API_KEY}`)
	.then((response) => {
		if (!response.ok) {
			throw new Error(`HTTP error! Status: ${response.status}`)
		}
		return response.json()
	})
	.then((data) => console.log(data))
	.catch((error) => console.error('Fetch error:', error))

function useFetch(endpoint) {
	const [data, setData] = useState(null)
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(null)



	useEffect(() => {
		const fetchData = async () => {
			setLoading(true)
			try {
				const response = await axios.get(`${BASE_URL}/${endpoint}`, {
					params: {
						key: API_KEY,
						page_size: 40
					},
				})
				setData(response.data)
				setError(null)
			} catch (err) {
				setError(err)
			} finally {
				setLoading(false)
			}
		}
		fetchData()
	}, [endpoint])

	return { data, loading, error }
}

export default useFetch
