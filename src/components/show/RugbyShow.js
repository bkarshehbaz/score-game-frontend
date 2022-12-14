import ScoreCard from "../../features/scores/ScoreCard";
import InfoCard from "../../features/info/InfoCard";
import TimerShow from "../../features/timer/TimerShow";
import "../control/styles/ScoreBoard.scss";

export default function RugbyShow({
  team1,
  team2,
  period,
  homeScore,
  awayScore,
  minutes,
  seconds,
}) {
  return (
    <div className="scoreboard">
      <div className="scoreboard-container container-sm justify-content-center align-items-center">
        <form className="scoreboard-card row g-0 justify-content-center">
          <div className="col-sm-12 col-md-6 card bg-transparent text-center">
            <div className="card-header">
              <input type="text" className="col-sm-6" value={team1} readOnly />
            </div>
          </div>
          <div className="col-sm-12 col-md-6 card bg-transparent text-center">
            <div className="card-header">
              <input type="text" className="col-sm-6" value={team2} readOnly />
            </div>
          </div>
        </form>

        <div className="scoreboard-card card">
          <div className="card-header row g-0 justify-content-center">
            <h5 className="col-sm-12 col-md-12 text-center">Puntos</h5>
          </div>

          <div className="row g-0 justify-content-center two-buttons">
            <ScoreCard title={team1} score={homeScore} player={"home"} />
            <ScoreCard title={team2} score={awayScore} player={"away"} />
          </div>
        </div>

        <div className="scoreboard-card row g-0 justify-content-center">
          <InfoCard title="Periodo" info={period} />
          <TimerShow minutes={minutes} seconds={seconds} />
        </div>
      </div>
    </div>
  );
}
