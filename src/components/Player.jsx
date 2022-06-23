import React from 'react'

export default function Player({ player }) {
	return (
		<div className='player'>
			<div className="name">{player.name}</div>
			<div className="skill">{player.skill}</div>
		</div>
	)
}
