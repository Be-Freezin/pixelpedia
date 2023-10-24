import React from 'react'
import useFetch from '../hooks/useFetch'

const Gamelist = () => {

  const {data, loading, error} = useFetch('games')
  if (loading) return <p>Loading...</p>
	if (error) return <p>Error loading data!</p>
  

  return (
		<div>
			{data.results.map((game) => (
				<div key={game.id}>
					<h2>{game.name}</h2>
					<img src={game.background_image} alt={game.name} />
				</div>
			))}
		</div>
	)
}

export default Gamelist