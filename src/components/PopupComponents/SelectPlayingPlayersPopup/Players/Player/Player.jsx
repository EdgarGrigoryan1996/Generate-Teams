import s from "./Player.module.css"
import {useDispatch} from "react-redux";
import {toggleIsChecked} from "../../../../../redux/reducers/defaultPlayersReducer";
import goldStar from "../../../../../assets/images/goldStar.png"
import emptyStar from "../../../../../assets/images/star.png"

const Player = ({player,index}) => {
    const dispatch = useDispatch()

    const toggle = () => {
        dispatch(toggleIsChecked(player.id))
    }
    const goldStarArray = []
    for(let i =0;i<player.rating;i++){
        goldStarArray.push(i)
    }
    const starArray = []
    for(let i =player.rating;i<9;i++){
        starArray.push(i)
    }
    let generateClassName = player.name + player.surname
    return (
        <label className={s.checkboxLabel} htmlFor={generateClassName}>
            <div className={player.inGame ? s.playerBlock + " " + s.playerInGame : s.playerBlock}>
                <div className={s.playerId}>{index+1}</div>
                <div className={s.playerImg}><img src={player.img} alt=""/></div>
                <div className={s.playerName}>{player.name}</div>
                <div className={s.playerSurname}>{player.surname}</div>
                <div className={s.playerRating}><span className={s.ratingBlock}>{player.rating}</span></div>
                <div className={s.starsBlock}>
                    {goldStarArray.map((star) => {
                        return (
                            <img key={Math.random()} className={s.star} src={goldStar} alt="goldStar"/>
                        )
                    })}
                    {starArray.map((star) => {
                        return (
                            <img key={Math.random()} className={s.star} src={emptyStar} alt="goldStar"/>
                        )
                    })}
                </div>
                <label className={s.container}>
                    <input type="checkbox" checked={player.isChecked} disabled={player.inGame} id={generateClassName}  onChange={() => {
                        toggle()
                    }}/>
                    <span className={s.checkmark}></span>
                </label>
            </div>
        </label>

    )
}

export default Player