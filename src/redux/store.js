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
			let team1 = []
			let team2 = []
			const playersCount = state.players.length

			team1 = state.players.slice(0, Math.floor(playersCount / 2))
			team2 = state.players.slice(Math.floor(playersCount / 2))

			function generateTeams(team1, team2) {
				let player1 = team1.splice(Math.random() * team1.length, 1)
				let player2 = team2.splice(Math.random() * team2.length, 1)
				team1.push(...player2)
				team2.unshift(...player1)
				let team1Rating = team1.reduce((aggr, player) => {
					return aggr + +player.skill
				}, 0)

				let team2Rating = team2.reduce((aggr, player) => {
					return aggr + +player.skill
				}, 0)

				if ((team1Rating - team2Rating < 3 && team1Rating - team2Rating >= 0) || (team2Rating - team1Rating < 3 && team2Rating - team1Rating >= 0)) {
					console.log(team1)
					console.log(team2)
					return {
						players: [...state.players],
						team1: team1,
						team2: team2
					}
				}
				else {
					generateTeams(team1, team2)
				}
			}
			let test = generateTeams(team1, team2)
			console.log(test)
			return test
		default:
			return state
	}
}

const store = createStore(reducer, initialState)

export default store