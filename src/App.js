import AddPlayer from "./components/AddPlayer";
import Players from "./components/Players";
import Teams from "./components/Teams";
import "./style.css"
function App() {
	return (
		<div className="App">
			<AddPlayer />
			<div className="wrapper">
				<div className="players"><Players /></div>
				<div className="teams"><Teams /></div>
			</div>

		</div >
	);
}

export default App;
