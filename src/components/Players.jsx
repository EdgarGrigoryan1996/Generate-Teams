import React from 'react'
import { useDispatch, useSelector } from 'react-redux/es/exports'
import Player from './Player'

export default function Players() {
	const dispatch = useDispatch()
	const players = useSelector((state) => {
		return state.players
	})
	return (
		<div className='players'>
			{players.map((player) => {
				return (
					<div className="players-block">
						<Player player={player} key={Math.random()} />
					</div>


				)
			})}
			<button onClick={() => {
				dispatch({
					type: "GENERATE_TEAMS"
				})
			}}>Generate Teams</button>
		</div>
	)
}
