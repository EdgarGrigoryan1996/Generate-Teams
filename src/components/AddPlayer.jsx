import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
export default function AddPlayer() {
	const dispatch = useDispatch()
	const state = useSelector((state) => {
		return state
	})
	const [player, setPlayer] = useState({
		name: "",
		skill: null
	})

	useEffect(() => {
		console.log(state)
	}, [state])

	function changeSkill(e) {
		setPlayer({
			name: player.name,
			skill: e.target.value
		})
	}

	return (
		<div className="form-wrapper">
			<div className="form-block">
				<form action="">
					<div className="player-name">
						<input type="text" placeholder='Player Name' value={player.name} onChange={(e) => {
							setPlayer({
								name: e.target.value,
								skill: player.skill
							})
						}} />
					</div>
					<div className="player-skill">
						<input type="radio" name="skill" value="1" id="s1" onChange={changeSkill} /> <label htmlFor="s1">1</label>
						<input type="radio" name="skill" value="2" id="s2" onChange={changeSkill} /> <label htmlFor="s2">2</label>
						<input type="radio" name="skill" value="3" id="s3" onChange={changeSkill} /> <label htmlFor="s3">3</label>
						<input type="radio" name="skill" value="4" id="s4" onChange={changeSkill} /> <label htmlFor="s4">4</label>
						<input type="radio" name="skill" value="5" id="s5" onChange={changeSkill} /> <label htmlFor="s5">5</label>
						<input type="radio" name="skill" value="6" id="s6" onChange={changeSkill} /> <label htmlFor="s6">6</label>
						<input type="radio" name="skill" value="7" id="s7" onChange={changeSkill} /> <label htmlFor="s7">7</label>
						<input type="radio" name="skill" value="8" id="s8" onChange={changeSkill} /> <label htmlFor="s8">8</label>
						<input type="radio" name="skill" value="9" id="s9" onChange={changeSkill} /> <label htmlFor="s9">9</label>
						<input type="radio" name="skill" value="10" id="s10" onChange={changeSkill} /> <label htmlFor="s10">10</label>
					</div>
					<div className="btn-add">
						<button onClick={(e) => {
							e.preventDefault()
							dispatch({
								type: "ADD_PLAYER",
								payload: {
									name: player.name,
									skill: player.skill
								}
							})
							setPlayer({
								name: "",
								skill: null
							})
						}}>ADD</button>
					</div>

				</form>
			</div>
		</div>
	)
}
