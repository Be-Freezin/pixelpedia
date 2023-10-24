import React from 'react'


const GameCard = ({ key, name, image }) => {
	return (
		<div>
			<div key={key}>
				<h2>{name}</h2>
				<img src={image} alt={name} />
			</div>
		</div>
	)
}

export default GameCard
