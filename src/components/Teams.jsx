import React from 'react'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import Player from './Player'

export default function Teams() {
	const team1 = useSelector((state) => {
		return state.team1
	})
	const team2 = useSelector((state) => {
		return state.team2
	})
	console.log(team1)
	if (team1.length > 0) {
		return (
			<div className='teams-wrapper'>

				<div className="team1">
					<h3>Team 1</h3>
					<div className='players'>
						{team1.map((player) => {
							return (
								<div className="players-block">
									<Player player={player} key={Math.random()} />
								</div>
							)
						})}
					</div>
				</div>

				<div className="team2">
					<h3>Team 2</h3>
					<div className='players'>
						{team2.map((player) => {
							return (
								<div className="players-block">
									<Player player={player} key={Math.random()} />
								</div>
							)
						})}
					</div>
				</div>
			</div>
		)
	}
	else {
		return (
			<div className='teams-wrapper'>
				no teams
			</div>
		)
	}

}
