import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  incrementPeriod,
  decrementPeriod,
  incrementHomeFouls,
  decrementHomeFouls,
  incrementAwayFouls,
  decrementAwayFouls,
  selectHomeFouls,
  selectAwayFouls,
  selectPeriod,
  selectExtraTime,
  incrementExtraTime,
  decrementExtraTime,
  selectTeam1,
  selectTeam2,
  setTeam1,
  setTeam2,
  resetFouls,
  resetInfo,
} from "../../features/info/infoSlice";
import {
  updateScore,
  selectHomeScore,
  selectAwayScore,
  resetScores,
  resetAll,
} from "../../features/scores/scoreSlice";
import useControl from "./useControl";
import ScoreCard from "../../features/scores/ScoreCard";
import InfoCard from "../../features/info/InfoCard";
import Timer from "../../features/timer/Timer";
import "./styles/ScoreBoard.scss";
import { resetTime, updateInitialTime } from "../../features/timer/timerSlice";

export default function FootballControl() {
  const dispatch = useDispatch();

  const scoreboardId = useControl("Football", true);
  const period = useSelector(selectPeriod);

  const extraTime = useSelector(selectExtraTime);

  const homeFouls = useSelector(selectHomeFouls);
  const awayFouls = useSelector(selectAwayFouls);

  const homeScore = useSelector(selectHomeScore);
  const awayScore = useSelector(selectAwayScore);

  const team1 = useSelector(selectTeam1);
  const team2 = useSelector(selectTeam2);

  const inputChanged = (event) => {
    const target = event.target;
    const value = target.value;

    if (target.id === "team1") {
      dispatch(setTeam1(value));
    } else if (target.id === "team2") {
      dispatch(setTeam2(value));
    }
  };

  useEffect(() => {
    dispatch(updateInitialTime(0));
    return () => {
      dispatch(resetInfo());
      dispatch(resetAll());
      dispatch(resetTime());
    };
  }, []);

  return (
    <div className="scoreboard">
      <div className="scoreboard-container container-sm justify-content-center align-items-center">
        <form className="scoreboard-card row g-0 justify-content-center">
          <div className="col-sm-12 col-md-6 card text-center">
            <div className="card-header">
              <input
                type="text"
                className="col-sm-6"
                placeholder={team1}
                value={team1}
                id="team1"
                aria-label="Team1"
                onChange={inputChanged}
              />
            </div>
          </div>
          <div className="col-sm-12 col-md-6 card text-center">
            <div className="card-header">
              <input
                type="text"
                className="col-sm-6"
                placeholder={team2}
                value={team2}
                id="team2"
                aria-label="Team2"
                onChange={inputChanged}
              />
            </div>
          </div>
        </form>

        <div className="scoreboard-card card">
          <div className="card-header row g-0 justify-content-center">
            <h5 className="col-sm-12 col-md-12 text-center">Penales</h5>
            <button
              type="button"
              className="btn-sm col-xs-2 col-md-1 btn btn-danger"
              onClick={() => dispatch(resetFouls())}
            >
              Reset
            </button>
          </div>
          <div className="row g-0 justify-content-center infor-card-outer-wrapper">
            <InfoCard
              title={team1}
              info={homeFouls}
              incrementInfo={incrementHomeFouls}
              decrementInfo={decrementHomeFouls}
            />
            <InfoCard
              title={team2}
              info={awayFouls}
              incrementInfo={incrementAwayFouls}
              decrementInfo={decrementAwayFouls}
            />
          </div>
        </div>

        <div className="scoreboard-card card">
          <div className="card-header row g-0 justify-content-center">
            <h5 className="col-sm-12 col-md-12 text-center">Goles</h5>
            <button
              type="button"
              className="btn-sm col-xs-2 col-md-1 btn btn-danger"
              onClick={() => dispatch(resetScores())}
            >
              Reset
            </button>
          </div>

          <div className="row g-0 justify-content-center">
            <ScoreCard
              score={homeScore}
              updateScore={updateScore}
              points={[-1, 1]}
              player={"home"}
              title={team1}
            />
            <ScoreCard
              score={awayScore}
              updateScore={updateScore}
              points={[-1, 1]}
              player={"away"}
              title={team2}
            />
          </div>
        </div>

        <div className="scoreboard-card row g-0 justify-content-center">
          <InfoCard
            title="Periodo"
            info={period}
            incrementInfo={incrementPeriod}
            decrementInfo={decrementPeriod}
          />
          <Timer control ascending />
          {
            <InfoCard
              title="Tiempo Extra"
              info={extraTime}
              incrementInfo={incrementExtraTime}
              decrementInfo={decrementExtraTime}
              extraTime
            />
          }
        </div>

        <div className="row g-0 justify-content-center scoreboard-row">
          <button
            type="button"
            className="btn btn-primary btn-lg col-xs-2 col-md-2"
            onClick={() => window.open(`/share/${scoreboardId}`, "_blank")}
          >
            Mostrar tablero
          </button>
          <button
            type="button"
            className="btn-sm col-xs-2 col-md-2 btn btn-danger"
            onClick={() => {
              dispatch(resetInfo());
              dispatch(resetScores());
              dispatch(resetTime());
            }}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}
