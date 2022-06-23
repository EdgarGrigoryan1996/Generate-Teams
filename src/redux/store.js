import { createStore } from "redux";

const initialState = {
	players: [],
	team1: [],
	team2: []
}

function reducer(state, action) {
	switch (action.type) {
		case "ADD_PLAYER":

			return {
				...state,
				players: [
					...state.players,
					{
						name: action.payload.name,
						skill: action.payload.skill
					}
				]
			}

		case "GENERATE_TEAMS":
			const playersCount = state.players.length
			const allRating = state.players.reduce((aggr, player) => {
				return aggr + +player.skill
			}, 0)
			console.log(playersCount)
			console.log(allRating)
			console.log(allRating / 2)
			return state



		default:
			return state
	}
}

const store = createStore(reducer, initialState)

export default store