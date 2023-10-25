import React from 'react'

const GameCard = ({
	id,
	name,
	image,
	release,
	esrb_rating,
	score,
	platforms,
	genres,
	clip,
	tags,
}) => {
	
	return (
		<div>
			<div
				id={id}
				className='bg-secondary-surface w-96 h-full mt-8 rounded-lg p-4 flex flex-col'
			>
				<img
					src={image}
					alt={name}
					className='border-4 border-primary-border rounded-md mb-4 h-52'
				/>
				<div className='flex items-start justify-between'>
					<h2 className='font-extrabold text-xl'>{name}</h2>
					<div className={`bg-lime-500 px-2 py-1 border-2 border-primary-border rounded-md text-score-text font-bold`}>
						<span>{score}</span>
					</div>
				</div>
				<div className='flex w-1/2'>
					<p className='text-md text-alternate-text'>
						{genres.map((genre) => genre.name).join(', ')}
					</p>
				</div>
				{/* <span className=' text-xs'>Released: {release}</span> */}
			</div>
		</div>
	)
}

export default GameCard
