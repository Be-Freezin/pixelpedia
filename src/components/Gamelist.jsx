import React from 'react'
import useFetch from '../hooks/useFetch'
import GameCard from './GameCard'

const Gamelist = () => {
	const { data, loading, error } = useFetch('games')
	if (loading) return <p>Loading...</p>
	if (error) return <p>Error loading data!</p>

	return (
		<div className='bg-primary-surface grid grid-cols-4 grid-rows-4 gap-y-4 '>
			{data.results.map((game) => (
				<GameCard
					key={game.id}
					id={game.id}
					name={game.name}
          release={game.released}
					image={game.background_image}
          esrb_rating={game.esrb_rating}
          score={game.metacritic}
          platforms={game.parent_platforms}
          genres={game.genres}
          clip={game.clip}
          tags={game.tags}
				/>
			))}
		</div>
	)
}

export default Gamelist
